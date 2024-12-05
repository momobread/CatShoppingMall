import { create } from 'zustand';

interface ModalStore {
  isModal: boolean;
  setIsModal: () => void;
  setIsModalClose: () => void;
}

const ModalStore = create<ModalStore>((set) => ({
  isModal: false,
  setIsModal: () => {
    set({ isModal: true });
  },
  setIsModalClose: () => {
    set({ isModal: false });
  },
}));

export default ModalStore;
