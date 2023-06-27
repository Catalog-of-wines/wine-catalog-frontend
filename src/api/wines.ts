import { Wine } from '../types/Wine';
import { client } from '../utils/fetchClient';

interface Message {
  message: string;
}

export const testCall = () => {
  return client.get<Message>('/');
};


export const getWines = () => {
  return client.get<Wine[]>('/wine');
};

// export const getOneWine = (wineId: number) => {
//   return client.get<Wine[]>(`/wine?wineId=${wineId}`);
// };

