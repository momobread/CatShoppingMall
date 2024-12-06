import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  background-color: var(--color-grey-100);
  /* border-top: 1px solid var(--border-basic_3); */
  /* border-bottom: 1px solid var(--color-grey-100); */
  ul {
    font-size: 2rem;
    display: grid;
    height: 100%;
    background-color: var(--color-accent_blue);
    grid-template-columns: 15rem 15rem 15rem 15rem;
    justify-content: center;
    align-items: center;
    li {
      text-align: center;
      color: var(--color-accent_blue3);
      font-weight: 600;
      height: fit-content;
      /* background-color: black; */
    }
  }
  @media screen and (max-width: 600px) {
    ul {
      grid-template-columns: 7rem 7rem 7rem 7rem;
      a {
        width: fit-content;
      }
      li {
        width: fit-content;
        padding: 0.2rem;
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
          <li>자주묻는 질문</li>
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
