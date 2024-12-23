import styled from 'styled-components';
import InputLabel from '../../ui/InputLabel';
import Button from '../../ui/Button';
import { SubmitHandler, UseFormRegister, UseFormHandleSubmit, UseFormStateReturn } from 'react-hook-form';
import { ItemReviewType } from '../../types/ItemDetail';
import IconRate from '../../components/IconRate/IconRate';
import React, { useState } from 'react';
import Loader from '../../ui/Loader';

const StyledReviewForm = styled.div`
  width: fit-content;
  height: fit-content;
  border: 1px solid var(--color-grey-400);
  padding: 4rem 0;
  border-radius: 5px;
  margin-top: 2rem;
  #review_form {
    width: 75rem;
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
  register: UseFormRegister<ItemReviewType>;
  handleSubmit: UseFormHandleSubmit<ItemReviewType>;
  setIconCurrentPostion: React.Dispatch<React.SetStateAction<number | null>>;
  isPending: boolean;
  onSubmit: SubmitHandler<ItemReviewType>;
  formState: UseFormStateReturn<ItemReviewType>;
  isClickButton: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
}

const ReviewForm = ({
  register,
  handleSubmit,
  setIconCurrentPostion,
  isPending,
  onSubmit,
  formState,
  isClickButton,
  type,
}: ReviewFormProps) => {
  const [preImg, setPreImg] = useState<Object | null>(null);
  return (
    <StyledReviewForm onSubmit={handleSubmit(onSubmit)}>
      {isPending ? (
        <Loader />
      ) : (
        <form id="review_form">
          <IconRate setIconCurrentPostion={setIconCurrentPostion} />
          <InputLabel title="제목" error={formState.errors.review_title?.message}>
            <input
              id="review_title"
              type="text"
              placeholder="제목을 입력하여 주세요"
              {...register('review_title', { required: '제모ㅓㄱ' })}
            />
          </InputLabel>

          <InputLabel title="내용">
            <textarea
              id="review_content"
              maxLength={600}
              placeholder="글자수는 최대 600자까지 가능합니다"
              {...register('review_content')}
            />
          </InputLabel>
          <InputLabel
            title="사진"
            error={type === 'edit' && preImg === null ? '이미지를 선택하지 않으시면 수정 전 이미지가 적용됩니다' : ''}
          >
            <input type="file" {...register('review_img')} onChange={(e) => setPreImg(e.target.value)} />
          </InputLabel>

          <div>
            <Button type="submit">작성하기</Button>
            <Button type="button" onClick={() => isClickButton(false)}>
              취소하기
            </Button>
          </div>
        </form>
      )}
    </StyledReviewForm>
  );
};
export default ReviewForm;
