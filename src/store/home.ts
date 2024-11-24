import { create } from 'zustand';

interface HomeStore {
  slideBestIndex: number;
  slideNewIndex: number;
  maxBestSlide: number;
  maxNewSlide: number;
  setSlideBestIndexUp: () => void;
  setSlideBestIndexDown: () => void;
  setSlideNewIndexUp: () => void;
  setSlideNewIndexDown: () => void;
  setMaxBestSlide: (value: number) => void;
  setMaxNewSlide: (value: number) => void;
}
const useHomeStore = create<HomeStore>((set) => ({
  slideBestIndex: 0,
  slideNewIndex: 0,
  maxBestSlide: 0,
  maxNewSlide: 0,
  setMaxNewSlide: (value) => {
    set({ maxNewSlide: value });
  },
  setMaxBestSlide: (value) => {
    set({ maxBestSlide: value });
  },
  setSlideBestIndexUp: () => {
    set((state) => ({ slideBestIndex: state.slideBestIndex + 1 }));
  },
  setSlideBestIndexDown: () => {
    set((state) => ({ slideBestIndex: state.slideBestIndex - 1 }));
  },
  setSlideNewIndexUp: () => {
    set((state) => ({ slideNewIndex: state.slideNewIndex + 1 }));
  },
  setSlideNewIndexDown: () => {
    set((state) => ({ slideNewIndex: state.slideNewIndex - 1 }));
  },
}));

export default useHomeStore;
