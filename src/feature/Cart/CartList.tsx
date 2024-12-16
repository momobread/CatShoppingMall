import styled from 'styled-components';
import { ItemType } from '../../types/Item';
import { CartListType } from '../../types/user';
import Button from '../../ui/Button';
import { useState } from 'react';

interface CartListProps {
  cartItem: CartListType;
}

const StyledCartList = styled.li`
  display: grid;
  grid-template-columns: 1fr 5rem;
  border-radius: 0.7rem;
  margin-bottom: 2rem;
  gap: 1rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: 1px solid var(--color-grey-300);
  img {
    width: 17rem;
    height: 18rem;
    border-radius: 0.7rem;
  }

  #cart_item {
    display: flex;
    gap: 5rem;
    margin-bottom: 1rem;
  }
  #cart_item_info {
    display: flex;
    flex-direction: column;
  }
  input {
    width: 3rem;
  }
`;

const CartList = ({ cartItem }: CartListProps) => {
  const { item_title, item_img, item_price, item_count } = cartItem;
  const [itemCount, setItemCount] = useState<number>(item_count);

  const handleDownButton = (itemCount) => {
    if (itemCount === 1) return;
    setItemCount((v) => v - 1);
  };

  return (
    <StyledCartList>
      <div>
        <div id="cart_item">
          <img src={item_img} />
          <p id="cart_item_info">
            <span>{item_title}</span>
            <span>{item_price}원</span>
            <div>
              <Button onClick={() => handleDownButton(itemCount)}>-</Button>
              <span>{itemCount}</span>
              <Button onClick={() => setItemCount((v) => v + 1)}>+</Button>
            </div>
          </p>
        </div>

        <div>
          <Button>삭제</Button>
          <Button>선택</Button>
        </div>
      </div>
      <input type="checkbox" />
    </StyledCartList>
  );
};
export default CartList;
