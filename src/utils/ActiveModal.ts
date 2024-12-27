import ModalStore from '../store/modal';

const Activemodal = (text: string) => {
  ModalStore.setState({ modalText: text, isModal: true });
};
export default Activemodal;
