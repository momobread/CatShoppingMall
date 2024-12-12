import styled from 'styled-components';
import ReviewRate from './ReviewRate';
import ReviewContent from './ReviewContent';
import Loader from '../../ui/Loader';
import { useItemReview } from '../../hooks/useItemReview';

const StyledItemReview = styled.div`
  display: grid;
  grid-template-rows: 40rem 1fr;
`;

interface ItemReviewProps {
  item_num: string;
  item_id: number;
}

const ItemReview = ({ item_num, item_id }: ItemReviewProps) => {
  const items = useItemReview(item_num, item_id);
  if (!items) return <Loader />;

  return (
    <StyledItemReview>
      <ReviewRate />
      <ReviewContent items={items} item_id={item_id} item_num={item_num} />
    </StyledItemReview>
  );
};
export default ItemReview;
