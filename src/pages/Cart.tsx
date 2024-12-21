import styled from 'styled-components';
import useUserStore from '../store/user';
import CartList from '../feature/Cart/CartList';
import CartBill from '../feature/Cart/CartBill';
import { useCart, useDeleteCart, useDeleteCarts } from '../hooks/useCart';
import { useQueryClient } from '@tanstack/react-query';
import GotoLogin from '../components/GotoLogin';
import Loader from '../ui/Loader';
import { UserType } from '../types/login';
import { useState } from 'react';
import Button from '../ui/Button';
import useOrder from '../hooks/useOrder';

const StyledCart = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  justify-content: center;
  padding: 5rem;

  #cart {
    padding: 2rem 3rem;
    width: 120rem;
    height: fit-content;
    min-height: 60rem;
    background-color: var(--color-accent_blue2);
    border-radius: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  #cart_content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    /* background-color: cyan; */
    min-height: 40rem;
  }

  #cart_title {
    font-size: 2rem;
    font-weight: 500;
  }
  ul {
    width: 80rem;
    border-radius: 0.7rem;
  }
  button {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
const Cart = () => {
  const { cartItemList, user_cart } = useCart();
  const [isClickAll, setIsClickAll] = useState<boolean>(true);
  const [checkItemsArray, setCheckItemsArray] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const deleteCarts = useDeleteCarts();
  const { order, orderConfirm } = useOrder();
  console.log(totalPrice);
  if (cartItemList === undefined) return <Loader />;

  const handleDeleteCarts = () => {
    if (!user_cart) throw new Error('로그인하세여');
    deleteCarts({ item_nums: checkItemsArray, user_cart: user_cart });
  };

  return (
    <StyledCart>
      <span id="cart_title">장바구니</span>
      {!orderConfirm ? (
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
                      <CartList
                        key={i}
                        cartItem={cart}
                        user_cart={user_cart}
                        isClickAll={isClickAll}
                        setCheckItemsArray={setCheckItemsArray}
                        setTotalPrice={setTotalPrice}
                      />
                    ))
                  )}
                </ul>
                <CartBill totalPrice={totalPrice} cartItemList={cartItemList} user_cart={user_cart} order={order} />
              </div>
              <div>
                <Button onClick={() => setIsClickAll((v) => !v)}>전체선택</Button>
                <Button onClick={() => handleDeleteCarts()}>선택삭제</Button>
              </div>
            </>
          )}
        </div>
      ) : (
        <p>주문완료</p>
      )}
    </StyledCart>
  );
};
export default Cart;
