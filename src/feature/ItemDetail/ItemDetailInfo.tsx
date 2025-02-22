import styled from 'styled-components';
import { ItemType } from '../../types/Item';
import ItemDetailCart from './ItemDetailCart';
import priceFormat from '../../utils/PriceFormat';
import { useState } from 'react';

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
    }
  }
  @media screen and (max-width: 600px) {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;

    #item_info {
      width: 100vw;
      padding: 0;
      align-items: center;
      p {
        padding: 1rem;
      }
    }
  }
`;

interface ItemDetailInfoProps {
  item: ItemType;
}

const ItemDetailInfo = ({ item }: ItemDetailInfoProps) => {
  const [itemCount, setItemCount] = useState<number>(1);
  const { item_content, item_img, item_price, item_title, item_num } = item;
  return (
    <StyledItemDetailInfo>
      <img src={item_img} />
      <div id="item_info">
        <p>{item_title}</p>
        <p>{item_content}</p>
        <p>{priceFormat(item_price)}원</p>
        <ItemDetailCart
          itemCount={itemCount}
          setItemCount={setItemCount}
          item_title={item_title}
          item_price={item_price}
          item_num={item_num}
        />
      </div>
    </StyledItemDetailInfo>
  );
};
export default ItemDetailInfo;
