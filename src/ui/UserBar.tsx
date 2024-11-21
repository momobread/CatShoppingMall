import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUserBar = styled.div`
  padding: 1rem 2rem;
  font-weight: 500;
  color: var(--color-accent_blue3);
  display: flex;
  gap: 10px;
`;

const UserBar = () => {
  return (
    <StyledUserBar>
      <NavLink to="/member/login">
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
