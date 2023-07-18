import { Wine } from '../types/Wine';
import { client } from '../utils/fetchClient';

export const getWines = (query: string) => { 
  return client.get<Wine[]>(query);
};

export const getOneWine = (wineId: string) => {
  console.log('getOneWine>>>', `/catalog/${wineId}`);
  return client.get<Wine>(`/catalog/${wineId}`);
};

export const getAromaCategories = () => {
  return client.get<string[]>('/aroma_mappings');
}
