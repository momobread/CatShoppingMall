import styled from 'styled-components';
import DownloadIcon from '@mui/icons-material/Download';
import { CouponType } from './RandomCoupon';
const StyledEventCoupon = styled.div`
  display: grid;
  grid-template-columns: 35rem 5rem;
  height: 20rem;
  width: 40rem;
  border: 1px solid black;
  #coupon_content {
    width: 35rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #coupon_label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5rem;
    border-left: 2px dashed black;
  }
`;

interface EventCouponProps {
  coupon: CouponType;
}
const EventCoupon = ({ coupon }: EventCouponProps) => {
  const { title, value } = coupon;
  return (
    <StyledEventCoupon>
      <div id="coupon_content">
        <span>{title}</span>
        <span>{value}</span>
      </div>
      <div id="coupon_label">
        <DownloadIcon sx={{ fontSize: '3rem', color: 'blue' }} />
      </div>
    </StyledEventCoupon>
  );
};
export default EventCoupon;
