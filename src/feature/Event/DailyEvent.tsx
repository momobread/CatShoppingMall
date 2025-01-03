import styled from 'styled-components';

const StyledDailyEvent = styled.div`
  background-color: azure;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 85rem;
  padding: 1rem;
  gap: 2rem;
  li {
    width: 10rem;
    height: 10rem;
    background-color: var(--color-accent_blue6);
    border-radius: 5rem;
  }
  #daily_event_t {
    display: flex;
    flex-wrap: wrap;
    width: 85rem;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`;

const DailyEvent = () => {
  //indexof로 false의 첫번째 위치를 받아와서 stampPosition에 넣자

  const stampPosition = 3;
  const test = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  return (
    <StyledDailyEvent>
      <div>28일 이벤트~</div>
      <ul id="daily_event_t">
        {test.map((value, i) =>
          value ? (
            <li style={{ background: ' #fff ' }}>완료</li>
          ) : i === stampPosition ? (
            <li>클릭하여주세요</li>
          ) : (
            <li></li>
          )
        )}
      </ul>
    </StyledDailyEvent>
  );
};

export default DailyEvent;
