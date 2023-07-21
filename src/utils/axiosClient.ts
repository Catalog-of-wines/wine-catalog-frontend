// // import axios from 'axios';
import { BASE_URL } from './fetchClient';
console.log(BASE_URL);


// const instance = axios.create({
//   baseURL: BASE_URL,
// });

// const addAccessToken = (accessToken: string) => {
//   instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
// };

// export const client = {
//   async post<T>(url: string, data: any, accessToken:string) {
//     addAccessToken(accessToken);
//     const response = await instance.post<T>(url, data);

//     return response.data;
//   },
// };
