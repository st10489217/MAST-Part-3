export type Course = 'Starter' | 'Main' | 'Dessert' | 'Drink';

export interface MenuItem {
  id: string;
  name: string;
  course: Course;
  price: number;
}
