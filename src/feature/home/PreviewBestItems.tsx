import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import ItemsContents from '../../components/ItemContents';

const StyledPreviewItems = styled.div`
  /* background-color: aquamarine; */
  display: grid;
  grid-template-rows: 6rem 1fr;
  @media screen and (max-width: 600px) {
    height: fit-content;
  }
`;

const PreviewItems = ({ title, render }) => {
  return (
    <StyledPreviewItems>
      <ItemTitle>{title}</ItemTitle>
      <ItemsContents render={render} />
    </StyledPreviewItems>
  );
};
export default PreviewItems;
