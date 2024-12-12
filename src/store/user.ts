import { create } from 'zustand';

interface useUser {
  isLogined: boolean;
  user_uuid: string;
  setIsLogined: (v: boolean) => void;
  setUser_uuid: (v: string) => void;
}

const useUserStore = create<useUser>((set) => ({
  isLogined: false,
  user_uuid: '',
  setIsLogined: (v: boolean) => {
    set({ isLogined: v });
  },
  setUser_uuid: (v: string) => {
    set({ user_uuid: v });
  },
}));

export default useUserStore;
