import styled from 'styled-components';

const StyledReviewNav = styled.ul`
  padding-top: 0.5rem;
  display: flex;
  gap: 1rem;
  height: 5rem;
  font-size: 2.5rem;
  font-weight: 500;
  border: 1xp solid var(--color-grey-400);
`;

const ReviewNav = () => {
  return (
    <StyledReviewNav>
      <li>최신순</li>
      <li>별점순</li>
      <li>좋아요순</li>
    </StyledReviewNav>
  );
};
export default ReviewNav;
