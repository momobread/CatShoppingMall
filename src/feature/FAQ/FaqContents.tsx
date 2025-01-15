import styled from 'styled-components';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useFaq from '../../hooks/useFaq';

const StyledFaqContents = styled.div`
  background-color: bisque;
  ul {
    display: flex;
    gap: 1rem;
    li {
      background-color: azure;
    }
  }
`;

const FaqContents = () => {
  const { data } = useFaq();
  console.log(data);
  return (
    <StyledFaqContents>
      <ul>
        <li>
          <button>
            <span>서비스</span>
            <span>서비스를 이용 도중에 자꾸 에러가 떠요.</span>
            <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
          </button>
        </li>
        <li>
          <button>
            <span>서비스</span>
            <span></span>
            <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
          </button>
        </li>
        <li>
          <button>
            <span>주문/결제</span>
            <span></span>
            <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
          </button>
        </li>
        <li>
          <button>
            <span>교환/취소(반품)</span>
            <span></span>
            <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
          </button>
        </li>
        <li>
          <button>
            <span>기타</span>
            <span></span>
            <KeyboardArrowDownIcon sx={{ fontSize: '3rem' }} />
          </button>
        </li>
      </ul>
    </StyledFaqContents>
  );
};
export default FaqContents;
