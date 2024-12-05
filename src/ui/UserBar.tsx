import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../store/user';
import { logOut as logoutApi } from '../service/loginApi';
import { useEffect, useState } from 'react';
import useLogout from '../hooks/useLogout';

const StyledUserBar = styled.div`
  padding: 1rem 2rem;
  font-weight: 500;
  color: var(--color-accent_blue3);
  display: flex;
  gap: 10px;
  #logout {
    color: var(--color-accent_blue4);
  }
`;
const UserBar = () => {
  const { isLogined, setIsLogined } = useUserStore();
  const [isLogOut, setIsLogOut] = useState<boolean>(false);
  const { logout } = useLogout();

  return (
    <StyledUserBar>
      {isLogined ? (
        <span id="logout" onClick={() => logout()}>
          로그아웃
        </span>
      ) : (
        <NavLink to="/member/login">
          <span>로그인</span>
        </NavLink>
      )}
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
