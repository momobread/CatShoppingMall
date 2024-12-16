import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const GotoLogin = () => {
  const navigate = useNavigate();
  return <Button onClick={() => navigate('/member/login')}>로그인하기</Button>;
};
export default GotoLogin;
