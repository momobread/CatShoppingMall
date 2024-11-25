import styled from 'styled-components';

const StyledSearchBar = styled.div`
  input {
    width: 50rem;
    height: 3.5rem;
    padding: 0.5rem;
  }
  @media screen and (max-width: 600px) {
    input {
      max-width: 32rem;
      height: 4rem;
      font-size: 1.5rem;
    }
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
