export interface User {
  id: string
  name: string
}
export interface AuthUser {
  user_id: string
  access_token: string
  token_type: string
}

export interface NewUser {
  name: string;
  email: string;
  password: string;
  phone?: string;
}