import styled from 'styled-components';
import useUserStore from '../store/user';
import CartList from '../feature/Cart/CartList';
import CartBill from '../feature/Cart/CartBill';
import { useCart } from '../hooks/useCart';
import { useQueryClient } from '@tanstack/react-query';
import GotoLogin from '../components/GotoLogin';
import Loader from '../ui/Loader';
import { UserType } from '../types/login';
import { useState } from 'react';

const StyledCart = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  justify-content: center;
  padding: 5rem 0;

  #cart {
    padding: 2rem 0;
    width: 120rem;
    height: fit-content;
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    min-height: 60rem;
  }
  #cart_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    /* background-color: cyan; */
    min-height: 40rem;
  }
  #cart_bill {
    height: 20rem;
    border-radius: 0.7rem;
    box-shadow:
      rgba(0, 0, 0, 0.16) 0px 3px 6px,
      rgba(0, 0, 0, 0.23) 0px 3px 6px;
    border: 1px solid var(--color-grey-200);
  }
  ul {
    width: 80rem;
    border-radius: 0.7rem;
  }
`;
const Cart = () => {
  const { cartItemList, user_cart } = useCart();
  const [isClickAll, setIsClickAll] = useState<boolean>(false);
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
                {cartItemList.length < 1 ? ( //로그인은 되었지만 아이템이 없는 경우
                  <li>아이템을 추가하여 주세요</li>
                ) : (
                  cartItemList.map((cart, i) => (
                    <CartList key={i} cartItem={cart} user_cart={user_cart} isClickAll={isClickAll} />
                  ))
                )}
              </ul>
              <CartBill />
            </div>
            <div>
              <button onClick={() => setIsClickAll((v) => !v)}>전체선택</button>
              <button>선택삭제</button>
            </div>
          </>
        )}
      </div>
    </StyledCart>
  );
};
export default Cart;
