import { ItemType } from '../types/Item';
import supabase from './supabase';

const fetchNewItems = async (): Promise<ItemType[]> => {
  let { data: newItems, error } = (await supabase.from('newItems').select('*')) as {
    data: ItemType[] | null;
    error: any;
  };
  if (newItems === null) throw new Error(error);

  return newItems;
};

export { fetchNewItems };
