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
interface CartListType {
  item_num: string;
  item_price: number;
  item_title: string;
  item_img: string;
  item_count: number;
}

// interface ItemType {
//   id: number;
//   item_title: string;
//   item_content: string;
//   item_price: number;
//   item_img: string;
//   item_num: string;
//   item_createdDate: Date;
//   item_category: number;
//   item_best: boolean;
// }

export type { UserType, CartInfoType, CartListType };
