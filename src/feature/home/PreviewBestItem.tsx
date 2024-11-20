import styled from 'styled-components';
import ItemsList from '../../ui/ItmeList';
import ItemTitle from '../../ui/ItemTitle';

const StyledPreviewBestItem = styled.div`
  /* background-color: aquamarine; */
  display: grid;
  grid-template-rows: 5rem 1fr;
`;

const PreviewBestItem = () => {
  return (
    <StyledPreviewBestItem>
      <ItemTitle>BestItem</ItemTitle>
      <ItemsList />
    </StyledPreviewBestItem>
  );
};
export default PreviewBestItem;
