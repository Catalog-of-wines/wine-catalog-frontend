import { AuthUser, NewUser } from "../types/User";
import { client } from "../utils/fetchClient";

export const loginUser = (data: NewUser) => {
  return client.post<AuthUser>('/login', data);
};
