import { transformUser } from './utils';
import type { UserData } from './models';

export async function getUser(id: string) {
  try {
    const response = await fetch('/kitaichekVue/api/users/api.json');
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const users: UserData[] = await response.json();
    const user = users.find(user => user.id === id);

    if (!user) {
      throw new Error('User not found');
    }

    return transformUser(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw new Error('Failed to fetch user data');
  }
}
