import styled from 'styled-components';
import ModalStore from '../store/modal';
import Button from '../ui/Button';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 0.7rem;
  position: absolute;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  gap: 1rem;
  div {
    font-size: 2rem;
    font-weight: 500;
  }
  button {
    color: #fff;
  }
`;
const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  /* backdrop-filter: blur(4px); */
  position: fixed; //모달 창 고정의 중요한 역할
  z-index: 1000;
`;

const Modal = () => {
  const { setIsModal, modalText } = ModalStore();

  return (
    <Overlay>
      <StyledModal>
        <CheckCircleIcon sx={{ fontSize: '5rem', color: '#9BEC00' }} />
        <div>{modalText}</div>
        <Button color="blue" size="medium" onClick={() => setIsModal(false)}>
          확인
        </Button>
      </StyledModal>
    </Overlay>
  );
};
export default Modal;
