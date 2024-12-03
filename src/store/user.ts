import { create } from 'zustand';

interface useUser {
  isLogined: boolean;
  setIsLogined: (v: boolean) => void;
}

const useUserStore = create<useUser>((set) => ({
  isLogined: false,
  setIsLogined: (v: boolean) => {
    set({ isLogined: v });
  },
}));

export default useUserStore;
