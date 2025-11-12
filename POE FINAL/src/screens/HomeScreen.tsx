import React, { useEffect, useState } from 'react';
import { ScrollView, Text, Button, View } from 'react-native';
import { menuStore } from '../store/menuStore';
import { getAveragePriceByCourse } from '../utils/priceUtils';
import { MenuList } from '../components/MenuList';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const [refreshTick, setRefreshTick] = useState(0);

  useEffect(() => {
    (async () => {
      await menuStore.loadFromStorage();
      setRefreshTick(t => t + 1);
    })();
  }, []);

  const averages = getAveragePriceByCourse(menuStore.menuItems);

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>Complete Menu</Text>

      <Text style={{ fontSize: 16, marginTop: 12 }}>Average price by course:</Text>
      {Object.entries(averages).map(([course, avg]) => (
        <Text key={course}>{course}: R{avg.toFixed(2)}</Text>
      ))}

      <View style={{ marginTop: 16 }}>
        <MenuList items={menuStore.menuItems} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Manage Menu (Chef)" onPress={() => navigation.navigate('ManageMenu' as never)} />
        <Button title="Filter by Course (Guest)" onPress={() => navigation.navigate('Filter' as never)} />
      </View>
    </ScrollView>
  );
};
