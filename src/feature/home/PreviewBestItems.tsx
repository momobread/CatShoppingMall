import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import ItemsContents from '../../components/ItemContents';

const StyledPreviewItems = styled.div`
  /* background-color: aquamarine; */
  display: grid;
  grid-template-rows: 6rem 1fr;
`;

const PreviewItems = ({ title }) => {
  return (
    <StyledPreviewItems>
      <ItemTitle>{title}</ItemTitle>
      <ItemsContents render={''} />
    </StyledPreviewItems>
  );
};
export default PreviewItems;
