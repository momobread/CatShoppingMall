import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../store/user';
import useLogout from '../hooks/useLogout';

const StyledUserBar = styled.div`
  padding: 1rem 2rem;
  font-weight: 500;
  color: var(--color-accent_blue3);
  display: flex;
  gap: 10px;

  #success_login {
    display: flex;
    gap: 1rem;
  }
  #user_nickname {
    color: var(--color-accent_pink);
  }
  #logout {
    color: var(--color-grey-400);
  }
`;
const UserBar = () => {
  const { isLogined, user_metaData } = useUserStore();
  const { logout } = useLogout();

  return (
    <StyledUserBar>
      {isLogined ? (
        <div id="success_login">
          <p>
            <span id="user_nickname">{user_metaData.nickname}</span>님
          </p>
          <span id="logout" onClick={() => logout()}>
            로그아웃
          </span>
        </div>
      ) : (
        <NavLink to="/member/login">
          <span>로그인</span>
        </NavLink>
      )}
      {/* <NavLink to="/mypage">
        <span>마이페이지</span>
      </NavLink> */}
      <NavLink to="order/cart">
        <span>장바구니</span>
      </NavLink>
    </StyledUserBar>
  );
};
export default UserBar;
