import styled from 'styled-components';
import ModalStore from '../store/modal';

const StyledModal = styled.div`
  width: 46rem;
  background-color: var(--color-accent_blue2);
  height: 25rem;
  display: inline-block;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
`;
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  /* backdrop-filter: blur(4px); */
  position: fixed; //모달 창 고정의 중요한 역할
  z-index: 1000;
`;

const Modal = () => {
  const { setIsModal, modalText } = ModalStore();
  return (
    <Overlay>
      <StyledModal>
        {modalText}
        <button onClick={() => setIsModal(false)}>닫기</button>
      </StyledModal>
    </Overlay>
  );
};
export default Modal;
