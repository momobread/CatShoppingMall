import React from 'react';
import styled from 'styled-components';

const StyledReviewNav = styled.ul`
  width: 60%;
  padding: 0 1rem;
  justify-self: center;
  align-self: flex-end;
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 5rem;
  font-size: 2rem;
  font-weight: 500;
  background-color: var(--color-grey-500);
  color: var(--color-grey-400);
  border: 1xp solid var(--color-grey-400);
  & {
    cursor: pointer;
  }
  .active {
    color: white;
  }
`;

interface ReviewNavProps {
  isClickReviewNav: string;
  setIsClickReviewNav: React.Dispatch<React.SetStateAction<string>>;
}

const ReviewNav = ({ isClickReviewNav, setIsClickReviewNav }: ReviewNavProps) => {
  return (
    <StyledReviewNav>
      <li
        key="review_date_desc"
        className={`${isClickReviewNav === 'date_desc' ? 'active' : ''}`}
        value={'date_desc'}
        onClick={() => setIsClickReviewNav('date_desc')}
      >
        최신순
      </li>
      <li
        key="review_rate_desc"
        className={`${isClickReviewNav === 'rate_desc' ? 'active' : ''}`}
        value={'rate_desc'}
        onClick={() => setIsClickReviewNav('rate_desc')}
      >
        별점순
      </li>
      {/* <li
        className={`${isClickReviewNav === 'like_desc' ? 'active' : ''}`}
        value={'like_desc'}
        onClick={() => setIsClickReviewNav('like_desc')}
      >
        좋아요순
      </li> */}
    </StyledReviewNav>
  );
};
export default ReviewNav;
