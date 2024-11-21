import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import MainNav from './MainNav';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';

const StyledAppLayout = styled.div`
  /* background-color: var(--color-grey-50); */
  display: grid;
  grid-template-rows: 22rem 6rem 1fr 30rem;

  /* 여기 다시한번 봐주세요 */
  /* @media screen and (max-width: 600px) {
    font-sizs: 1rem;
  } */
`;

const AppLayout = () => {
  let test = false;
  return (
    <StyledAppLayout>
      <Header />
      <MainNav />
      <Main>
        <Outlet />
        {test ? <Loader /> : ''}
      </Main>
      <Footer />
    </StyledAppLayout>
  );
};
export default AppLayout;
