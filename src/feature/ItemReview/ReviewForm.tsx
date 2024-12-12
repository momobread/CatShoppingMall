import styled from 'styled-components';
import useUserStore from '../../store/user';
import InputLabel from '../../ui/InputLabel';
import Button from '../../ui/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ItemReviewType } from '../../types/ItemDetail';
import IconRate from '../../components/IconRate/IconRate';
import { useState } from 'react';
import ModalStore from '../../store/modal';
import activemodal from '../../utils/activemodal';
import { useCreateReview } from '../../hooks/useItemReview';

const StyledReviewForm = styled.div`
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--color-grey-400);
  padding: 4rem 0;
  border-radius: 5px;
  #review_form {
    width: 80rem;
    height: 60rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    div {
      width: 90%;
      div,
      #input_wrap {
        width: 100%;
      }
    }
    input {
      width: 60rem;
    }
  }

  #review_content {
    width: 60rem;
    height: 40rem;
    resize: none;
  }
`;

interface ReviewFormProps {
  item_id: number;
  item_num: string;
  setIsClickButton: (v: boolean) => void;
}

const ReviewForm = ({ item_id, item_num, setIsClickButton }: ReviewFormProps) => {
  //냘짜하고 닉네임은 수정할 수 없게 뒤에서 처리
  const { register, handleSubmit } = useForm<ItemReviewType>();
  const { isModal } = ModalStore();
  const [iconCurrenPostion, setIconCurrentPostion] = useState<number | null>(null);
  const { createReveiw } = useCreateReview(item_num, setIsClickButton);
  const onSubmit: SubmitHandler<ItemReviewType> = async (itemreview) => {
    if (!iconCurrenPostion) throw new Error('별점을 선택하여 주세요'); //모달 추가 필요.
    const reviewData: ItemReviewType = {
      ...itemreview,
      review_rate: iconCurrenPostion + 1,
      // review_img: itemreview.review_img?.[0],
    };
    createReveiw({ reviewData, item_id });
  };

  return (
    <StyledReviewForm onSubmit={handleSubmit(onSubmit)}>
      <form id="review_form">
        <IconRate setIconCurrentPostion={setIconCurrentPostion} />
        <InputLabel title="제목">
          <input id="review_title" type="text" placeholder="제목을 입력하여 주세요" {...register('review_title')} />
        </InputLabel>

        <InputLabel title="내용">
          <textarea
            id="review_content"
            maxLength={600}
            placeholder="글자수는 최대 600자까지 가능합니다"
            {...register('review_content')}
          />
        </InputLabel>
        <InputLabel title="사진">
          <input type="file" {...register('review_img')} />
        </InputLabel>
        <div>
          <Button type="submit">작성하기</Button>
          <Button type="button">취소하기</Button>
        </div>
      </form>
    </StyledReviewForm>
  );
};
export default ReviewForm;
