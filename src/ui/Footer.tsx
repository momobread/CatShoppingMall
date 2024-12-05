import styled from 'styled-components';

const StyledFooter = styled.footer`
  padding: 5rem 2rem;
  width: 100vw;
  background-color: var(--color-accent_blue2);
  display: grid;
  grid-template-rows: 4rem 4rem 4rem 4rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <span> 법인명(상호) : 주식회사 시은캣 대표자(성명) : 박시은 사업자 등록번호 : 999-99-99999</span>
      </p>
      <p>
        <span>통신판매업 신고 : 2023-대구-0819 전화 : 1999-0819 팩스 : 010-5851-9049</span>
      </p>
      <p>
        <span>주소 : 99999 전라북도 익산시 신동 원광대학교 프라임관 2층 랩실</span>
      </p>
      <p>
        <span>COPYRIGHT &copy; 2023시은캣. ALL RIGHT RESERVED.</span>
      </p>
    </StyledFooter>
  );
};
export default Footer;
