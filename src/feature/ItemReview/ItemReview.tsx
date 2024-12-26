import styled from 'styled-components';
import ReviewContent from './ReviewContent';
import Loader from '../../ui/Loader';
import { useItemReview } from '../../hooks/useItemReview';
import { useState } from 'react';

const StyledItemReview = styled.div`
  display: grid;
  /* grid-template-rows: 40rem 1fr; */
  grid-template-rows: 1fr;
`;

interface ItemReviewProps {
  item_num: string;
  item_id: number;
}

const ItemReview = ({ item_num, item_id }: ItemReviewProps) => {
  const [isClickReviewNav, setIsClickReviewNav] = useState<string>('date_desc');
  const items = useItemReview({ item_num, item_id, isClickReviewNav });

  if (!items) return <Loader />;

  return (
    <StyledItemReview>
      {/* <ReviewRate /> */}
      <ReviewContent
        items={items}
        item_id={item_id}
        item_num={item_num}
        setIsClickReviewNav={setIsClickReviewNav}
        isClickReviewNav={isClickReviewNav}
      />
    </StyledItemReview>
  );
};
export default ItemReview;
