import styled from 'styled-components';
import priceFormat from '../../utils/PriceFormat';
import Button from '../../ui/Button';
import { CartListType } from '../../types/cart';
import { OrderParams } from '../../types/order';
import Activemodal from '../../utils/ActiveModal';

const StyledCartBill = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  background-color: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.16) 0px 3px 6px,
    rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border: 1px solid var(--color-grey-200);
  span {
    font-size: 2.5rem;
    font-weight: 500;
  }
  gap: 3rem;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 12rem;
    gap: 1rem;
    span {
      font-size: 2rem;
    }
  }
`;

interface CartBillProps {
  totalPrice: number;
  cartItemList: CartListType[];
  user_cart: number;
  order: (v: OrderParams) => void;
}

const CartBill = ({ totalPrice, cartItemList, user_cart, order }: CartBillProps) => {
  const handleBuyButton = () => {
    if (cartItemList.length === 0) {
      Activemodal('장바구니에 아이템을 추가하여 주세요');
      return;
    }
    order({ cartItemList, user_cart });
  };

  return (
    <StyledCartBill>
      <span>총 가격 : {priceFormat(totalPrice)}원</span>
      <Button size="large" onClick={() => handleBuyButton()}>
        구매하기
      </Button>
    </StyledCartBill>
  );
};
export default CartBill;
