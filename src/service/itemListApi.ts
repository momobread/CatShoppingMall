import supabase from '../service/supabase';
import { ItemType } from '../types/Item';

interface itemListApi {
  category: string | null;
  query_field: string;
  direction: string;
}
const itemListApi = async ({ category, query_field, direction }: itemListApi): Promise<ItemType[]> => {
  let supabaseURL = supabase.from('Items').select('*');
  if (query_field === 'item_date') query_field = 'item_createdDate';

  //category ...1,2 널값 처리도 해줌
  if (!category) {
    throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');
  } else if (category === '1') {
    supabaseURL = supabaseURL.eq('item_best', true);
  } else if (category === '2') {
    supabaseURL = supabaseURL.eq('item_new', true);
  } else if (category === '3') {
    if (query_field === 'item_eat') {
      supabaseURL = supabaseURL.eq('item_category', 1);
    } else if (query_field === 'item_snack') {
      supabaseURL = supabaseURL.eq('item_category', 2);
    } else if (query_field === 'item_toy') {
      supabaseURL = supabaseURL.eq('item_category', 3);
    } else if (query_field === 'item_bath') {
      supabaseURL = supabaseURL.eq('item_category', 4);
    } else if (query_field === 'item_etc') {
      supabaseURL = supabaseURL.eq('item_category', 5);
    }
  }

  // Filter&Sort  .... date,price.... &내림차,오름차 useItemSortList에서 null,undefined처리를 했음
  if (query_field === 'item_createdDate') {
    supabaseURL.order(query_field, { ascending: direction === 'asc' });
  }
  if (query_field === 'item_price') {
    supabaseURL.order(query_field, { ascending: direction === 'asc' });
  }

  let { data, error } = (await supabaseURL) as { data: ItemType[] | null; error: any };
  if (error) throw new Error(error.message);
  if (!data) throw new Error('찾으시는 페이지가 없습니다. 관리자에게 문의하거나 재접속 하여주세요');

  return data;
};

export { itemListApi };
