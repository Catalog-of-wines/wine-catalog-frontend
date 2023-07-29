import axios from 'axios';

export const BASE_URL = 'https://wine-catalog.pp.ua';

const instance = axios.create({
  baseURL: BASE_URL,
});

const addAccessToken = (accessToken: string) => {
  instance.defaults.headers.common['token'] = `${accessToken}`;
};

export const client = {
  async get<T>(url: string) {
    const response = await instance.get<T>(url);

    return response.data;
  },

  async post<T>(url: string, data: any, accessToken?: string) {
    if (accessToken) {
      addAccessToken(accessToken);
    }
    
    const response = await instance.post<T>(url, data);

    return response;
  },
};



