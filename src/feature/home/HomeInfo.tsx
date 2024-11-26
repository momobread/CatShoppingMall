import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import InfoContent from './InfoContent';

const StyledHomeInfo = styled.div`
  display: grid;
  width: 100dvw;
  grid-template-rows: 6rem 65rem;
  justify-content: center;
  div {
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HomeInfo = () => {
  return (
    <StyledHomeInfo>
      <ItemTitle>Cat Information</ItemTitle>
      <div id="info_wrap">
        <InfoContent />
      </div>
    </StyledHomeInfo>
  );
};
export default HomeInfo;
