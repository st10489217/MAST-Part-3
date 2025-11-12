import React from 'react';
import { View, Text, Button } from 'react-native';
import { MenuItem } from '../models/MenuItem';

export const MenuList: React.FC<{ items: MenuItem[], onRemove?: (id: string) => void }> = ({ items, onRemove }) => (
  <View>
    {items.map(it => (
      <View key={it.id} style={{ padding: 8, borderBottomWidth: 1 }}>
        <Text>{it.name} — {it.course} — R{it.price.toFixed(2)}</Text>
        {onRemove && <Button title="Remove" onPress={() => onRemove(it.id)} />}
      </View>
    ))}
    {items.length === 0 && <Text>No menu items yet.</Text>}
  </View>
);
