import { NewUser } from "../types/User";
import { client } from "../utils/fetchClient";

type ResponseUser = {
  access_token: string;
  message: string;
  token_type: string;
  user_id: string;
};

export const signUp = (data: NewUser) => {
  return client.post<ResponseUser>('/register/', data);
};
