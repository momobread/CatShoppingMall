import styled from 'styled-components';
import { ItemType } from '../types/Item';

const StyledItemList = styled.li`
  /* background-color: aqua; */
  /* background-color: aliceblue; */
  display: grid;
  padding: 10px;
  border-radius: 5px;
  width: 25rem;
  text-align: center;
  justify-content: center;

  grid-template-rows: 1fr 3rem 3rem 3rem;
  img {
    height: 22rem;
    max-width: 20rem;
    border-radius: 5px;
  }
  #content {
    max-width: 19rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 600px) {
    & {
      width: 100%;
    }
    img {
      height: 30rem;
      max-width: 40rem;

      /* height:  */
    }
    #content {
      max-width: 29rem;
    }
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
      <img src={item_img} />
      <span>{item_title}</span>
      <span id="content">{item_content}</span>
      <span>{item_price}</span>
    </StyledItemList>
  );
};
export default ItemList;
