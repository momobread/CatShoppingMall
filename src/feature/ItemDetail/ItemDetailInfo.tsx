import styled from 'styled-components';
import { ItemType } from '../../types/Item';
import ItemCart from './ItemCart';

const StyledItemDetailInfo = styled.div`
  display: grid;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-300);

  /* 이미지 */
  grid-template-columns: 55rem 60rem;

  img {
    width: 55rem;
    justify-self: center;
    border-left: 1px solid var(--color-grey-300);
    /* align-items: center; */
  }
  #item_info {
    padding: 2.5rem;
    border-left: 1px solid var(--color-grey-300);
    border-right: 1px solid var(--color-grey-300);
    display: grid;
    grid-template-rows: 4rem 4rem 4rem 1fr;
  }

  #item_info p:nth-of-type(1),
  #item_info p:nth-of-type(3) {
    font-weight: 500;
    font-size: 2.5rem;
  }
  #item_info p:nth-of-type(2) {
    font-weight: 500;
    font-size: 2rem;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    display: flex;
    grid-template-columns: 30rem 60rem;
    img {
      width: 30rem;
      height: 40rem;
    }
    #item_info {
      width: calc(100% - 42rem);
      /* background-color: aliceblue; */
      display: grid;
      /* align-items: center; */

      /* justify-content: center; */
    }
  }
`;

interface ItemDetailInfoProps {
  item: ItemType;
}

const ItemDetailInfo = ({ item }: ItemDetailInfoProps) => {
  // console.log(item);
  const { item_content, item_img, item_price, item_title } = item;
  return (
    <StyledItemDetailInfo>
      <img src={item_img} />
      <div id="item_info">
        <p>{item_title}</p>
        <p>{item_content}</p>
        <p>{item_price}원</p>
        <ItemCart item_title={item_title} item_price={item_price} />
      </div>
    </StyledItemDetailInfo>
  );
};
export default ItemDetailInfo;
