import styled from 'styled-components';
import useUserStore from '../store/user';
import CartList from '../feature/Cart/CartList';
import CartBill from '../feature/Cart/CartBill';
import { useCart } from '../hooks/useCart';
import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { CartInfoType, UserType } from '../types/user';
import Button from '../ui/Button';
import GotoLogin from '../components/GotoLogin';
import Loader from '../ui/Loader';

const StyledCart = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  justify-content: center;
  padding: 5rem 0;

  #cart {
    padding: 2rem;
    width: 120rem;
    height: fit-content;
    background-color: var(--color-grey-100);
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 60rem;
    border-radius: 0.7rem;
  }
  #cart_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    /* background-color: cyan; */
    min-height: 40rem;
  }
  #cart_bill {
    border: 1px solid black;
    height: 20rem;
    border-radius: 0.7rem;
  }
  ul {
    border: 1px solid black;
    width: 80rem;
    border-radius: 0.7rem;
    li {
      height: 20rem;
    }
  }
`;
const Cart = () => {
  const { isLogined, user_uuid } = useUserStore();
  const queryClinet = useQueryClient();

  const cartItem: UserType[] | null = queryClinet.getQueryData<UserType[]>(['user']) ?? null;

  const cartItemList = useCart(cartItem, user_uuid);
  console.log(cartItemList);

  if (cartItemList === undefined) return <Loader />;

  return (
    <StyledCart>
      <span>장바구니</span>
      <div id="cart">
        {cartItemList === null ? ( //로그인이 아예 안된경우
          <GotoLogin />
        ) : (
          <>
            <div id="cart_content">
              <ul>
                {cartItemList.length < 1 ? (
                  <li>아이템을 추가하여 주세요</li>
                ) : (
                  cartItemList.map((cart, i) => <CartList key={i} cartItem={cart} />)
                )}
              </ul>
              <CartBill />
            </div>
            <div>
              <button>전체선택</button>
              <button>선택삭제</button>
            </div>
          </>
        )}
      </div>
    </StyledCart>
  );
};
export default Cart;
