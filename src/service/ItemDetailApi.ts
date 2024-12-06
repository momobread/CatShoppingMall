import { ItemInfoType } from '../hooks/useItemDetail';
import supabase from './supabase';

const ItemDetailApi = async (item_num): Promise<ItemInfoType> => {
  // console.log(item_num);
  let { data: Items, error } = (await supabase
    .from('Items')
    .select('item_info,ItemInfo(item_info)')
    .eq('item_num', item_num)) as { data: any; error: any };
  if (error) throw new Error('');
  if (!Items) throw new Error('찿으시는 아이템 infO 들이 없습니다');
  // console.log(Items);
  let data = Items.at(0)?.ItemInfo ?? null;
  return data;
};
export default ItemDetailApi;
