import { useQuery } from '@tanstack/react-query';
import fetchFaqApi from '../service/faqApi';

const useFaq = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['faq'],
    queryFn: () => fetchFaqApi(),
    staleTime: 1000 * 60 * 60 * 12,
  });
  return { data, isLoading };
};
export default useFaq;
