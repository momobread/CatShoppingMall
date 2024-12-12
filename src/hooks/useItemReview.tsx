import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ItemReviewType, ReviewParmas } from '../types/ItemDetail';
import { createReveiwApi, reviewApi } from '../service/reveiwApi';
import useUserStore from '../store/user';
import { useLocation, useNavigate } from 'react-router-dom';

const useItemReview = (item_num: string, item_id: number): ItemReviewType[] | undefined => {
  const { data } = useQuery<ItemReviewType[], Error>({
    queryKey: ['review', item_num],
    queryFn: () => reviewApi(item_id),
    //리뷰를 적으면 새로 데이터가 반영되야 되서 staletime을 안해놓음, 해놓으면 데이터가 바껴도 신선하닥 ㅗ생각해서 캐시에 있는거 쓰닊니까
  });

  return data;
};

const useCreateReview = (item_num: string, setIsClickButton: (v: boolean) => void) => {
  const { user_uuid } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const queryClient = useQueryClient();
  console.log(location);
  const { mutate: createReveiw } = useMutation<void, Error, ReviewParmas>({
    mutationFn: ({ reviewData, item_id }: ReviewParmas) => createReveiwApi({ reviewData, user_uuid, item_id }),
    onSuccess: () => {
      navigate(`${location}?info=review`);
      queryClient.invalidateQueries({ queryKey: ['review', item_num] });
      setIsClickButton(false);
    },
  });

  return { createReveiw };
};

export { useItemReview, useCreateReview };
