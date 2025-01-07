import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DropdownList from '../feature/ItemCategory/dropdownList';
import { useState } from 'react';
const StyledMainNav = styled.nav`
  border-bottom: 1px solid var(--color-grey-400);
  border-top: 1px solid var(--color-grey-400);
  display: flex;
  justify-content: center;
  ul {
    width: 100%;
    font-size: 2rem;
    display: grid;
    height: 100%;
    grid-template-columns: 20% 80%;
    justify-content: center;
    align-items: center;
    div {
      display: grid;
      height: inherit;
      grid-template-columns: 20rem 20rem 20rem 20rem;
      justify-content: center;
    }

    a {
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      text-align: center;
      color: var(--color-accent_blue3);
      font-weight: 600;
    }
    .active {
      background-color: var(--color-accent_blue);
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
  @media screen and (max-width: 1650px) {
    background-color: aqua;
    ul {
      div {
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
    }
  }
  @media screen and (max-width: 600px) {
    ul {
      width: 100vw;
      grid-template-columns: 1fr;
      div {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        height: 100%;
      }
      a {
        width: 100%;
        justify-self: center;
        height: 100%;
      }
      li {
        width: fit-content;
        font-size: 1.5rem;
      }
    }

    #drop_category {
      display: none;
    }
  }
`;

const MainNav = () => {
  const [activeDrop, setActiveDrop] = useState<boolean>(false);

  const handleDropCategory = () => {
    setActiveDrop((v) => !v);
  };

  return (
    <>
      <StyledMainNav>
        <ul>
          {/* <SideBar/> */}
          <a
            id="drop_category"
            style={{ backgroundColor: 'var(--color-accent_blue5)' }}
            onClick={() => handleDropCategory()}
          >
            <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              카테고리별 <KeyboardArrowDownIcon sx={{ fontSize: '4rem' }} />
            </li>
          </a>
          <div>
            <NavLink to="/category/1?sort=date_desc">
              <li>베스트상품</li>
            </NavLink>
            <NavLink to="/category/2?sort=date_desc">
              <li>신상품</li>
            </NavLink>
            <NavLink to="/event">
              <li>이벤트</li>
            </NavLink>
            <NavLink to="/faq">
              <li>
                자주묻는
                <br /> 질문
              </li>
            </NavLink>
          </div>
        </ul>
      </StyledMainNav>
      {activeDrop ? <DropdownList /> : ''}
      {/* <DropdownList active={activeDrop ? 'active' : 'inactive'} /> */}
    </>
  );
};
export default MainNav;
