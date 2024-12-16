import { ItemType } from '../types/Item';
import { CartInfoType, CartListType } from '../types/user';
import supabase from './supabase';

const fetchCartApi = async (cartData: CartInfoType[]): Promise<CartListType[]> => {
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

export { fetchCartApi };
