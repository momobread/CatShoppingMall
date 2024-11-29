import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledLoader = styled.div`
  height: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <PropagateLoader size={30} color="var(--color-accent_blue4)" speedMultiplier={0.8} />
    </StyledLoader>
  );
};
export default Loader;
