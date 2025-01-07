import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const StyledMainNav = styled.nav`
  /* border-bottom: 2px solid var(--color-accent_blue5);
  border-top: 2px solid var(--color-accent_blue5); */
  display: flex;
  background-color: var(--color-accent_blue2);
  justify-content: center;
  ul {
    width: 100%;
    font-size: 2rem;
    display: grid;
    height: 100%;
    grid-template-columns: 20rem 20rem 20rem 20rem;
    justify-content: center;
    align-items: center;

    a {
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    li {
      text-align: center;

      font-weight: 600;
    }
    li:hover {
      color: var(--color-accent_blue4);
    }
    .active {
      height: 97%;
      color: var(--color-accent_blue4);
      /* background-color: var(--color-accent_blue); */
      /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
    }
  }
  @media screen and (max-width: 1650px) {
  }
  @media screen and (max-width: 600px) {
    ul {
      width: 100vw;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      a {
        width: 100%;
        justify-self: center;
        height: 100%;
      }
      li {
        width: fit-content;
        font-size: 1.5rem;
      }
      .active {
        height: 100%;
      }
    }

    #drop_category {
      display: none;
    }
  }
`;

const MainNav = () => {
  return (
    <>
      <StyledMainNav>
        <ul>
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
        </ul>
      </StyledMainNav>
      {/* {activeDrop ? <DropdownList /> : ''} */}
      {/* <DropdownList active={activeDrop ? 'active' : 'inactive'} /> */}
    </>
  );
};
export default MainNav;
