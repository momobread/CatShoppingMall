import supabase from './supabase';

const test = async () => {
  const {} = await supabase
    .from('Items')
    .insert([
      { item_title: 'test', item_content: 'test', item_price: 23333, item_new: true },
      { item_title: 'test', item_content: 'test', item_price: 133, item_new: true },
      { item_title: 'test', item_content: 'test', item_price: 33, item_new: true },
    ])
    .select();
};
export default test;
