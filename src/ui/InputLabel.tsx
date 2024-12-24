import React, { type ReactNode } from 'react';
import styled from 'styled-components';

interface InputLabelProps {
  children: ReactNode;
  title: string;
  error?: any;
}

const StyledInputLabel = styled.div`
  width: 40rem;
  height: fit-content;
  display: flex;
  align-items: center;
  text-align: center;

  #input_wrap {
    display: flex;
    align-items: center;
    label {
      display: inline-block;
      width: 11rem;
    }
    input {
      width: 30rem;
      height: 3.5rem;
    }
  }
  #error {
    color: red;
  }
  @media screen and (max-width: 600px) {
    width: 30rem;

    #input_wrap {
      gap: 1rem;
      label {
        width: 5rem;
      }
      input {
        width: 25rem;
      }
    }
  }
`;

const InputLabel = ({ children, title, error }: InputLabelProps) => {
  return (
    <StyledInputLabel>
      <div>
        <div id="input_wrap">
          {React.isValidElement(children) && <label htmlFor={children.props?.id}>{title}</label>}
          {children}
        </div>
        {error && <div id="error">{error}</div>}
      </div>
    </StyledInputLabel>
  );
};
export default InputLabel;
