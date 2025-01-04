import { create } from 'zustand';

type MetaData = { nickname: string | null };

interface useUser {
  isLogined: boolean;
  user_uuid: string | null;
  user_metaData: MetaData;
  user_dailyCheck: boolean[];
  setIsLogined: (v: boolean) => void;
  setUser_uuid: (v: null | string) => void;
  setUser_metaData: (v: MetaData) => void;
  setUser_dailyCheck: (v: boolean[]) => void;
}

const useUserStore = create<useUser>((set) => ({
  isLogined: false,
  user_uuid: null,
  user_dailyCheck: [],
  user_metaData: { nickname: null },
  setIsLogined: (v: boolean) => {
    set({ isLogined: v });
  },
  setUser_uuid: (v: null | string) => {
    set({ user_uuid: v });
  },
  setUser_metaData: (v: MetaData) => {
    set({ user_metaData: v });
  },
  setUser_dailyCheck: (v: boolean[]) => {
    set({ user_dailyCheck: v });
  },
}));

export default useUserStore;
