import styled from 'styled-components';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Button from '../../ui/Button';
import React from 'react';

const StyledDropDownList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: var(--color-accent_blue6);
  width: 25rem;
  height: fit-content;
  align-items: center;

  z-index: 3333;
  top: 5rem;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    li {
      line-height: 5rem;
      font-size: 2rem;
      font-weight: 500;
      width: 100%;
      /* border-bottom: 1px solid black; */
      height: 5rem;
      text-align: center;
    }
    li:hover {
      color: var(--color-accent_blue6);
    }
  }
  button {
    width: 20%;
    background: none;
    border: none;
    font-size: 2rem;
  }
  @media screen and (max-width: 600px) {
    display: none;
    width: 100vw;
    right: 0;
  }
`;
interface DropdownListProps {
  setActiveDropList: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownList = ({ setActiveDropList }: DropdownListProps) => {
  return (
    <StyledDropDownList>
      <ul>
        <li>사료</li>
        <li>간식</li>
        <li>장난감</li>
        <li>화장실</li>
        <li>기타</li>
      </ul>
      <Button onClick={() => setActiveDropList(false)}>
        <KeyboardArrowUpIcon sx={{ fontSize: '3rem' }} />
      </Button>
    </StyledDropDownList>
  );
};
export default DropdownList;
