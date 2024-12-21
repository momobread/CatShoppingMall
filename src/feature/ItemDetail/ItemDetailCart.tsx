import styled from 'styled-components';
import Button from '../../ui/Button';
import { useState } from 'react';
import useUserStore from '../../store/user';
import { useAddCart } from '../../hooks/useCart';
import { useQueryClient } from '@tanstack/react-query';
import { UserType } from '../../types/login';
import priceFormat from '../../utils/PriceFormat';

const StyledItemCart = styled.div`
  /* background-color: aqua; */

  #count_btn {
    /* border: 1px solid var(--color-grey-400); */
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--color-grey-100);

    div {
      margin: 0.5rem;
      display: flex;
      gap: 1rem;
      justify-content: space-between;
      align-items: center;

      div {
        display: flex;
        justify-content: space-between;
        button {
          width: 5rem;
        }
        span {
          width: 4rem;
          text-align: center;
        }
      }
    }
  }
  #total {
    padding: 1rem;
  }
  #cart_btn {
    display: grid;
    grid-template-columns: 25rem 15rem 15rem;
  }
`;

interface ItemCartProps {
  item_price: number;
  item_title: string;
  item_num: string;
}

const ItemDetailCart = ({ item_price, item_title, item_num }: ItemCartProps) => {
  const { isLogined } = useUserStore();
  const [itemCount, setItemCount] = useState<number>(1);
  const queryClient = useQueryClient();
  const addCart = useAddCart();

  const handleCartButton = (itemCount: number) => {
    //유저의 장바구니 넘버를 가져온다
    const user = queryClient.getQueryData<UserType[]>(['user']);
    if (!user || user.length === 0) return console.log('로그인하세요');

    const userCart = user.at(0)?.user_cart;
    if (!userCart) return console.log('유저의 카트가 없습니다.관리자에게 문의하세요');

    //유저의 장바구니에 추가한다
    addCart({ user_cart: userCart, item_count: itemCount, item_num });
  };

  return (
    <StyledItemCart>
      <div id="count_btn">
        <p>{item_title}</p>
        <div>
          <div>
            <Button onClick={() => (itemCount === 1 ? '' : setItemCount((v) => v - 1))}>-</Button>
            <span>{itemCount}</span>
            <Button onClick={() => setItemCount((v) => v + 1)}>+</Button>
          </div>
          <p>{priceFormat(item_price)}원</p>
        </div>
      </div>
      <p id="total">총 상품금액 : 총 수량 {priceFormat(item_price)}원</p>
      <div>
        <div id="cart_btn">
          <Button size="small" onClick={() => handleCartButton(itemCount)}>
            장바구니 담기
          </Button>
          <Button size="small">찜하기</Button>
          <Button size="small">문의하기</Button>
        </div>
      </div>
    </StyledItemCart>
  );
};
export default ItemDetailCart;
