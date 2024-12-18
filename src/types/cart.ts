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

interface CartAddParams {
  user_cart: number;
  item_count: number;
  item_num: string;
}

interface CartDeleteParams {
  item_num: string;
  user_cart: number;
}
interface CartsDeleteParams {
  item_nums: string[];
  user_cart: number;
}
export type { CartInfoType, CartListType, CartType, CartAddParams, CartDeleteParams, CartsDeleteParams };
