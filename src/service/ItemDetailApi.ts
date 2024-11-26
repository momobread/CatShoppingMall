import { type ItemCode } from '../pages/ItemDetail';
import { type ItemType } from '../types/Item';
import supabase from './supabase';

const fetchItemDetail = async (item: ItemCode): Promise<ItemType[]> => {
  const { item_category, item_num } = item;
  let tableName = '';

  if (item_category === 1) tableName = 'bestItems';
  else if (item_category === 2) tableName = 'newItems';

  try {
    let { data: bestItems } = (await supabase.from(tableName).select('*').eq('item_num', item_num)) as {
      data: ItemType[] | null;
    };
    if (bestItems === null) throw new Error('아이템값이 없습니다.');
    return bestItems;
  } catch (e: any) {
    console.log(e);
    return e;
  }
};

export { fetchItemDetail };
