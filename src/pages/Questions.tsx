import styled from 'styled-components';
import FaqNav from '../feature/FAQ/FaqNav';
import FaqContents from '../feature/FAQ/FaqContents';

const StyledQuestions = styled.div``;

const Questions = () => {
  return (
    <StyledQuestions>
      <FaqNav />
      <FaqContents />
    </StyledQuestions>
  );
};
export default Questions;
