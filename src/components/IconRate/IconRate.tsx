import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { useState } from 'react';
const StyledStarRate = styled.div`
  ul:hover {
    cursor: pointer;
  }
  ul {
    display: flex;
    background-color: beige;
  }
`;

const IconRate = () => {
  const rateLength = 5;
  const rateArray = Array.from({ length: rateLength }, (_, i) => {
    return i;
  });

  const [iconIndex, setIconIndex] = useState<number>(0);
  // const [iconCurrenPostion, setIconCurrentPostion];
  console.log(iconIndex);
  // map을 사용해서 icon을 순차적으로 그릴때 현재 마우스가 들어온 인덱스보다 작으면 별 크면 빈별
  // 반대로 마우스가 나간 인덱스는 다시 빈별 .
  // 다만 마우스가  테두리를  나갈때는  벗어난 곳의 인덱스,위치가 나오지만, 마우스의 위치가 더이상 그쪽이 아니기 때문에
  //벗어난곳의 위치 -1 만큼 돌려줘야 한다.

  return (
    <StyledStarRate>
      <ul>
        {rateArray.map((rate, i) =>
          i > iconIndex ? (
            <StarBorderIcon onMouseEnter={() => setIconIndex(i)} onClick={() => {}} sx={{ fontSize: '4rem' }} />
          ) : (
            <StarIcon onMouseLeave={() => setIconIndex(i - 1)} sx={{ fontSize: '4rem' }} />
          )
        )}
      </ul>
    </StyledStarRate>
  );
};

export default IconRate;
