import { type ReactNode } from 'react';
import styled, { css } from 'styled-components';

const sizes = {
  fit: css`
    width: fit-content;
    height: 50px;
  `,
  small: css`
    padding: 12px 20px;
  `,
  medium: css`
    padding: 15px 40px;
  `,
  large: css`
    padding: 20px 50px;
  `,
};

const colors = {
  pink: css`
    background-color: var(--color-accent_pink);
  `,
  yellow: css``,

  mint: css``,
  white: css`
    background-color: #fff;
  `,
};

const Button: any = styled.button`
  border-radius: 7px;
  padding: 10px 15px;

  border: 1px solid var(--color-grey-400);
  ${(props: any) =>
    props.size === 'small'
      ? sizes['small']
      : props.size === 'medium'
        ? sizes['medium']
        : props.size === 'large'
          ? sizes['large']
          : sizes['fit']}
  ${(props: any) =>
    props.color === 'pink'
      ? colors['pink']
      : props.color === 'yellow'
        ? colors['yellow']
        : props.color === 'mint'
          ? colors['mint']
          : colors['white']}
`;
Button.defaultProps = {
  sizes: 'fit',
  colors: 'white',
};

export default Button;

// interface ButtonProps {
//   children: ReactNode;
//   size: string;
// }

// const Button = ({ children, size }: ButtonProps) => {
//   return <StyledButton size={size}>{children}</StyledButton>;
// };

// StyledButton.

// export default Button;
