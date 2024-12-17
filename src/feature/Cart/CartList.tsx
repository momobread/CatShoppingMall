import styled from 'styled-components';
import Button from '../../ui/Button';
import { useEffect, useState } from 'react';
import { CartListType } from '../../types/cart';
import { useAddCart } from '../../hooks/useCart';

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

interface CartListProps {
  cartItem: CartListType;
  user_cart: number;
}

const CartList = ({ cartItem, user_cart }: CartListProps) => {
  console.log(cartItem);
  const { item_title, item_img, item_price, item_count, item_num } = cartItem;
  const [itemCount, setItemCount] = useState<number>(item_count);
  const addCart = useAddCart();

  //카트 페이지를 처음으로 진입하면 원래 [cart]가 캐시에 없어서 새로 받아오기 떄문에 db와 동기화가 된다. 하지만 다른페이지에 갔다가 다시 돌아오면 동기화가 안된다
  //아이템 카트를  갱신시켜도 CartList의 컴포넌트 랜더링 속도가 [cart]캐시 업데이트 속도보다 빨라서 useState 초기화가 캐시 업데이트 전 데이터로 된다
  useEffect(() => {
    setItemCount(item_count);
  }, [item_count]);

  const handleDownButton = (itemCount: number) => {
    if (itemCount === 1) return;
    setItemCount((v) => v - 1);
  };
  const handleUpButton = (e) => {
    setItemCount((v) => v + 1);
    addCart({ item_count: 1, item_num, user_cart });
  };

  return (
    <StyledCartList>
      <div>
        <div id="cart_item">
          <img src={item_img} />
          <div id="cart_item_info">
            <span>{item_title}</span>
            <span>{item_price}원</span>
            <div>
              <Button onClick={() => handleDownButton(itemCount)}>-</Button>
              <span>{itemCount}</span>
              <Button onClick={(e) => handleUpButton(e)}>+</Button>
            </div>
          </div>
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
