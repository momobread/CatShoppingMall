import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  /* background-color: var(--color-grey-100); */
  /* border: 1px solid var(--color-grey-400); */
`;

interface MainProps {
  children: ReactNode;
}
const Main = ({ children }: MainProps) => {
  return <StyledMain>{children}</StyledMain>;
};
export default Main;
