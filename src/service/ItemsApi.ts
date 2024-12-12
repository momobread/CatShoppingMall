import { ItemInfoType } from '../hooks/useItemDetail';
import { ItemType } from '../types/Item';
import supabase from './supabase';

const fetchBestItems = async (): Promise<ItemType[]> => {
  let { data: bestItems, error } = (await supabase.from('Items').select('*').eq('item_best', true)) as {
    data: ItemType[] | null;
    error: any;
  };
  if (bestItems === null) return error;

  return bestItems;
};

const fetchNewItems = async (): Promise<ItemType[]> => {
  let { data: newItems, error } = (await supabase.from('Items').select('*').eq('item_new', true)) as {
    data: ItemType[] | null;
    error: any;
  };
  if (newItems === null) throw new Error(error);

  return newItems;
};

const itemDetailApi = async (item_num: string): Promise<ItemInfoType> => {
  console.log(item_num);
  let { data: Items, error } = (await supabase
    .from('Items')
    .select('item_info,ItemInfo(item_info,id)')
    .eq('item_num', item_num)) as { data: any; error: any };
  if (error) throw new Error('');
  if (!Items) throw new Error('찿으시는 아이템 infO 들이 없습니다');

  console.log(Items);

  let data = Items.at(0).ItemInfo ?? null;
  return data;
};

export { fetchBestItems, fetchNewItems, itemDetailApi };
