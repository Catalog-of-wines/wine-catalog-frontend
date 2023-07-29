import { client } from '../utils/axiosClient';
import { Wine } from '../types/Wine';

export const getWines = (query: string) => { 
  return client.get<Wine[]>(query);
};

export const getOneWine = (wineId: string) => {
  return client.get<Wine>(`/catalog/${wineId}`);
};

export const getAromaCategories = () => {
  return client.get<string[]>('/aroma_mappings');
}
