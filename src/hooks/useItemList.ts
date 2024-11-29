import supabase from '../service/supabase';
import { ItemType } from '../types/Item';

interface useItemList {
  category: string | null;
}
const useItemList = async ({ category }: useItemList): Promise<ItemType[]> => {
  let supabaseURL = supabase.from('bestItems').select('*');

  if (!category) throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');
  if (category === '1') {
    supabaseURL = supabaseURL.eq('item_best', true);
  }

  let { data, error } = (await supabaseURL) as { data: ItemType[] | null; error: any };
  if (error) throw new Error(error.message);
  if (!data) throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');
  return data;
};

export { useItemList };
