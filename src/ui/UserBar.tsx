import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useUserStore from '../store/user';
import useLogout from '../hooks/useLogout';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import DropdownList from '../feature/ItemCategory/DropdownList';

const StyledUserBar = styled.div`
  padding: 1rem 0;
  width: 25rem;
  font-weight: 500;
  color: var(--color-accent_blue3);
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  position: relative;
  #user_list {
    display: flex;
    justify-content: center;
    gap: 1rem;
    width: 80%;
  }
  #dropdown_menu {
    width: 10%;
    span {
      display: flex;
      align-items: center;
    }
  }
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
  @media screen and (max-width: 600px) {
    width: 16rem;
    gap: 0.2rem;
  }
`;
const UserBar = () => {
  const { isLogined, user_metaData } = useUserStore();
  const { logout } = useLogout();
  const [activeDropList, setActiveDropList] = useState<boolean>(false);

  return (
    <StyledUserBar>
      <div id="user_list">
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
          <>
            <NavLink to="/member/login">
              <span>로그인</span>
            </NavLink>
            <NavLink to="">
              <span>회원가입</span>
            </NavLink>
          </>
        )}
        {/* <NavLink to="/mypage">
        <span>마이페이지</span>
        </NavLink> */}
        <NavLink to="order/cart">
          <span>장바구니</span>
        </NavLink>
      </div>
      <a id="dropdown_menu" onClick={() => setActiveDropList((v) => !v)}>
        <span>
          <MenuIcon sx={{ fontSize: '2rem' }} />
        </span>
      </a>
      {activeDropList ? <DropdownList setActiveDropList={setActiveDropList} /> : ''}
    </StyledUserBar>
  );
};
export default UserBar;
