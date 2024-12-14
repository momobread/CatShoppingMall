import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  DeleteReviewParams,
  EditReviewParams,
  ItemReviewParmas,
  ItemReviewType,
  ReviewParmas,
} from '../types/ItemDetail';
import { createReveiwApi, deleteReviewApi, editReviewApi, reviewApi } from '../service/reveiwApi';
import useUserStore from '../store/user';
import { useLocation, useNavigate } from 'react-router-dom';

const useItemReview = ({
  isClickReviewNav: navCategory,
  item_id,
  item_num,
}: ItemReviewParmas): ItemReviewType[] | undefined => {
  const { data } = useQuery<ItemReviewType[], Error>({
    queryKey: ['review', item_num, navCategory],
    queryFn: () => reviewApi(item_id, navCategory),
    //리뷰를 적으면 새로 데이터가 반영되야 되서 staletime을 안해놓음, 해놓으면 데이터가 바껴도 신선하닥 ㅗ생각해서 캐시에 있는거 쓰닊니까
  });

  return data;
};

const useCreateReview = (item_num: string, setIsClickWriteButton: (v: boolean) => void) => {
  const { user_uuid } = useUserStore();
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const queryClient = useQueryClient();
  const { mutate: createReveiw, isPending } = useMutation<void, Error, ReviewParmas>({
    mutationFn: ({ reviewData, item_id }: ReviewParmas) => createReveiwApi({ reviewData, user_uuid, item_id }),
    onSuccess: () => {
      navigate(`${location}?info=review`);
      queryClient.invalidateQueries({ queryKey: ['review', item_num] });
      setIsClickWriteButton(false);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { createReveiw, isPending };
};

const useDeleteReview = (item_num: string) => {
  const queryClient = useQueryClient();
  const { mutate: deleleReview } = useMutation<void, Error, DeleteReviewParams>({
    mutationFn: ({ id, review_img }: DeleteReviewParams) => deleteReviewApi({ id, review_img }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['review', item_num] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return deleleReview;
};

const useEditReview = (item_num: string, setIsClickEditButton: (v: boolean) => void) => {
  const queryClient = useQueryClient();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const { mutate: editReview } = useMutation({
    mutationFn: ({ id, itemreview }: EditReviewParams) => editReviewApi({ id, itemreview }),
    onSuccess: () => {
      navigate(`${location}?info=review`);
      queryClient.invalidateQueries({ queryKey: ['review', item_num] });
      setIsClickEditButton(false);
    },
  });
  return editReview;
};

export { useItemReview, useCreateReview, useDeleteReview, useEditReview };
