import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FaqType } from '../../types/faq';
import { useState } from 'react';

const StyledFaqContents = styled.li`
  height: fit-content;
  width: 100%;
  /* padding: 1rem 2rem; */
  /* border: 1px solid var(--color-grey-400); */
  border-bottom: 1px solid var(--color-grey-300);
  display: flex;
  flex-direction: column;

  #faq_title {
    padding: 1rem;
    display: flex;
    align-items: center;
    margin: 1rem;
    span {
      font-size: 2rem;
      font-weight: 500;
    }
  }

  #faq_content {
    background-color: var(--color-grey-200);
    padding: 1rem 2rem;
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
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
        {!isClick ? (
          <KeyboardArrowDownIcon sx={{ fontSize: '3rem', color: 'var(--color-accent_blue)' }} />
        ) : (
          <KeyboardArrowUpIcon sx={{ fontSize: '3rem', color: 'var(--color-accent_blue4)' }} />
        )}
      </div>
      {isClick && <div id="faq_content">{faq_content}</div>}
    </StyledFaqContents>
  );
};
export default FaqContents;
