import { CartType } from './cart';

interface LoginType {
  id: string;
  password: string;
}
interface UserType {
  id: number;
  user_id?: string;
  user_pw: string;
  user_name: string;
  user_birth: Date;
  user_phone: string;
  user_email: string;
  user_nickname: string;
  cart: CartType;
  user_uuid: string;
  user_cart: number;
  user_dailyCheck: boolean[];
  user_isChecked_daily: boolean;
  user_checkedDaily_at: Date;
  user_getRandom_at: Date;
  user_point: number;
  user_monthCoupon: boolean;
}

export type { LoginType, UserType };
