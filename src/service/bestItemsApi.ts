import { ItemType } from '../types/Item';
import supabase from './supabase';

const fetchBestItems = async (): Promise<ItemType[]> => {
  let { data: bestItems, error } = (await supabase.from('bestItems').select('*')) as {
    data: ItemType[] | null;
    error: any;
  };
  if (bestItems === null) return error;

  return bestItems;
};

export { fetchBestItems };
