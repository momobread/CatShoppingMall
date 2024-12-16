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

type CartInfoType = { item_num: string; item_count: number };

interface CartType {
  cart_status: boolean;
  id: number;
  cart_info: CartInfoType[];
}

export type { UserType, CartInfoType };
