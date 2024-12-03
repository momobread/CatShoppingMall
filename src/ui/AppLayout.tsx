import { Outlet, useLocation, useNavigation } from 'react-router-dom';
import Header from './Header';
import styled from 'styled-components';
import MainNav from './MainNav';
import Main from './Main';
import Footer from './Footer';
import Loader from './Loader';
import LoginVerification from '../feature/login/LoginVerification';
import { useEffect } from 'react';

const StyledAppLayout = styled.div`
  /* background-color: var(--color-grey-50); */
  display: grid;
  grid-template-rows: 22rem 6rem 1fr 30rem;

  /* 여기 다시한번 봐주세요 */
`;

const AppLayout = () => {
  const location = useLocation().pathname;

  return (
    // <LoginVerification>
    <StyledAppLayout>
      <Header />
      <MainNav />
      <Main>
        {/* <Outlet key={location} /> 
            이렇게 하면 하위가 바뀔때마다 새로운컴포넌트로 간주하고 언마운트됬다가 다시 마운트되서 리소스 낭비가 심해진다
          모든 하위를 다시그리기 때문이다.쿼리스트링을 생각해보자 category/2?10001 100002, 등등 주소가 무조건 바뀌면 또 처음부터 모든 컴포넌트를 다시
          그리니 얼마나 낭비인가?=> useEffect를 사용해서 location이 변할때 실행은 되지만 재마운트는 안되고 리랜더링만 되도록 하자.
         */}
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
    // </LoginVerification>
  );
};
export default AppLayout;
