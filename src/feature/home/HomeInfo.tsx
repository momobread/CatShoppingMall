import styled from 'styled-components';
import ItemTitle from '../../components/ItemTitle';
import InfoContent from './InfoContent';

const StyledHomeInfo = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  grid-template-columns: 1fr;
  justify-content: center;
  /* align-items: center; */

  @media screen and (max-width: 600px) {
  }
`;

const HomeInfo = () => {
  return (
    <StyledHomeInfo>
      <ItemTitle>Cat Information</ItemTitle>
      {/* <div id="info_wrap"> */}
      <InfoContent />
      {/* </div> */}
    </StyledHomeInfo>
  );
};
export default HomeInfo;
