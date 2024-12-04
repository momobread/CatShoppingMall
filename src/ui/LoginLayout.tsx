import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';
import Logo from './Logo';

const StyledLoginLayout = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    height: 22rem;
    display: flex;
    justify-content: cneter;
    align-items: center;
    span {
      font-size: 3.8rem;
      font-weight: 500;
    }
  }
`;
const LoginLayout = () => {
  const navigate = useNavigate();
  return (
    <StyledLoginLayout>
      <header onClick={() => navigate('/')}>
        <Logo />
        <span>Momo CatShop</span>
      </header>
      <Outlet />
      <Footer />
    </StyledLoginLayout>
  );
};
export default LoginLayout;
