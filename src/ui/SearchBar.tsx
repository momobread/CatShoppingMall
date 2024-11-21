import styled from 'styled-components';

const StyledSearchBar = styled.div`
  input {
    width: 50rem;
    height: 35px;
  }
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <input type="text" placeholder="검색하고 싶은 상품을 입력하세요" />
    </StyledSearchBar>
  );
};
export default SearchBar;
