import styled from 'styled-components';
import ReviewNav from './ReviewNav';
import { ItemReviewType } from '../../types/ItemDetail';
import ReviewForm from './ReviewForm';
import Button from '../../ui/Button';
import useUserStore from '../../store/user';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCreateReview, useDeleteReview, useEditReview } from '../../hooks/useItemReview';
import EditIcon from '@mui/icons-material/Edit';
import { useForm, SubmitHandler } from 'react-hook-form';

const StyledReviewContent = styled.div`
  /* background-color: beige; */
  #item_contents_wrap {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
  #item_contents {
    border: 1px solid var(--color-grey-400);
    display: flex;
    flex-direction: column;
    width: 95%;
    gap: 0.3rem;
    padding: 1rem 2rem;
    p {
      span {
        margin-right: 1rem;
      }
    }
  }
  img {
    width: 15rem;
  }
`;
interface ReviewContentProps {
  items: ItemReviewType[];
  item_id: number;
  item_num: string;
}
const ReviewContent = ({ items, item_id, item_num }: ReviewContentProps) => {
  const { isLogined, user_uuid } = useUserStore();

  const [isClickWriteButton, setIsClickWriteButton] = useState<boolean>(false);
  const [isClickEditButton, setIsClickEditButton] = useState<boolean>(false);
  const [iconCurrenPostion, setIconCurrentPostion] = useState<number | null>(null);
  const [clickindex, setClickIndex] = useState<number>(99);

  const { register, handleSubmit, reset, formState } = useForm<ItemReviewType>();
  const deleteReview = useDeleteReview(item_num);
  const editReview = useEditReview();
  const { createReveiw, isPending } = useCreateReview(item_num, setIsClickWriteButton);

  const handleDelete = (id: number, review_img: string) => {
    deleteReview({ id, review_img });
  };

  const handleEdit = (itemreview: ItemReviewType, i: number) => {
    setClickIndex(i);
    setIsClickEditButton(true);
    reset({ ...itemreview });
  };

  const onSubmitCreate: SubmitHandler<ItemReviewType> = async (itemreview) => {
    if (!iconCurrenPostion) throw new Error('별점을 선택하여 주세요'); //모달 추가 필요.
    const reviewData: ItemReviewType = {
      ...itemreview,
      review_rate: iconCurrenPostion + 1,
      // review_img: itemreview.review_img?.[0],
    };
    createReveiw({ reviewData, item_id });
  };

  const onSubmitEdit: SubmitHandler<ItemReviewType> = async (itemreview) => {
    console.log('편집서브밋');
    editReview({ id: itemreview.id, itemreview });
  };

  return (
    <StyledReviewContent>
      <ReviewNav />
      <div id="item_contents_wrap">
        {items.map((item, i) => (
          <div id="item_contents">
            <p>
              <span>작성자 : {item.users?.user_nickname}</span>
              <span>별점 : {item.review_rate}</span>
            </p>
            <span>제목 : {item.review_title}</span>
            <span>내용 : {item.review_content}</span>
            <img src={item.review_img} />
            {item.review_user === user_uuid ? (
              <div>
                <Button onClick={() => handleDelete(item.id, item.review_img)}>
                  <DeleteIcon sx={{ fontSize: '3rem' }} />
                </Button>
                <Button onClick={() => handleEdit(item, i)}>
                  <EditIcon sx={{ fontSize: '3rem' }} />
                </Button>
              </div>
            ) : (
              ''
            )}
            {clickindex === i && isClickEditButton ? (
              //수정하기 폼
              <ReviewForm
                register={register}
                handleSubmit={handleSubmit}
                setIconCurrentPostion={setIconCurrentPostion}
                isPending={isPending}
                onSubmit={onSubmitEdit}
                formState={formState}
                isClickButton={setIsClickEditButton}
              />
            ) : (
              ''
            )}
          </div>
        ))}

        {isClickWriteButton ? (
          //작성하기 폼
          <ReviewForm
            register={register}
            handleSubmit={handleSubmit}
            setIconCurrentPostion={setIconCurrentPostion}
            isPending={isPending}
            onSubmit={onSubmitCreate}
            formState={formState}
            isClickButton={setIsClickWriteButton}
          />
        ) : (
          <div onClick={() => setIsClickWriteButton((v) => !v)}>
            <span>작성하기</span>
            <Button disabled={!isLogined}>
              <CreateIcon sx={{ fontSize: '3rem' }} />
            </Button>
          </div>
        )}
      </div>
    </StyledReviewContent>
  );
};
export default ReviewContent;
