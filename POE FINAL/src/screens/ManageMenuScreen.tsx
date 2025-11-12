import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { menuStore } from '../store/menuStore';
import { MenuList } from '../components/MenuList';

export const ManageMenuScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [priceText, setPriceText] = useState('');
  const [course, setCourse] = useState<'Starter'|'Main'|'Dessert'|'Drink'>('Starter');
  const [, setTick] = useState(0);

  const add = async () => {
    const price = parseFloat(priceText);
    if (!name || isNaN(price)) return;
    await menuStore.addItem(name, course, price);
    setName(''); setPriceText('');
    setTick(t => t + 1);
  };

  const remove = async (id: string) => {
    await menuStore.removeItem(id);
    setTick(t => t + 1);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Add Menu Item (Chef)</Text>

      <TextInput placeholder="Name" value={name} onChangeText={setName} style={{ borderWidth: 1, marginVertical:6, padding:8 }} />
      <TextInput placeholder="Price" value={priceText} onChangeText={setPriceText} keyboardType="numeric" style={{ borderWidth: 1, marginVertical:6, padding:8 }} />

      <Picker selectedValue={course} onValueChange={(v) => setCourse(v as any)}>
        <Picker.Item label="Starter" value="Starter" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
        <Picker.Item label="Drink" value="Drink" />
      </Picker>

      <Button title="Add Item" onPress={add} />

      <Text style={{ marginTop: 16, fontSize: 16 }}>Current Items</Text>
      <MenuList items={menuStore.menuItems} onRemove={remove} />
    </View>
  );
};
