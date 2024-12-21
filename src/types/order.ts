import { CartListType } from './cart';

interface OrderConfirmType {
  id: number;
  user_uuid: string;
  created_at: Date;
  order_details: string;
  order_status: string;
}

interface OrderParams {
  cartItemList: CartListType[];
  user_cart: number;
  user_uuid?: string | null;
}

export type { OrderConfirmType, OrderParams };
