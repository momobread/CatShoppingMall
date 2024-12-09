import { useMutation, useQuery } from '@tanstack/react-query';
import { reviewApi } from '../service/ItemDetailApi';
import { ItemReviewType } from '../types/ItemDetail';

const useItemReview = (item_num: string, item_id: number): ItemReviewType[] | undefined => {
  const { data } = useQuery<ItemReviewType[], Error>({
    queryKey: ['review', item_num],
    queryFn: () => reviewApi(item_id),
  });

  return data;
};
export default useItemReview;
