import { ItemInfoType } from '../hooks/useItemDetail';
import { ItemReviewType } from '../types/ItemDetail';
import supabase from './supabase';

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

const reviewApi = async (item_id: number): Promise<ItemReviewType[]> => {
  //review의 모든 타입

  let { data, error: reviweError } = (await supabase
    .from('itemReview')
    .select('review_content,review_img,review_rate,item_info_num,users(user_nickname)')
    .eq('item_info_num', item_id)) as {
    data: any;
    error: any;
  };

  if (reviweError) throw new Error(reviweError.message);

  return data;
};

export { itemDetailApi, reviewApi };
