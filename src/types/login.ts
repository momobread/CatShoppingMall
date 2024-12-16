import { CartType } from './user';

interface LoginType {
  id: string;
  password: string;
}
interface UserType {
  user_id?: string;
  user_pw: string;
  user_name: string;
  user_birth: Date;
  user_phone: string;
  user_email: string;
  user_nickname: string;
  cart: CartType;
}

export type { LoginType, UserType };
