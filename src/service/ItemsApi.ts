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

const itemDetailInfoApi = async (item_num: string): Promise<ItemInfoType> => {
  let { data: Items, error } = (await supabase
    .from('Items')
    .select('item_info,ItemInfo(item_info,id)')
    .eq('item_num', item_num)) as { data: any; error: any };
  if (error) throw new Error('');
  if (!Items) throw new Error('찿으시는 아이템 infO 들이 없습니다');

  let data = Items.at(0).ItemInfo ?? null;
  return data;
};

const itemDetailApi = async (item_num: string): Promise<ItemType> => {
  let { data: Items, error } = await supabase.from('Items').select('*').eq('item_num', item_num);

  if (error) throw new Error(error.message);
  if (Items?.length === 0) throw new Error('해당하는 번호의 아이템 디테일이 없습니다');
  return Items?.at(0);
};

export { fetchBestItems, fetchNewItems, itemDetailInfoApi, itemDetailApi };
