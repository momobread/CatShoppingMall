import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledItemCart = styled.div`
  /* background-color: aqua; */

  #count_btn {
    /* border: 1px solid var(--color-grey-400); */
    border-radius: 5px;
    padding: 1rem;
    background-color: var(--color-accent_blue2);

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
}

const ItemCart = ({ item_price, item_title }: ItemCartProps) => {
  console.log(typeof item_price);
  return (
    <StyledItemCart>
      <div id="count_btn">
        <p>{item_title}</p>
        <div>
          <div>
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </div>
          <p>{item_price}원</p>
        </div>
      </div>
      <p id="total">총 상품금액 : 총 수량 {item_price}원</p>
      <div>
        <div id="cart_btn">
          <Button size="small">장바구니 담기</Button>
          <Button size="small">찜하기</Button>
          <Button size="small">문의하기</Button>
        </div>
      </div>
    </StyledItemCart>
  );
};
export default ItemCart;
