import styled from 'styled-components';
import useItemReview from '../../hooks/useItemReview';
import ReviewRate from './ReviewRate';
import ReviewContent from './ReviewContent';
import Loader from '../../ui/Loader';

const StyledItemReview = styled.div`
  display: grid;
  grid-template-rows: 40rem 1fr;
`;

const ItemReview = ({ item_num, item_id }) => {
  const items = useItemReview(item_num, item_id);

  console.log(items);
  const item = [1, 1, 1];
  if (!items) return <Loader />;

  return (
    <StyledItemReview>
      <ReviewRate />
      <ReviewContent items={items} />
    </StyledItemReview>
  );
};
export default ItemReview;
