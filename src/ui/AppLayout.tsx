import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';

const StyledAppLayout = styled.div``;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      {/* <MainNav/> */}
      {/* <Main>
        <Outlet/>
      </Main> */}
      {/* <Footer/> */}
    </StyledAppLayout>
  );
};
export default AppLayout;
