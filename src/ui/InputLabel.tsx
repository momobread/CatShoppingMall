import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface InputLabelProps {
  children: ReactNode;
  title: string;
}

const StyledInputLabel = styled.div`
  width: 40rem;
  background-color: antiquewhite;
`;

const InputLabel = ({ children, title }: InputLabelProps) => {
  return (
    <StyledInputLabel>
      {React.isValidElement(children) && <label htmlFor={children.props?.id}>{title}</label>}
      {children}
    </StyledInputLabel>
  );
};
export default InputLabel;
