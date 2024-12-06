import { create } from 'zustand';

interface ItemStore {
  detailQeuryKey: any[];
  setDetailQueryKey: (value: any[]) => void;
}

const useItemStore = create<ItemStore>((set) => ({
  detailQeuryKey: [],
  setDetailQueryKey: (value) => {
    set({ detailQeuryKey: value });
  },
}));

export { useItemStore };
