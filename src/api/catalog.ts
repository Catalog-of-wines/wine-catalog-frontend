import { Wine } from '../types/Wine';
import { client } from '../utils/fetchClient';

interface Message {
  message: string;
}

export const testCall = () => {
  return client.get<Message>('/');
};


export const getCatalog = (query: string) => {
  console.log(`/${query}`);
  
  return client.get<Wine[]>(`/${query}`);
};

export const getOneWine = (wineId: string) => {
  return client.get<Wine>(`/catalog/${wineId}`);
};

export const getAromaCategories = () => {
  return client.get<string[]>('/aroma_mappings');
}

export const getFoodCategories = () => {
  return client.get<string[]>('/food');
}

