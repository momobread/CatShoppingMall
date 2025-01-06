import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  ul {
    font-size: 2rem;
    display: grid;
    height: 100%;

    background-color: var(--color-accent_blue2);
    grid-template-columns: 20rem 20rem 20rem 20rem;
    justify-content: center;
    align-items: center;
    a {
      height: 100%;
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
      box-shadow: var(--box-shadow_1);
    }
  }
  @media screen and (max-width: 600px) {
    ul {
      grid-template-columns: 1fr 1fr 1fr 1fr;

      a {
        width: 100%;
        justify-self: center;
      }
      li {
        width: fit-content;
        font-size: 1.5rem;
      }
    }
  }
`;

const MainNav = () => {
  return (
    <StyledMainNav>
      <ul>
        {/* <SideBar/> */}
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
  );
};
export default MainNav;

// return (
//   <>
//     <header>
//       <Header pageNum={pageNum} islogin={islogin} />
//     </header>
//     <Nav />
//     <ADD />
//     <div className="mobile">ALL Items</div>
//     <div className="content">
//       <ItemList
//         pageNum={pageNum}
//         detailContent={detailContent}
//         items={bestitems[bestNum]}
//         handleNext={handleNextBestItem}
//         handlePrevious={handlePreviousBestItem}>
//         bestItem
//       </ItemList>

//       <ItemList
//         items={newitems[newNum]}
//         handleNext={handleNextNewItem}
//         handlePrevious={handlePreviousNewItem}>
//         NewItem
//       </ItemList>

//       <Recommand>Recommand</Recommand>
//       <Information>Information</Information>
//     </div>

//     <Footer />
