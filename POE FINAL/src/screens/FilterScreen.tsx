import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { MenuList } from '../components/MenuList';
import { menuStore } from '../store/menuStore';

export const FilterScreen: React.FC = () => {
  const [filter, setFilter] = useState<'All'|'Starter'|'Main'|'Dessert'|'Drink'>('All');
  const items = filter === 'All' ? menuStore.menuItems : menuStore.menuItems.filter(mi => mi.course === filter);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Filter Menu</Text>
      <View style={{ flexDirection: 'row', marginVertical: 8 }}>
        <Button title="All" onPress={() => setFilter('All')} />
        <Button title="Starter" onPress={() => setFilter('Starter')} />
        <Button title="Main" onPress={() => setFilter('Main')} />
        <Button title="Dessert" onPress={() => setFilter('Dessert')} />
        <Button title="Drink" onPress={() => setFilter('Drink')} />
      </View>

      <MenuList items={items} />
    </View>
  );
};
