import { useEffect } from 'react';
import styled from 'styled-components';

const StyledAdPosition = styled.div`
  max-width: 17rem;
  height: 2rem;
  /* background-color: antiquewhite; */
  div {
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    button {
      width: 1rem;
      height: 1rem;
      border-radius: 0.5rem;
      border: none;
      cursor: auto;
    }
  }
`;
interface AdPositionProps {
  slidePositionIndex: number;
}

const AdPosition = ({ slidePositionIndex }: AdPositionProps) => {
  useEffect(() => {
    // console.log(slidePositionIndex);
  }, [slidePositionIndex]); // 0 1 2 3
  return (
    <StyledAdPosition id="ad_position">
      <div>
        <button disabled={true} style={{ background: `${slidePositionIndex === 0 ? 'black' : ''}` }}></button>
        <button disabled={true} style={{ background: `${slidePositionIndex === 1 ? 'black' : ''}` }}></button>
        <button disabled={true} style={{ background: `${slidePositionIndex === 2 ? 'black' : ''}` }}></button>
        <button disabled={true} style={{ background: `${slidePositionIndex === 3 ? 'black' : ''}` }}></button>
      </div>
    </StyledAdPosition>
  );
};
export default AdPosition;
