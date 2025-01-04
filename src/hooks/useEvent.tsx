import { useMutation, useQueryClient } from '@tanstack/react-query';
import eventApi from '../service/eventApi';
import Activemodal from '../utils/ActiveModal';
import { dailyCheckParams } from '../types/event';

const useEvent = () => {
  // const { user_uuid } = useUserStore();

  const queryClient = useQueryClient();
  const { mutate: dailyCheck } = useMutation<void, Error, dailyCheckParams>({
    mutationFn: ({ user_dailyCheck, stampPosition, user_uuid }) =>
      eventApi({ user_dailyCheck, stampPosition, user_uuid }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
    onError: () => {
      Activemodal('출석 이벤트 실패! 관리자에게 문의하세요');
    },
  });

  return dailyCheck;
};
export default useEvent;
