import styled from 'styled-components';
import { ItemType } from '../types/Item';
import { useNavigate } from 'react-router-dom';

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
    max-width: 20rem;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 900px) {
    & {
      width: 15rem;
    }
    img {
      max-width: 15rem;
      height: 20rem;
    }
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
      max-width: inherit;
    }
  }
`;

interface ItemListProps {
  item: ItemType;
}

const ItemList = ({ item }: ItemListProps) => {
  const navigate = useNavigate();

  const { item_content, item_img, item_price, item_title, item_category, item_num } = item;
  //category에 따라 동적으로 navaigate해주자
  // console.log(item_category);
  return (
    <StyledItemList onClick={() => navigate(`/category/${item_category}/detail/${item_num}`)}>
      <img src={item_img} />
      <span>{item_title}</span>
      <span id="content">{item_content}</span>
      <span>{item_price}</span>
    </StyledItemList>
  );
};
export default ItemList;
