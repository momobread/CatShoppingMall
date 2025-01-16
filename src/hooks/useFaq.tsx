import { useQuery } from '@tanstack/react-query';
import fetchFaqApi from '../service/faqApi';
import { useSearchParams } from 'react-router-dom';
import { FaqType } from '../types/faq';

const useFaq = () => {
  const { data, isLoading } = useQuery<FaqType[], Error>({
    queryKey: ['faq'],
    queryFn: () => fetchFaqApi(),
    staleTime: 1000 * 60 * 60 * 12,
  });
  return { data, isLoading };
};
export default useFaq;
