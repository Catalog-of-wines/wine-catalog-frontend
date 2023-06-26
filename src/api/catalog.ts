import { Wine } from '../types/Wine';
import { client } from '../utils/fetchClient';

interface Message {
  message: string;
}

export const testCall = () => {
  return client.get<Message>('/');
};


export const getCatalog = () => {
  return client.get<Wine[]>('/catalog');
};

export const getOneWine = (wineId: string) => {
  return client.get<Wine>(`/catalog/${wineId}`);
};


