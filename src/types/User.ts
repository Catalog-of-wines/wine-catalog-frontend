export interface User {
  id: string
  name: string
}

export interface NewUser {
  name: string;
  email: string;
  password: string;
  phone?: string;
}