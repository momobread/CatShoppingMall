import styled from 'styled-components';
import useUserStore from '../store/user';
import CartList from '../feature/Cart/CartList';
import CartBill from '../feature/Cart/CartBill';

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
  const { isLogined } = useUserStore();
  const test = [1, 2, 3, 4];
  return (
    <StyledCart>
      <span>장바구니</span>
      <div id="cart">
        <div id="cart_content">
          <ul>{isLogined ? <button>로그인하기</button> : test.map((v) => <CartList />)}</ul>
          <CartBill />
        </div>
        <div>
          <button>전체선택</button>
          <button>선택삭제</button>
        </div>
      </div>
    </StyledCart>
  );
};
export default Cart;
