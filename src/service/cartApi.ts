import { ItemType } from '../types/Item';
import { CartInfoType } from '../types/user';
import supabase from './supabase';

const fetchCartApi = async (cartData: CartInfoType[]): Promise<ItemType[]> => {
  const cartItemList = await Promise.all(
    cartData.map(async (cart) => {
      let { data: Items, error } = await supabase.from('Items').select('*').eq('item_num', cart.item_num);
      if (error) throw new Error(error.message);

      return Items?.at(0);
    })
  );
  console.log(cartItemList);
  return cartItemList;
};

export { fetchCartApi };
