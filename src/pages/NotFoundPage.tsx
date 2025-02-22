import styled from 'styled-components';
import Button from '../ui/Button';
import { useNavigate } from 'react-router-dom';

const StyledNotFoundPage = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  grid-template-rows: 10rem 1fr 10rem;
  img {
    width: 50rem;
  }
  button {
    justify-self: center;
  }
`;

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <StyledNotFoundPage>
      <h1>찾으시려는 페이지가 없습니다</h1>
      <img src="/momoLogo.jpg" alt="momoLogo" />
      <Button onClick={() => navigate('/')}>홈으로 돌아가기</Button>
    </StyledNotFoundPage>
  );
};
export default NotFoundPage;
