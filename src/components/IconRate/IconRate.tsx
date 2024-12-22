import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';
import { useState } from 'react';
import Button from '../../ui/Button';
const StyledStarRate = styled.div`
  ul:hover {
    cursor: pointer;
  }
  ul {
    display: flex;
    background-color: beige;
  }
`;

interface IconRateProps {
  setIconCurrentPostion: (valeu: number) => void;
}

const IconRate = ({ setIconCurrentPostion }: IconRateProps) => {
  const rateLength = 5;
  const rateArray = Array.from({ length: rateLength }, (_, i) => {
    return i;
    ``;
  });
  const [iconIndex, setIconIndex] = useState<number>(0);
  const [isClickStar, setIsClickStar] = useState<boolean>(false);

  const handleClickStart = (i: number) => {
    setIconCurrentPostion(i);
    console.log(i);
    setIsClickStar(true);
  };

  return (
    <StyledStarRate>
      <ul>
        {/* map을 사용해서 icon을 순차적으로 그릴때 현재 마우스가 들어온 인덱스보다 작으면 별 크면 빈별
      반대로 마우스가 나간 인덱스는 다시 빈별 .
      다만 마우스가  테두리를  나갈때는  벗어난 곳의 인덱스,위치가 나오지만, 마우스의 위치가 더이상 그쪽이 아니기 때문에
      벗어난곳의 위치 -1 만큼 돌려줘야 한다. */}
        {!isClickStar
          ? rateArray.map((_, i) =>
              i > iconIndex ? (
                <StarBorderIcon onMouseEnter={() => setIconIndex(i)} sx={{ fontSize: '4rem' }} />
              ) : (
                <StarIcon
                  onClick={() => handleClickStart(i)}
                  onMouseLeave={() => setIconIndex(i - 1)}
                  sx={{ fontSize: '4rem' }}
                />
              )
            )
          : // 클릭했을시 별을 고정시키는 로직
            rateArray.map((_, i) =>
              i > iconIndex ? <StarBorderIcon sx={{ fontSize: '4rem' }} /> : <StarIcon sx={{ fontSize: '4rem' }} />
            )}
        <Button type="button" onClick={() => setIsClickStar(false)}>
          별점 초기화
        </Button>
      </ul>
    </StyledStarRate>
  );
};

export default IconRate;
