import { useEffect, useState } from "react";
import { getWeatherForecast } from "../../http-common";
import { DailyCardsSliderProps } from "../../types";
import DailyCard from "../DailyCard";
import {
  DailyCardsSliderContainer,
  DailyCardsWrapper,
  DailyTitle,
} from "./index.style";

const DailyCardsSlider = ({ countryToFecth }: DailyCardsSliderProps) => {
  const [todayForecastData, setTodayForecastData] = useState<any>();

  const fetchTodayData = async () => {
    try {
      let res = await getWeatherForecast(
        countryToFecth ? countryToFecth : "vaasa",
        1
      );
      setTodayForecastData(res.data);
      console.log("re1111s", res);
    } catch (error) {
      console.log("errorrr", error);
    }
  };
  useEffect(() => {
    fetchTodayData();
  }, [countryToFecth]);

  let { hour } =
    !!todayForecastData && todayForecastData.forecast.forecastday[0];
  console.log("hour", hour);
  return (
    <DailyCardsSliderContainer>
      <DailyTitle>Daily</DailyTitle>
      <DailyCardsWrapper>
        {!!hour &&
          hour.map(
            (eachHour: {
              time: string;
              temp_c: number;
              condition: { text: string; icon: string };
            }) => (
              <DailyCard
                key={eachHour.time}
                time={eachHour.time}
                temp={eachHour.temp_c}
                weatherCondition={eachHour.condition.text}
                weatherIcon={eachHour.condition.icon}
              />
            )
          )}
      </DailyCardsWrapper>
    </DailyCardsSliderContainer>
  );
};

export default DailyCardsSlider;
