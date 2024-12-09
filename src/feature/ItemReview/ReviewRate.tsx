import styled from 'styled-components';

const StyledReviewRate = styled.div`
  border-bottom: 1xp solid var(--color-grey-300);
  #review_title {
    font-size: 3rem;
    font-weight: 500;
    height: 5rem;
  }

  #review_preview {
    display: grid;
    border-top: 1px solid var(--color-grey-300);
    border-bottom: 1px solid var(--color-grey-300);
    grid-template-columns: 55rem 1fr;
    grid-template-rows: 35rem;
    div {
      background-color: azure;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 3rem;
      font-weight: 500;
      border-right: 1px solid var(--color-grey-300);
    }
  }
`;

const ReviewRate = () => {
  return (
    <StyledReviewRate>
      <div id="review_title">
        <span>Real 후기</span>
      </div>
      <div id="review_preview">
        <div>
          <span>총 별점</span>
          <span>⭐️⭐️⭐️⭐️</span>
        </div>
        <ul>
          <li>
            <span>아주 만족해요</span>
            <span></span>
            <span>X%</span>
          </li>
          <li>
            <span>아주 만족해요</span>
            <span></span>
            <span>X%</span>
          </li>
          <li>
            <span>아주 만족해요</span>
            <span></span>
            <span>X%</span>
          </li>
          <li>
            <span>아주 만족해요</span>
            <span></span>
            <span>X%</span>
          </li>
          <li>
            <span>아주 만족해요</span>
            <span></span>
            <span>X%</span>
          </li>
        </ul>
      </div>
    </StyledReviewRate>
  );
};
export default ReviewRate;
