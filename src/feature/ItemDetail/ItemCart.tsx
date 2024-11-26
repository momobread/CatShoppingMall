import styled from 'styled-components';
import Button from '../../ui/Button';

const StyledItemCart = styled.div`
  background-color: aqua;
  width: 100%;
`;

const ItemCart = () => {
  return (
    <StyledItemCart>
      <div>
        <Button>-</Button>
        <span>1</span>
        <Button>+</Button>
      </div>
      <div>
        <p>총 상품금액 : 총 수량 1111원</p>
        <div>
          <Button>장바구니 담기</Button>
          <Button>찜하기</Button>
          <Button>문의하기</Button>
        </div>
      </div>
    </StyledItemCart>
  );
};
export default ItemCart;
