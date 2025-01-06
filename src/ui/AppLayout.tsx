import { Outlet } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import MainNav from './MainNav';
import Main from './Main';
import Footer from './Footer';
import ModalStore from '../store/modal';
import Modal from '../components/Modal';

const StyledAppLayout = styled.div`
  /* background-color: var(--color-grey-50); */
  display: grid;
  grid-template-rows: 22rem 6rem 1fr 30rem;
  height: 100vh;
`;

const AppLayout = () => {
  const { isModal } = ModalStore();
  return (
    <StyledAppLayout>
      {isModal && <Modal />}
      <Header />
      <MainNav />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
    // </LoginVerification>
  );
};
export default AppLayout;
