import styled from 'styled-components';
import ReviewNav from './ReviewNav';
import { ItemReviewType } from '../../types/ItemDetail';

const StyledReviewContent = styled.div`
  /* background-color: beige; */
  #item_contents {
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    align-items: center;
  }
  img {
    width: 15rem;
  }
  div {
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
`;
interface ReviewContentProps {
  items: ItemReviewType[];
}
const ReviewContent = ({ items }: ReviewContentProps) => {
  console.log(items);
  return (
    <StyledReviewContent>
      <ReviewNav />
      <div id="item_contents">
        {items.map((item) => (
          <div>
            <p>
              <span>작성자 : {item.review_user}</span>
              <span>별점 : {item.review_rate}</span>
            </p>
            <span>{item.review_title}</span>
            <img src={item.review_img} />
            <span>{item.review_content}</span>
          </div>
        ))}
      </div>
    </StyledReviewContent>
  );
};
export default ReviewContent;
