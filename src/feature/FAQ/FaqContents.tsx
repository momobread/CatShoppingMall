import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { FaqType } from '../../types/faq';
import { useState } from 'react';

const StyledFaqContents = styled.li`
  height: fit-content;
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid var(--color-grey-400);
  display: flex;
  flex-direction: column;

  #faq_title {
    display: flex;
    align-items: center;
    margin: 1rem;
    background-color: beige;
  }
  #faq_content {
    margin: 1rem;
    background-color: darkkhaki;
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      background-color: azure;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const FaqContents = ({ data }: { data: FaqType }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const { faq_title, faq_content } = data;
  return (
    <StyledFaqContents onClick={() => setIsClick((v) => !v)}>
      <div id="faq_title">
        <span>{faq_title}</span>
        <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
      </div>
      {isClick && <div id="faq_content">{faq_content}</div>}
    </StyledFaqContents>
  );
};
export default FaqContents;
