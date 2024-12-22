import { OrderConfirmType, OrderParams } from '../types/order';
import supabase from './supabase';

const orderApi = async ({ cartItemList, user_cart, user_uuid }: OrderParams): Promise<OrderConfirmType[]> => {
  // 로그인됬는지 확인
  if (!user_uuid) throw new Error('주문할 수 없습니다');
  const nowDate = new Date();

  //   주문하기
  const { data: orderConfirmData, error: orderConfirmError } = (await supabase
    .from('order')
    .insert([{ user_uuid: user_uuid, created_at: nowDate, order_details: cartItemList, order_status: 'verifying' }])
    .select()) as { data: OrderConfirmType[]; error: any };

  if (orderConfirmError) throw new Error('주문에 실패하였습니다');

  //장바구니 비우기

  const { error: resetCartError } = await supabase.from('cart').update({ cart_info: [] }).eq('id', user_cart).select();

  if (resetCartError) throw new Error('장바구니 비우기ㄱ에 실패하였습니다');

  return orderConfirmData;
};

export { orderApi };
