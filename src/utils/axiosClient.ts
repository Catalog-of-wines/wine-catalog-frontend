import axios from 'axios';
import { BASE_URL } from './fetchClient';

const instance = axios.create({
  baseURL: BASE_URL,
});

const addAccessToken = (accessToken: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },

  async post<T>(url: string, data: any, accessToken: string) {
    addAccessToken(accessToken);
    const response = await instance.post<T>(url, data);

    return response.data;
  },
};



