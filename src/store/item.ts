import { create } from 'zustand';

interface ItemStore {
  //any[]에서 string[]으로 고침
  detailQeuryKey: string[];
  setDetailQueryKey: (value: any[]) => void;
}

const useItemStore = create<ItemStore>((set) => ({
  detailQeuryKey: [],
  setDetailQueryKey: (value) => {
    set({ detailQeuryKey: value });
  },
}));

export { useItemStore };
