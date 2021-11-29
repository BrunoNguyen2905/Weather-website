import { DailyCardContainer, DailyTemp, DailyDesc } from "./index.style";
import {DailyCardProps} from '../../types'

const DailyCard = ({
  time,
  temp,
  weatherCondition,
  weatherIcon
}: DailyCardProps) => {
  let timeOnly = time.split(' ')
  return (
    <DailyCardContainer>
      <p>{time}</p>
      <img alt="" src={weatherIcon} />
      <DailyTemp>{temp} &deg; </DailyTemp>
      
      <DailyDesc>{weatherCondition}</DailyDesc>
    </DailyCardContainer>
  );
};

export default DailyCard;
