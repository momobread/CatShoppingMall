import styled from 'styled-components';
import Logo from './Logo';
import UserBar from './UserBar';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled.header`
  width: 100%;
  /* background-color: var(--color-grey-50); */
  /* border: 1px solid var(--color-grey-400); */
  display: grid;
  //200
  grid-template-rows: 5rem 1fr 8rem;
  /* align-items: center;
  justify-content: center; */
  align-items: center;
  div {
    cursor: pointer;
  }
  div:nth-of-type(1) {
    justify-self: flex-end;
  }
  div:nth-of-type(2) {
    display: flex;
    gap: 10px;
    span {
      font-size: 3.8rem;
      font-weight: 500;
    }
    justify-self: center;
  }
  div:nth-of-type(3) {
    justify-self: center;
  }
  @media screen and (max-width: 600px) {
    div:nth-of-type(2) {
      span {
        font-size: 3rem;
      }
      justify-self: center;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  return (
    <StyledHeader>
      <UserBar />

      <div onClick={() => navigate('/')}>
        <Logo />
        <span>Momo CatShop</span>
      </div>
      {/* <SearchBar /> */}
    </StyledHeader>
  );
};
export default Header;

// return (
//     <div className="header_wrap">
//       <div className="header_bar">
//         <div className="login_button"></div>
//         {islogin ? (
//           <div className="Mypage">
//             <p>mypage</p>
//           </div>
//         ) : (
//           <p href="" onClick={() => pageNum(3)}>
//             Login
//           </p>
//         )}
//         <div className="nav_menu">
//           <img src="/src/assets/shopping_icon.png" />
//         </div>
//         <div className="shopping_cart_button">
//           <a href="./shoppingCart/shoppingCart.html">
//             <img src="/src/assets/header_nav_bar_icon.png" />
//           </a>
//         </div>
//       </div>
//       <div className="header">
//         <span className="logo">
//           <img src="/src/assets/모모고양이.jpg" />
//         </span>
//         <span className="company_name">하리묘 컴퍼니</span>
//       </div>
//     </div>
//   );
