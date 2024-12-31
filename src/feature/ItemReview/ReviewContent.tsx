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
import Activemodal from '../../utils/ActiveModal';

const StyledReviewContent = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr;
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
    width: 60%;
    padding: 3rem 4rem;
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
  }
  #review_content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    p {
      color: var(--color-accent_blue4);
      span {
        margin-right: 1rem;
        height: fit-content;
      }
    }
  }
  #review_title {
    color: var(--color-grey-500);
    font-weight: 500;
  }
  #review {
    word-wrap: break-word;
    max-width: 100%;
  }

  img {
    width: 15rem;
  }
  #write_btn {
    width: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }
  #delete_edit_btn {
    position: absolute;
    right: 22%;
    display: flex;
    gap: 1rem;
  }
  #review_date {
    color: var(--color-grey-600);
  }

  @media screen and (max-width: 600px) {
    width: 100vw;
    grid-template-rows: 5rem 1fr;

    #item_contents_wrap {
      width: 100vw;
      padding: 0;
      gap: 0;
    }
    #item_contents {
      padding: 2rem;
      border-radius: 0;
      border: none;
      border-bottom: 1px solid var(--color-grey-400);
      width: 100%;
    }
  }
`;
interface ReviewContentProps {
  items: ItemReviewType[];
  item_id: number;
  item_num: string;
  isClickReviewNav: string;
  setIsClickReviewNav: React.Dispatch<React.SetStateAction<string>>;
}
const ReviewContent = ({ items, item_id, item_num, isClickReviewNav, setIsClickReviewNav }: ReviewContentProps) => {
  const { isLogined, user_uuid } = useUserStore();

  const [isClickWriteButton, setIsClickWriteButton] = useState<boolean>(false);
  const [isClickEditButton, setIsClickEditButton] = useState<boolean>(false);
  const [iconCurrenPostion, setIconCurrentPostion] = useState<number | null>(null);
  const [clickindex, setClickIndex] = useState<number>(99);

  const { register, handleSubmit, reset, formState } = useForm<ItemReviewType>();
  const { createReveiw, isPending } = useCreateReview(item_num, setIsClickWriteButton);
  const deleteReview = useDeleteReview(item_num);
  const editReview = useEditReview(item_num, setIsClickEditButton);

  const handleDelete = (id: number, review_img: string) => {
    deleteReview({ id, review_img });
  };

  const handleEdit = (itemreview: ItemReviewType, i: number) => {
    setClickIndex(i);
    setIsClickEditButton(true);
    reset({ ...itemreview });
  };
  const onSubmitCreate: SubmitHandler<ItemReviewType> = async (itemreview) => {
    if (iconCurrenPostion === null) throw new Error('별점을 선택하여 주세요'); //모달 추가 필요.
    const currentDate = new Date();

    const normalizedfileName = itemreview.review_img?.[0]?.name.normalize('NFC');
    const imgCheck = /[ㄱ-ㅎ가-힣]/.test(normalizedfileName);

    if (imgCheck) {
      Activemodal('이미지파일 이름에 한글이 포함되면 안됩니다');
      return 0;
    }

    const reviewData: ItemReviewType = {
      ...itemreview,
      review_rate: iconCurrenPostion + 1,
      review_date: currentDate,
    };
    createReveiw({ reviewData, item_id });
  };

  const onSubmitEdit: SubmitHandler<ItemReviewType> = async (itemreview) => {
    if (iconCurrenPostion === null) throw new Error('별점을 선택하여 주세요');
    const currentDate = new Date();
    const edittedItemReview = { ...itemreview, review_rate: iconCurrenPostion + 1, review_date: currentDate };
    editReview({ id: itemreview.id, itemreview: edittedItemReview });
  };

  return (
    <StyledReviewContent>
      <ReviewNav setIsClickReviewNav={setIsClickReviewNav} isClickReviewNav={isClickReviewNav} />

      <div id="item_contents_wrap">
        {items.map((item, i) => (
          <div id="item_contents">
            <div id="review_content">
              <p>
                <span> {item.users?.user_nickname}</span>
                <span>
                  {Array.from({ length: item.review_rate }, () => {
                    return '⭐️';
                  })}
                </span>
                <span id="review_date">{item.review_date.toLocaleString()}</span>
              </p>
              <span id="review_title">{item.review_title}</span>
              <span id="review">{item.review_content}</span>
              <img src={item.review_img} />
            </div>
            {item.review_user === user_uuid && !isClickEditButton ? (
              <div id="delete_edit_btn">
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
                type="edit"
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
            type="write"
            register={register}
            handleSubmit={handleSubmit}
            setIconCurrentPostion={setIconCurrentPostion}
            isPending={isPending}
            onSubmit={onSubmitCreate}
            formState={formState}
            isClickButton={setIsClickWriteButton}
          />
        ) : user_uuid ? (
          <div onClick={() => setIsClickWriteButton((v) => !v)} id="write_btn">
            <span>작성하기</span>
            <Button disabled={!isLogined} size="medium">
              <CreateIcon sx={{ fontSize: '3rem' }} />
            </Button>
          </div>
        ) : (
          '로그인이 필요합니다'
        )}
      </div>
    </StyledReviewContent>
  );
};
export default ReviewContent;
