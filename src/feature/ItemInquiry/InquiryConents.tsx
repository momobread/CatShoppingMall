import styled from 'styled-components';
import Inquiry from './Inquiry';
import Button from '../../ui/Button';

const StyledInquiryConents = styled.div`
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ul {
    width: 60%;
    display: flex;
    flex-direction: column;
  }
`;

const InquiryConents = () => {
  const fkd = [1, 2, 3, 4, 5, 6];
  return (
    <StyledInquiryConents>
      <ul>
        {fkd.map((_) => (
          <Inquiry />
        ))}
      </ul>
      <Button>문의하기</Button>
    </StyledInquiryConents>
  );
};
export default InquiryConents;
