import { MenuItem, Course } from '../models/MenuItem';

export function getAveragePriceByCourse(items: MenuItem[]): Record<Course, number> {
  const sums: Record<string, { total: number; count: number }> = {};
  let i = 0;
  while (i < items.length) {
    const item = items[i];
    if (!sums[item.course]) sums[item.course] = { total: 0, count: 0 };
    sums[item.course].total += item.price;
    sums[item.course].count += 1;
    i++;
  }

  const averages = {} as Record<Course, number>;
  for (const key in sums) {
    const k = key as Course;
    averages[k] = Math.round((sums[k].total / sums[k].count) * 100) / 100;
  }

  const courses: Course[] = ['Starter', 'Main', 'Dessert', 'Drink'];
  for (const c of courses) {
    if (averages[c] === undefined) averages[c] = 0;
  }
  return averages;
}
