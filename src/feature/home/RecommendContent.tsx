import styled from 'styled-components';
import { RecommendType } from '../../types/home';

const StyledRecommendContent = styled.div`
  display: flex;
  max-width: 50rem;
  padding: 2rem 1rem;
  max-height: 25rem;
  flex-direction: column;
  border-radius: 0.5rem;

  border: 1px solid var(--color-grey-400);
  p {
    max-width: 40rem;
    height: fit-content;
  }
  @media screen and (max-width: 600px) {
    border: none;
    border-bottom: 1px solid var(--color-grey-400);
    border-radius: 0px;
  }
`;

interface RecommendContentProps {
  data: RecommendType;
}

const RecommendContent = ({ data }: RecommendContentProps) => {
  const { recommend_content, recommend_rate, recommend_title } = data;
  return (
    <StyledRecommendContent>
      <p>{recommend_title}</p>
      <p>{recommend_content}</p>
      <p>{recommend_rate}</p>
    </StyledRecommendContent>
  );
};
export default RecommendContent;
