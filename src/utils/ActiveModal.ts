import ModalStore from '../store/modal';

const activemodal = (text: string) => {
  // const { setIsModal, setText } = ModalStore();
  // setText(text);

  // setIsModal(true);
  ModalStore.setState({ modalText: text, isModal: true });
};
export default activemodal;