import { MenuItem } from '../models/MenuItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

export const menuStore: {
  menuItems: MenuItem[];
  addItem: (name: string, course: MenuItem['course'], price: number) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  loadFromStorage: () => Promise<void>;
  saveToStorage: () => Promise<void>;
} = {
  menuItems: [],
  async addItem(name, course, price) {
    const newItem: MenuItem = { id: uuidv4(), name, course, price };
    for (let i = 0; i < 1; i++) {
      this.menuItems.push(newItem);
    }
    await this.saveToStorage();
  },
  async removeItem(id) {
    for (const i in this.menuItems) {
      if (this.menuItems[i].id === id) {
        this.menuItems.splice(Number(i), 1);
        break;
      }
    }
    await this.saveToStorage();
  },
  async loadFromStorage() {
    const raw = await AsyncStorage.getItem('@menu_items_v1');
    if (raw) this.menuItems = JSON.parse(raw);
  },
  async saveToStorage() {
    await AsyncStorage.setItem('@menu_items_v1', JSON.stringify(this.menuItems));
  },
};
