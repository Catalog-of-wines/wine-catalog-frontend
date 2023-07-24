import { OneComment } from '../types/OneComment';
import { client } from '../utils/axiosClient';

export const getComments = (wineId: string) => {
  // console.log('wine/wineId/comments>>', `/wine/${wineId}/comments`);
  return client.get<OneComment[]>(`/wine/${wineId}/comments`);
};

export const createComment = (data: OneComment, accessToken: string) => {
  console.log('data>>', data);
  console.log('accessToken', accessToken);

  return client.post<OneComment>('/comments/', data, accessToken);
};
