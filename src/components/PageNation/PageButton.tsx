import Button from '../../ui/Button';
import { NavigateNextOutlined, NavigateBeforeOutlined } from '@mui/icons-material';
const PageButton = () => {
  return (
    <>
      <Button>
        <NavigateBeforeOutlined fontSize="large" />
      </Button>
      <span>1</span>
      <span>/</span>
      <span>10</span>
      <Button>
        <NavigateNextOutlined fontSize="large" />
      </Button>
    </>
  );
};
export default PageButton;
