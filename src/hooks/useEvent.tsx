import { useMutation, useQueryClient } from '@tanstack/react-query';
import Activemodal from '../utils/ActiveModal';
import { dailyCheckParams, randomCheckParams } from '../types/event';
import { dailyEventApi, randomEventApi } from '../service/eventApi';

const useDailyEvent = () => {
  const queryClient = useQueryClient();
  const { mutate: dailyCheck } = useMutation<number, Error, dailyCheckParams>({
    mutationFn: (value) => dailyEventApi(value),
    onSuccess: (bonusPoint) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      if (bonusPoint === 100) Activemodal('출석체크가 완료되어 100P가 적립되었습니다');
      else if (bonusPoint === 200) Activemodal('출석체크가 완료되어 200P가 적립되었습니다');
      else if (bonusPoint === 500) Activemodal('출석체크가 완료되어 500P가 적립되었습니다');
      else if (bonusPoint === 1000) Activemodal('한달 출석체크가 완료되어 1000p가 적립되었습니다');
      else {
        Activemodal('출석체크가 완료되어 40P가 적립되었습니다');
      }
    },
    onError: () => {
      Activemodal('출석 이벤트 실패! 관리자에게 문의하세요');
    },
  });

  return dailyCheck;
};

const useRandomEvent = () => {
  const queryClient = useQueryClient();
  const { mutate: RandomCheck } = useMutation<void, Error, randomCheckParams>({
    mutationFn: (v) => randomEventApi(v),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      Activemodal('랜덤쿠폰 발급에 성공하였습니다.마이페이지의 쿠폰함을 확인하여 주세요');
    },
    onError: () => {
      Activemodal('랜덤쿠폰 발급에 실패하였습니다.관리자에게 문의하세요');
    },
  });
  return RandomCheck;
};

export { useDailyEvent, useRandomEvent };
