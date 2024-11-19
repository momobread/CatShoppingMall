import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import MainNav from './MainNav';
import Main from './Main';
import Footer from './Footer';

const StyledAppLayout = styled.div`
  background-color: var(--color-grey-50);
  display: grid;
  grid-template-rows: 20rem 6rem 1fr 30rem;
`;

const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <MainNav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
};
export default AppLayout;
