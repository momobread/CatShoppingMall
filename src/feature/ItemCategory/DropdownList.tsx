import styled from 'styled-components';

const StyledDropDownList = styled.div`
  position: absolute;
  width: 33rem;
  height: 40rem;
  border: 1px solid black;
  top: 28rem;
  z-index: 3333;

  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    li {
      width: 100%;
      border-bottom: 1px solid black;
      height: 5rem;
      text-align: center;
    }
    li:hover {
      background-color: blueviolet;
    }
  }
`;

const DropdownList = () => {
  return (
    <StyledDropDownList>
      <ul>
        <li>사료</li>
        <li>간식</li>
        <li>장난감</li>
        <li>화장실</li>
        <li>기타</li>
      </ul>
    </StyledDropDownList>
  );
};
export default DropdownList;
