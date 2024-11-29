import supabase from '../service/supabase';
import { ItemType } from '../types/Item';

interface itemListApi {
  category: string | null;
  query_field: string;
  direction: string;
}
const itemListApi = async ({ category, query_field, direction }: itemListApi): Promise<ItemType[]> => {
  let supabaseURL = supabase.from('bestItems').select('*');
  if (query_field === 'item_date') query_field = 'item_createdDate';

  //category ...1,2
  if (!category) throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');
  if (category === '1') {
    supabaseURL = supabaseURL.eq('item_best', true);
  }

  // Filter&Sort  .... date,price.... &내림차,오름차
  if (query_field === 'item_createdDate') {
    console.log(direction, 'gpgpd');
    supabaseURL.order(query_field, { ascending: direction === 'asc' });
  }

  let { data, error } = (await supabaseURL) as { data: ItemType[] | null; error: any };
  if (error) throw new Error(error.message);
  if (!data) throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');
  return data;
};

export { itemListApi };
