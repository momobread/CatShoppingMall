import styled from 'styled-components';
import DailyEvent from '../feature/Event/DailyEvent';
import RandomEvent from '../feature/Event/RandomEvent';

const StyledEvent = styled.div`
  display: grid;
  grid-template-rows: 70rem 1fr;
  justify-content: center;
`;

const Event = () => {
  //daily 이벤트는 하루에 한번만/ randomevnet는 한달에 한번만
  return (
    <StyledEvent>
      <DailyEvent />
      <RandomEvent />
    </StyledEvent>
  );
};
export default Event;
