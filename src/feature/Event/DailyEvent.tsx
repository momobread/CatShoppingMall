import styled from 'styled-components';
import useUserStore from '../../store/user';
import useEvent from '../../hooks/useEvent';
import PetsIcon from '@mui/icons-material/Pets';
import Activemodal from '../../utils/ActiveModal';
import { useQueryClient } from '@tanstack/react-query';
import { UserType } from '../../types/login';

const StyledDailyEvent = styled.div`
  /* background-color: azure; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-self: center;
  width: 92rem;
  padding: 1rem;
  gap: 2rem;
  li {
    width: 12rem;
    height: 12rem;
    background-color: var(--color-accent_blue6);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-size: 2rem;
      font-weight: 600;
      color: var(--color-accent_purple);
    }
  }
  #daily_title {
    font-size: 5rem;
    font-weight: 700;
  }
  #daily_event_t {
    display: flex;
    flex-wrap: wrap;
    width: 90rem;
    gap: 1rem;
    justify-content: center;
    align-items: center;
  }
  #complete_dailyCheck {
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 10rem;
      height: 10rem;
      background-color: var(--color-accent_blue5);
      border-radius: 5rem;
    }
  }
  #daily_content {
    text-align: center;
    font-size: 2rem;
    font-weight: 500;
    span {
      color: var(--color-accent_pink);
    }
  }
`;

const DailyEvent = () => {
  const dailyCheck = useEvent();
  const queryClient = useQueryClient();

  let { user_dailyCheck, user_uuid } = useUserStore();

  if (user_uuid === null) user_dailyCheck = Array.from({ length: 28 }, (_, i) => (i < 4 ? true : false));
  const stampPosition = user_dailyCheck.indexOf(false);

  const handleClickDaily = () => {
    if (user_uuid === null) return Activemodal('로그인하여주세요~');
    const alreadyDailyChecked = queryClient.getQueryData<UserType[]>(['user'])?.[0]?.user_isChecked_daily;
    if (alreadyDailyChecked) return Activemodal('오늘은 이미 출석체크를 하였습니다.자정이 지난후 시도하세요');

    dailyCheck({ user_dailyCheck, stampPosition, user_uuid });
  };

  return (
    <StyledDailyEvent>
      <div id="daily_title">✨데일리 체크✨</div>
      <div id="daily_content">
        <div>매일 출석체크하고 혜택받자</div>
        <div>
          <span>step1.</span> 날마다 출석체크 하면 40p를 받아요
        </div>
        <div>
          <span>step2.</span> 7일 출석체크마다 보너스 포인트를 지급 받아요{' '}
        </div>
      </div>
      <ul id="daily_event_t">
        {user_dailyCheck.map((value, i) =>
          value ? (
            <li id="complete_dailyCheck">
              <span>
                <PetsIcon sx={{ fontSize: '5rem', color: '#fff' }} />
              </span>
            </li>
          ) : i === stampPosition ? (
            <li onClick={() => handleClickDaily()}>
              <span>Click me!</span>
            </li>
          ) : (
            <li></li>
          )
        )}
      </ul>
    </StyledDailyEvent>
  );
};

export default DailyEvent;
