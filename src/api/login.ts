import { client } from "../utils/axiosClient";
import { AuthUser, NewUser } from "../types/User";

export const loginUser = (data: NewUser) => {
  return client.post<AuthUser>('/login', data);
};
