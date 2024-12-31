import { create } from 'zustand';
import { CategoryType } from '../types/Item';

interface ItemStore {
  //any[]에서 string[]으로 고침
  detailQeuryKey: CategoryType[];
  setDetailQueryKey: (value: CategoryType[]) => void;
}

const useItemStore = create<ItemStore>((set) => ({
  detailQeuryKey: [],
  setDetailQueryKey: (value) => {
    set({ detailQeuryKey: value });
  },
}));

export { useItemStore };
