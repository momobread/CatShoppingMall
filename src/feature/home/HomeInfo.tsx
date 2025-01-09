import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import InfoContent from './InfoContent';

const StyledHomeInfo = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  justify-content: center;

  @media screen and (max-width: 600px) {
  }
`;

const HomeInfo = () => {
  return (
    <StyledHomeInfo>
      <ItemTitle>Cat Information</ItemTitle>
      <InfoContent />
    </StyledHomeInfo>
  );
};
export default HomeInfo;
