import { Controller, useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';

interface CustomDatePickerProps {
  control: any;
}

const StyledDatePicker = styled.div`
  .react-datepicker__month-container {
    width: 30rem;
    height: 25rem;
    font-size: 2rem;
  }
  .react-datepicker__header {
    height: 30%;

    background-color: #ffffff;
  }
  .react-datepicker__current-month {
    height: 40%;
    font-size: 1.8rem;
    color: var(--color-accent_blue4);
  }
  .react-datepicker__month {
    padding: 0.5rem;
    margin: 0;
    height: 70%;
    background-color: var(--color-accent_blue2);
  }
  .react-datepicker__day-names {
    width: 100%;
    div {
      width: 10%;
    }
  }

  .react-datepicker__week {
    height: 15%;
    width: 100%;
    div {
      width: 10%;
    }
  }
`;
const CustomDatePicker = ({ control }: CustomDatePickerProps) => {
  return (
    <StyledDatePicker>
      <label htmlFor="birth">생년월일</label>
      <Controller
        name="user_birth"
        control={control}
        render={({ field }) => (
          <DatePicker
            dateFormat={'yyyy/MM/dd'}
            id="user_birth"
            onChange={(date) => {
              field.onChange(date);
            }}
            selected={field.value}
          />
        )}
      />
    </StyledDatePicker>
  );
};
export default CustomDatePicker;
