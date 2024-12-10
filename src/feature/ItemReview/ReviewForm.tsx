import styled from 'styled-components';
import useUserStore from '../../store/user';
import InputLabel from '../../ui/InputLabel';
import Button from '../../ui/Button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ItemReviewType } from '../../types/ItemDetail';
import StarRate from '../../components/IconRate/StarRate';
import IconRate from '../../components/IconRate/IconRate';

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

const ReviewForm = () => {
  const { register, handleSubmit } = useForm<ItemReviewType>();
  //냘짜하고 닉네임은 수정할 수 없게 뒤에서 처리
  return (
    <StyledReviewForm>
      <form id="review_form">
        <IconRate />
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
