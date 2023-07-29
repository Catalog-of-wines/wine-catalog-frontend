import { client } from '../utils/axiosClient';
import { OneComment } from '../types/OneComment';

export const getComments = (wineId: string) => {
  return client.get<OneComment[]>(`/wine/${wineId}/comments`);
};

export const createComment = (data: OneComment, access_token?: string) => {
  return client.post<OneComment>('/comments/', data, access_token);
};
