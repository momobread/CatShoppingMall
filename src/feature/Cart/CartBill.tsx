import priceFormat from '../../utils/PriceFormat';

interface CartBillProps {
  totalPrice: number;
}

const CartBill = ({ totalPrice }) => {
  return (
    <div id="cart_bill">
      <span>총금액 : {priceFormat(totalPrice)}원</span>
      <button>주문하기</button>
    </div>
  );
};
export default CartBill;
