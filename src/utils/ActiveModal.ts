import ModalStore from '../store/modal';

const Activemodal = (text: string) => {
  // const { setIsModal, setText } = ModalStore();
  // setText(text);
  console.log(text);

  // setIsModal(true);
  ModalStore.setState({ modalText: text, isModal: true });
};
export default Activemodal;
