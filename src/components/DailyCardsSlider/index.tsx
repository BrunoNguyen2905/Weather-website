import { useEffect, useState } from "react";
import { getWeatherForecast } from "../../http-common";
import DailyCard from "../DailyCard";
import { DailyCardsSliderContainer, DailyCardsWrapper, DailyTitle } from "./index.style";

const DailyCardsSlider = () => {
  const [todayForecastData, setTodayForecastData] = useState<any>();

   const fetchTodayData = async () => {
    let res = await getWeatherForecast("vaasa", 1);
    setTodayForecastData(res.data);
    console.log('res', res)
  };
  useEffect(() => {
    fetchTodayData();
  }, []);

  let {hour} = !!todayForecastData && todayForecastData.forecast.forecastday[0]
  console.log('hour', hour)
  return (
    <DailyCardsSliderContainer>
      <DailyTitle>Daily</DailyTitle>
      <DailyCardsWrapper>
       {!!hour && hour.map((eachHour: { time: string; temp_c: number; condition: { text: string; icon: string; }; }) => (
         <DailyCard 
          time={eachHour.time}
          temp={eachHour.temp_c}
          weatherCondition={eachHour.condition.text}
          weatherIcon={eachHour.condition.icon}
         />
       ))}
      </DailyCardsWrapper>
    </DailyCardsSliderContainer>
  );
};

export default DailyCardsSlider
