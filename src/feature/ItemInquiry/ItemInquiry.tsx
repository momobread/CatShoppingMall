import styled from 'styled-components';
import InquiryConents from './InquiryConents';

const StyledItemInquiry = styled.div`
  display: grid;
  grid-template-rows: 5rem 1fr;
  #inquiry_title {
    border-bottom: 1px solid var(--color-grey-400);
  }
`;

const ItemInquiry = () => {
  return (
    <StyledItemInquiry>
      <div id="inquiry_title">
        상품문의 <span>x개</span>
      </div>
      {/* <InquiryConents /> */}
    </StyledItemInquiry>
  );
};
export default ItemInquiry;
