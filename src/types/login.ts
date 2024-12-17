import { CartType } from './cart';

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
  user_cart: number;
}

export type { LoginType, UserType };
