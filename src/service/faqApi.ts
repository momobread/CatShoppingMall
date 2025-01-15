import { FaqType } from '../types/faq';
import supabase from './supabase';

const fetchFaqApi = async () => {
  let { data: faq, error } = (await supabase.from('faq').select('*')) as { data: FaqType[]; error: any };
  if (error) throw new Error('faq가 존재하지 않습니다.');
  return faq;
};
export default fetchFaqApi;
