import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FaqType } from '../../types/faq';
import { useState } from 'react';

const StyledFaqContents = styled.li`
  box-shadow: var(--box-shadow_1);
  height: fit-content;
  width: 100%;
  margin-bottom: 0.5rem;
  /* padding: 1rem 2rem; */
  /* border: 1px solid var(--color-grey-400); */
  border-bottom: 1px solid var(--color-grey-300);
  display: flex;
  flex-direction: column;

  #faq_title {
    padding: 0.5rem 1rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    margin: 1rem;
  }

  #faq_text {
    font-size: 2rem;
    color: var(--color-grey-500);
  }
  #faq_content {
    background-color: var(--color-grey-200);
    padding: 1rem 2rem;
  }
  #faq_category {
    background-color: var(--color-accent_blue);
    padding: 0 0.5rem;
    border-radius: 0.7rem;
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
  @media screen and (max-width: 600px) {
    #faq_title {
      span {
        font-size: 1.5rem;
      }
    }
  }
`;

const FaqContents = ({ data }: { data: FaqType }) => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const { faq_title, faq_content, faq_category } = data;
  return (
    <StyledFaqContents onClick={() => setIsClick((v) => !v)}>
      <div id="faq_title">
        <span id="faq_category">{faq_category}</span>
        <span id="faq_text">{faq_title}</span>
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
