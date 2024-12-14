import { UserType } from './user';

interface ItemReviewType {
  id: number;
  item_info: number;
  review_user: string;
  review_title: string;
  review_content: string;
  review_rate: number;
  review_img?: any;
  review_date: Date;
  item_info_num?: number;
  users?: UserType;
}

interface ItemReviewParmas {
  item_num: string;
  item_id: number;
  isClickReviewNav: string;
}

interface ReviewParmas {
  reviewData: ItemReviewType;
  item_id: number;
  user_uuid?: string;
}
interface DeleteReviewParams {
  id: number;
  review_img: string;
}

interface EditReviewParams {
  id: number;
  itemreview: ItemReviewType;
}

export type { ItemReviewType, ItemReviewParmas, ReviewParmas, DeleteReviewParams, EditReviewParams };
