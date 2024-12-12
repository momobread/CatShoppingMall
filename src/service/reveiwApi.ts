import { ItemInfoType } from '../hooks/useItemDetail';
import { ItemReviewType, ReviewParmas } from '../types/ItemDetail';
import supabase from './supabase';

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

const createReveiwApi = async ({ reviewData, user_uuid, item_id }: ReviewParmas) => {
  //db저장
  const DB_URL = import.meta.env.VITE_SUPABASE_URL;
  const baseImg = reviewData.review_img?.[0];
  console.log(baseImg);
  const imgForStorage = `${DB_URL}/storage/v1/object/public/itemDetail/review/${baseImg.name}`;
  const newReviewData = { ...reviewData, review_user: user_uuid, item_info_num: item_id, review_img: imgForStorage };
  const { error: createError } = await supabase.from('itemReview').insert([newReviewData]).select();
  if (createError) throw new Error(createError.message);

  //스토리지 이미지 저장
  const bucket = 'itemDetail/review';
  const { error: storageError } = await supabase.storage.from(bucket).upload(baseImg.name, baseImg);
  if (storageError) throw new Error(storageError.message);
};

export { reviewApi, createReveiwApi };
