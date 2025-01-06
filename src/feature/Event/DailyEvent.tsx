import styled from 'styled-components';
import useUserStore from '../../store/user';
import PetsIcon from '@mui/icons-material/Pets';
import Activemodal from '../../utils/ActiveModal';
import { useQueryClient } from '@tanstack/react-query';
import { UserType } from '../../types/login';
import { useDailyEvent } from '../../hooks/useEvent';

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
      text-align: center;
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
  #daily_bonus {
    font-size: 2rem;
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
    width: 95%;
    #daily_event_t {
      width: 100%;
    }
    li {
      width: 11%;
      height: 5rem;
      span {
        font-size: 1rem;
      }
    }
    #complete_dailyCheck {
      span {
        svg {
          font-size: 2rem;
        }
        height: 3rem;
        width: 3rem;
      }
    }
    #daily_bonus {
      font-size: 1rem;
    }
  }
`;

const DailyEvent = () => {
  let { user_dailyCheck, user_uuid, user_metaData } = useUserStore();
  if (user_uuid === null) user_dailyCheck = Array.from({ length: 28 }, (_, i) => (i < 4 ? true : false));

  const dailyCheck = useDailyEvent();
  const queryClient = useQueryClient();
  const stampPosition = user_dailyCheck.indexOf(false);

  const handleClickDaily = (CheckedIndex: number) => {
    if (user_uuid === null) return Activemodal('로그인하여주세요~');
    const alreadyDailyChecked = queryClient.getQueryData<UserType[]>(['user'])?.[0].user_isChecked_daily;
    if (alreadyDailyChecked) return Activemodal('오늘은 이미 출석체크를 하였습니다.자정이 지난후 시도하세요');
    dailyCheck({ user_dailyCheck, stampPosition, user_uuid, CheckedIndex, user_point: user_metaData.userPoint });
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
            <li id="complete_dailyCheck" key={i}>
              <span>
                <PetsIcon sx={{ fontSize: '5rem', color: '#fff' }} />
              </span>
            </li>
          ) : i === stampPosition ? (
            <li key={i} onClick={() => handleClickDaily(i)}>
              <span>Click me!</span>
            </li>
          ) : (i + 1) / 7 === 1 ? ( // 6 13 20
            <li key={i} id="daily_bonus">
              +100p
            </li>
          ) : (i + 1) / 7 === 2 ? (
            <li key={i} id="daily_bonus">
              +200p
            </li>
          ) : (i + 1) / 7 === 3 ? (
            <li key={i} id="daily_bonus">
              +500p
            </li>
          ) : (i + 1) / 7 === 4 ? (
            <li key={i} id="daily_bonus">
              +1000p
            </li>
          ) : (
            <li key={i}></li>
          )
        )}
      </ul>
    </StyledDailyEvent>
  );
};

export default DailyEvent;
