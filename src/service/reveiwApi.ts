import { DeleteReviewParams, EditReviewParams, ItemReviewType, ReviewParmas } from '../types/ItemDetail';
import supabase from './supabase';

// 리뷰 패치
const reviewApi = async (item_id: number, navCategory: string): Promise<ItemReviewType[]> => {
  let supabaseUrl = supabase
    .from('itemReview')
    .select(
      'review_content,review_img,id,review_date,review_title,review_rate,review_user,item_info_num,users(user_nickname)'
    )
    .eq('item_info_num', item_id);

  if (navCategory === 'date_desc') supabaseUrl = supabaseUrl.order('review_date', { ascending: false });
  if (navCategory === 'rate_desc') supabaseUrl = supabaseUrl.order('review_rate', { ascending: false });
  // if (reviweError)
  // let { data, error: reviweError } = (await
  //   .order('review_rate', { ascending: false })) as {
  //   data: any;
  //   error: any;
  // };
  const { data, error: reviweError } = (await supabaseUrl) as {
    data: any;
    error: any;
  };
  if (reviweError) throw new Error(reviweError.message);

  return data;
};

// 리뷰 생성
const createReveiwApi = async ({ reviewData, user_uuid, item_id }: ReviewParmas) => {
  const DB_URL = import.meta.env.VITE_SUPABASE_URL;
  let randomNum;
  let baseImg;
  let imgForStorage;

  if (reviewData.review_img.length > 0) {
    randomNum = Math.random().toString().split('.').at(1);
    baseImg = reviewData.review_img?.[0];
    imgForStorage = `${DB_URL}/storage/v1/object/public/itemDetail/review/${randomNum}-${baseImg.name}`;
  }
  if (reviewData.review_img.length === 0) {
    console.log('요기');
    imgForStorage = '';
  }
  const newReviewData = {
    ...reviewData,
    review_user: user_uuid,
    item_info_num: item_id,
    review_img: imgForStorage,
  };
  // db부터 추가
  const { error: createError } = await supabase.from('itemReview').insert([newReviewData]).select();
  if (createError) throw new Error(createError.message);

  //이미지가 있는 경우에만
  if (imgForStorage) {
    //스토리지 이미지 저장
    const bucket = 'itemDetail';
    const { error: storageError } = await supabase.storage
      .from(bucket)
      .upload(`/review/${randomNum}-${baseImg.name}`, baseImg);
    if (storageError) throw new Error(storageError.message);
  }
};

// 리뷰 삭제
const deleteReviewApi = async ({ id, review_img }: DeleteReviewParams) => {
  let img = review_img.split('itemDetail').at(1);
  img = img?.replace(/\//, '');
  const { error: deleteError } = await supabase.from('itemReview').delete().eq('id', id);
  if (deleteError) throw new Error(deleteError.message);

  const bucket = 'itemDetail';
  const { error } = await supabase.storage.from(bucket).remove([`${img}`]);
  if (error) throw new Error(error.message);
};

// 리뷰 수정
const editReviewApi = async ({ id, itemreview }: EditReviewParams) => {
  const { item_info_num, review_content, review_rate, review_title, review_date, review_user, review_img } = itemreview;
  const DB_URL = import.meta.env.VITE_SUPABASE_URL;
  const randomNum = Math.random().toString().split('.').at(1);
  const baseImg = review_img?.[0];
  const imgForStorage = `${DB_URL}/storage/v1/object/public/itemDetail/review/${randomNum}-${baseImg.name}`;

  const EditImg = typeof itemreview.review_img === 'string' ? itemreview.review_img : imgForStorage;

  //db부터 수정
  const { error } = await supabase
    .from('itemReview')
    .update({ item_info_num, review_content, review_title, review_rate, review_date, review_user, review_img: EditImg })
    .eq('id', id)
    .select();
  if (error) throw new Error(error.message);

  //스토리지 이미지 수정
  const bucket = 'itemDetail';
  const { error: storageError } = await supabase.storage
    .from(bucket)
    .upload(`/review/${randomNum}-${baseImg.name}`, baseImg);
  if (storageError) throw new Error(storageError.message);
};

export { reviewApi, createReveiwApi, deleteReviewApi, editReviewApi };
