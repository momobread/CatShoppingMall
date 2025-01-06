import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import { CouponType } from '../../data/RandomCoupon';
import Activemodal from '../../utils/ActiveModal';
const StyledEventCoupon = styled.div`
  display: grid;
  grid-template-columns: 35rem 5rem;
  height: 20rem;
  width: 40rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  #coupon_content {
    width: 35rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    background-color: #b1f0f7;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  #coupon_label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    border-left: 2px dashed var(--color-accent_blue5);
  }
  @media screen and (max-width: 600px) {
    width: 30rem;
    grid-template-columns: 25rem 5rem;
    #coupon_content {
      width: 25rem;
    }
  }
`;

interface EventCouponProps {
  coupon: CouponType;
  isLogined: boolean;
}
const EventCoupon = ({ coupon, isLogined }: EventCouponProps) => {
  const { title, value } = coupon;
  return (
    <StyledEventCoupon>
      <div id="coupon_content">
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <div id="coupon_label" onClick={() => (!isLogined ? Activemodal('로그인하여 주세요') : '')}>
        <DownloadIcon sx={{ fontSize: '3rem', color: ' var(--color-accent_blue3)' }} />
      </div>
    </StyledEventCoupon>
  );
};
export default EventCoupon;
