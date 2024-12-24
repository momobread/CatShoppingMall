import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  height: fit-content;
`;

interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
