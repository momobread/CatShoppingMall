import { create } from 'zustand';

interface ModalStore {
  isModal: boolean;
  modalText: string;
  setIsModal: (value: boolean) => void;
  setText: (value: string) => void;
}

const ModalStore = create<ModalStore>((set) => ({
  isModal: false,
  modalText: '',
  setIsModal: (value) => {
    console.log('실행중');
    set({ isModal: value });
  },
  setText: (value) => {
    set({ modalText: value });
  },
}));

export default ModalStore;
