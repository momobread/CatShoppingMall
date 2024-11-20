import styled from 'styled-components';

const StyledLogo = styled.div`
  width: 60px;
  height: 60px;
  img {
    width: inherit;
    height: inherit;
    border-radius: 30px;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <img src="../../public/momoLogo.jpg" alt="momoLogo" />
    </StyledLogo>
  );
};
export default Logo;
