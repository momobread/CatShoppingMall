import { CartAddParams, CartInfoType, CartListType, CartType } from '../types/cart';
import supabase from './supabase';

const fetchCartApi = async (cartData: CartInfoType[]): Promise<CartListType[]> => {
  console.log('일단 들어옴');
  console.log(cartData);

  const cartItemList = await Promise.all(
    cartData.map(async (cart) => {
      const { item_count, item_num } = cart;
      let { data: Items, error } = await supabase.from('Items').select('*').eq('item_num', cart.item_num);
      if (error) throw new Error(error.message);
      const { item_title, item_price, item_img } = Items?.at(0);
      return { item_title, item_price, item_img, item_num, item_count };
    })
  );
  console.log(cartItemList);
  return cartItemList;
};

const addCartApi = async (data: CartAddParams) => {
  const { item_count, item_num, user_cart } = data;
  let { data: cart, error: cartError } = (await supabase.from('cart').select('*').eq('id', user_cart)) as {
    data: CartType[];
    error: any;
  };
  if (cartError) throw new Error('유저의 카트가 없습니다.관리자에게 문의하세요');

  let cart_info: CartInfoType[] | null = cart[0].cart_info; //유저의 카트\

  if (!cart_info) {
    //카트가 있는데 비어있는 경우(아무 아이템도 담지 않았다)
    cart_info = [{ item_num, item_count }];
  }
  if (cart_info) {
    //아이템 존재유무 확인
    const isExistItemIndex: number = cart_info?.findIndex((item) => item.item_num === item_num);

    if (isExistItemIndex >= 0) {
      //똑같은 아이템이 있다면
      const newItemCount: number = cart_info?.[isExistItemIndex].item_count + item_count;
      cart_info[isExistItemIndex].item_count = newItemCount;
    }
    if (isExistItemIndex === -1) {
      // 새로운 아이템을 추가한다면
      cart_info.push({ item_num, item_count });
    }
  }
  //카트정보 반영
  const { error: updateError } = await supabase.from('cart').update({ cart_info: cart_info }).eq('id', user_cart);

  if (updateError) throw new Error('업데이트에 실패하였습니다');
};

export { fetchCartApi, addCartApi };
