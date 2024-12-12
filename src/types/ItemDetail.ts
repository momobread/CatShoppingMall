import { UserType } from './user';

interface ItemReviewType {
  id: number;
  item_info: number;
  review_user: string;
  review_title: string;
  review_content: string;
  review_rate: number;
  review_img?: any;
  item_info_num?: number;
  users?: UserType;
}
interface ReviewParmas {
  reviewData: ItemReviewType;
  item_id: number;
  user_uuid?: string;
}

export type { ItemReviewType, ReviewParmas };
