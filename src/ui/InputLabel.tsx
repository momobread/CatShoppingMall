import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface InputLabelProps {
  children: ReactNode;
  title: string;
}

const StyledInputLabel = styled.div`
  width: 40rem;
  height: 5rem;
  display: flex;
  align-items: center;
  text-align: center;
  label {
    display: inline-block;
    width: 10rem;
  }
  input {
    width: 30rem;
    height: 3.5rem;
  }
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
