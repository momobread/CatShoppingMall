import { PropagateLoader } from 'react-spinners';
import styled from 'styled-components';

const StyledLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  padding: 1rem;
`;

const Loader = () => {
  return (
    <StyledLoader>
      <PropagateLoader size={20} color="var(--color-accent_pink)" speedMultiplier={0.8} />
    </StyledLoader>
  );
};
export default Loader;
