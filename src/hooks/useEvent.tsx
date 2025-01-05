import { useMutation, useQueryClient } from '@tanstack/react-query';
import eventApi from '../service/eventApi';
import Activemodal from '../utils/ActiveModal';
import { dailyCheckParams } from '../types/event';

const useEvent = () => {
  // const { user_uuid } = useUserStore();

  const queryClient = useQueryClient();
  const { mutate: dailyCheck } = useMutation<number, Error, dailyCheckParams>({
    mutationFn: (value) => eventApi(value),
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
export default useEvent;
