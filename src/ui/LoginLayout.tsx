import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './Footer';

const StyledLoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
`;
const LoginLayout = () => {
  return (
    <StyledLoginLayout>
      <Outlet />
      <Footer />
    </StyledLoginLayout>
  );
};
export default LoginLayout;
