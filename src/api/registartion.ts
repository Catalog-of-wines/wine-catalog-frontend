import { client } from "../utils/axiosClient";
import { AuthUser, NewUser } from "../types/User";

export const signUp = (data: NewUser) => {
  return client.post<AuthUser>('/register/', data);
};
