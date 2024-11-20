import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUserBar = styled.div`
  background-color: azure;
  display: flex;
  gap: 10px;
`;

const UserBar = () => {
  return (
    <StyledUserBar>
      <NavLink to="/user/login">
        <span>로그인</span>
      </NavLink>
      <NavLink to="/mypage">
        <span>마이페이지</span>
      </NavLink>
      <NavLink to="order/cart">
        <span>장바구니</span>
      </NavLink>
    </StyledUserBar>
  );
};
export default UserBar;
