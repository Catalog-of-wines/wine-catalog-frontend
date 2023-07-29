import { client } from '../utils/axiosClient';
import { User } from '../types/User';

export const getOneUser = (user_id: string) => {
  return client.get<User>(`/user/${user_id}`);
};
