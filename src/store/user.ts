import { create } from 'zustand';

interface useUser {
  isLogined: boolean;
  user_uuid: string | null;
  setIsLogined: (v: boolean) => void;
  setUser_uuid: (v: null | string) => void;
}

const useUserStore = create<useUser>((set) => ({
  isLogined: false,
  user_uuid: null,
  setIsLogined: (v: boolean) => {
    set({ isLogined: v });
  },
  setUser_uuid: (v: null | string) => {
    set({ user_uuid: v });
  },
}));

export default useUserStore;
