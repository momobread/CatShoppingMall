import styled from 'styled-components';
import ReviewNav from './ReviewNav';
import { ItemReviewType } from '../../types/ItemDetail';
import ReviewForm from './ReviewForm';
import Button from '../../ui/Button';
import useUserStore from '../../store/user';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from 'react';

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
  const { isLogined } = useUserStore();
  const [isClickButton, setIsClickButton] = useState<boolean>(false);
  console.log(isClickButton);
  return (
    <StyledReviewContent>
      <ReviewNav />
      <div id="item_contents_wrap">
        {items.map((item) => (
          <div id="item_contents">
            <p>
              <span>작성자 : {item.users?.user_nickname}</span>
              <span>별점 : {item.review_rate}</span>
            </p>
            <span>{item.review_title}</span>
            <img src={item.review_img} />
            <span>{item.review_content}</span>
          </div>
        ))}

        {isClickButton ? (
          <ReviewForm item_id={item_id} item_num={item_num} setIsClickButton={setIsClickButton} />
        ) : (
          <div onClick={() => setIsClickButton((v) => !v)}>
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
