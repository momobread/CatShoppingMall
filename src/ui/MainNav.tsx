import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMainNav = styled.nav`
  background-color: var(--color-grey-100);
  ul {
    display: grid;
    height: 100%;
    background-color: aliceblue;
    grid-template-columns: 10rem 10rem 10rem;
    justify-content: center;
    li {
      height: inherit;
      text-align: center;
      line-height: 3;
      font-weight: 500;
    }
  }
`;

const MainNav = () => {
  return (
    <StyledMainNav>
      <ul>
        {/* <SideBar/> */}
        <NavLink to="/items/new">
          <li>NewItems</li>
        </NavLink>
        <NavLink to="items/best">
          <li>BestItems</li>
        </NavLink>
        <NavLink to="service">
          <li>Service</li>
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
