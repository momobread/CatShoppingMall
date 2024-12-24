import styled from 'styled-components';
import Button from '../../ui/Button';
import React, { useEffect, useState } from 'react';
import { CartListType } from '../../types/cart';
import { useAddCart, useDeleteCart } from '../../hooks/useCart';
import priceFormat from '../../utils/PriceFormat';

const StyledCartList = styled.li`
  display: grid;
  grid-template-columns: 1fr 5rem;
  border-radius: 0.7rem;
  margin-bottom: 2rem;
  background-color: #fff;
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
  #select_btn {
    padding-left: 1rem;
  }
  @media screen and (max-width: 600px) {
    padding: 1rem;
    #cart_item {
      gap: 0;
    }
    img {
      width: 10rem;
      height: 10rem;
    }
    #select_btn {
      height: 4rem;
      padding: 0;
      display: flex;
      justify-content: flex-end;
      button {
        width: 50%;
        height: 3.5rem;
        line-height: 0;
        margin: 0;
        font-size: 1.3rem;
      }
    }
    #cart_item_info {
      justify-content: center;
      width: 80%;
      padding-left: 1rem;
      span {
        font-size: 1.5rem;
      }
      button {
        height: 3rem;
        line-height: 0;
        width: 3rem;
        padding: 0;
      }
    }
  }
`;

interface CartListProps {
  cartItem: CartListType;
  user_cart: number;
  isClickAll: boolean;
  setCheckItemsArray: React.Dispatch<React.SetStateAction<string[]>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
}

const CartList = ({ cartItem, user_cart, isClickAll, setCheckItemsArray, setTotalPrice }: CartListProps) => {
  // console.log(cartItem);
  const { item_title, item_img, item_price, item_count, item_num } = cartItem;
  const [itemCount, setItemCount] = useState<number>(item_count);
  console.log(itemCount);
  const [isClickCheckbox, setIsClickCheckBox] = useState<boolean>(true);
  const addCart = useAddCart();
  const deleteCartItem = useDeleteCart();

  //카트 페이지를 처음으로 진입하면 원래 [cart]가 캐시에 없어서 새로 받아오기 떄문에 db와 동기화가 된다. 하지만 다른페이지에 갔다가 다시 돌아오면 동기화가 안된다
  //아이템 카트를  갱신시켜도 CartList의 컴포넌트 랜더링 속도가 [cart]캐시 업데이트 속도보다 빨라서 useState 초기화가 캐시 업데이트 전 데이터로 된다
  useEffect(() => {
    setItemCount(item_count);
  }, [item_count]);

  useEffect(() => {
    if (isClickAll) {
      setIsClickCheckBox(true);
    }
    if (!isClickAll) {
      setIsClickCheckBox(false);
    }
  }, [isClickAll]);

  useEffect(() => {
    if (isClickCheckbox) {
      setCheckItemsArray((v) => [...v, item_num]);
      setTotalPrice((v) => v + item_price * itemCount);
    }
    if (!isClickCheckbox) {
      setCheckItemsArray((v) => {
        return v.filter((num) => num != item_num);
      });
      setTotalPrice((v) => v - item_price * itemCount);
    }
  }, [isClickCheckbox]);

  const handleDownButton = (itemCount: number) => {
    if (itemCount === 1) return;
    setItemCount((v) => v - 1);
    addCart({ item_count: -1, item_num, user_cart });
    setTotalPrice((v) => v - item_price);
  };
  const handleUpButton = () => {
    setItemCount((v) => v + 1);
    addCart({ item_count: 1, item_num, user_cart });
    setTotalPrice((v) => v + item_price);
  };

  const handleDeleteItem = () => {
    deleteCartItem({ item_num, user_cart });
  };

  const handleCheckbox = () => {
    setIsClickCheckBox((v) => !v);
  };

  return (
    <StyledCartList>
      <div>
        <div id="cart_item">
          <img src={item_img} />
          <div id="cart_item_info">
            <span>{item_title}</span>
            <span>{priceFormat(item_price)}원</span>
            <div>
              <Button onClick={() => handleDownButton(itemCount)}>-</Button>
              <span>{itemCount}</span>
              <Button onClick={() => handleUpButton()}>+</Button>
            </div>
          </div>
        </div>

        <div id="select_btn">
          <Button onClick={() => handleDeleteItem()}>삭제</Button>
          <Button onClick={() => setIsClickCheckBox((v) => !v)}>선택</Button>
        </div>
      </div>
      <input type="checkbox" checked={isClickCheckbox} onClick={() => handleCheckbox()} />
    </StyledCartList>
  );
};
export default CartList;
