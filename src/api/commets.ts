import { OneComment } from '../types/OneComment';
import { client } from '../utils/fetchClient';

export const getComments = (wineId: string) => {
  // console.log('wine/wineId/comments>>', `/wine/${wineId}/comments`);
  return client.get<OneComment[]>(`/wine/${wineId}/comments`);
};

export const createComment = (data: Omit<OneComment, 'id'>) => {
  console.log('data>>', data);

  return client.post<OneComment>('/comments/', data);
};
