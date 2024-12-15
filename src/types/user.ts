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

interface CartType {
  cart_status: boolean;
  id: number;
  item_num: string;
}

export type { UserType };
