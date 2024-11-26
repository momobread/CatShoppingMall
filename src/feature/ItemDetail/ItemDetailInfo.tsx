import styled from 'styled-components';
import { ItemType } from '../../types/Item';
import ItemCart from './ItemCart';

const StyledItemDetailInfo = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 65rem 50rem;
  #item_info {
    padding: 5rem;
  }
  img {
    width: 65rem;
    max-width: 68rem;
    justify-self: center;
    border-right: 1px solid var(--color-grey-300);
    /* align-items: center; */
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    gap: 2rem;
    img {
      width: 40rem;
      height: 40rem;
    }
    #item_info {
      width: calc(100% - 42rem);
      background-color: aliceblue;
      display: grid;
      /* align-items: center; */
      grid-template-rows: 4rem 4rem 4rem 1fr;
      /* justify-content: center; */
    }
  }
`;

interface ItemDetailInfoProps {
  item: ItemType[];
}

const ItemDetailInfo = ({ item }: ItemDetailInfoProps) => {
  console.log(item);
  const [{ item_category, item_content, item_img, item_price, item_title }] = item;
  return (
    <StyledItemDetailInfo>
      <img src={item_img} />
      <div id="item_info">
        <p>{item_title}</p>
        <p>{item_content}</p>
        <p>{item_price}원</p>
        <ItemCart />
      </div>
    </StyledItemDetailInfo>
  );
};
export default ItemDetailInfo;
