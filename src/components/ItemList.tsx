import styled from 'styled-components';
import { ItemType } from '../types/Item';

const StyledItemList = styled.li`
  background-color: aqua;
  display: grid;
  grid-template-rows: 3rem 3rem 1fr 3rem;
  img {
    max-width: 50px;
    max-height: 50px;
  }
`;

interface ItemListProps {
  item: ItemType;
}

const ItemList = ({ item }: ItemListProps) => {
  console.log(item);
  const { item_content, item_img, item_price, item_title } = item;
  return (
    <StyledItemList>
      <span>{item_title}</span>
      <span>{item_content}</span>
      <img src={item_img} />
      <span>{item_price}</span>
    </StyledItemList>
  );
};
export default ItemList;
