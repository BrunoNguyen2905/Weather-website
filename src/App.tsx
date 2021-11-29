import { useEffect, useState } from "react";
import "./App.css";
import DailyCardDetail from "./components/DailyCardDetail";
import DailyCardsSlider from "./components/DailyCardsSlider";
import WeatherCard from "./components/WeatherCard";
import { getWeatherData } from "./http-common";

function App() {
  const [data, setData] = useState<any>();
  const [isFDegreeInTemp, setIsFDegreeInTemp] = useState(false);
  const [isFDegreeInFeelLike, setIsFDegreeInFeelLike] = useState(false);
  const [isKphInWindSpeed, setIsKphInWindSpeed] = useState(false);
  const [isMilesInVisibility, setIsMilesInVisibility] = useState(false);
  const [isInchesInPressure, setIsInchesInPressure] = useState(false);
  const [isMmInPrecipitation, setIsMmInPrecipitation] = useState(false);

  const isFTempHandle = (arg: boolean) => {
    setIsFDegreeInTemp(arg);
  };
  const isFFeelLikeHandle = (arg: boolean) => {
    setIsFDegreeInFeelLike(arg);
  };
  const IsKphWindSpeedHandle = (arg: boolean) => {
    setIsKphInWindSpeed(arg);
  };
  const IsInchesPressureHandle = (arg: boolean) => {
    setIsInchesInPressure(arg);
  };
  const IsMilesVisbilityHandle = (arg: boolean) => {
    setIsMilesInVisibility(arg);
  };
  const IsMmPrecipitationHandle = (arg: boolean) => {
    setIsMmInPrecipitation(arg);
  };
  const fetchWeatherData = async () => {
    let res = await getWeatherData("vaasa");
    setData(res.data);
  };
  useEffect(() => {
    fetchWeatherData();
  }, []);

  let { location, current } = !!data && data;
  return (
    <div className="App">
      {data ? (
        <>
          <WeatherCard
            city={location.name}
            country={location.region}
            weatherIcon={current.condition.icon}
            localTime={location.localtime}
            temp={isFDegreeInTemp === false ? current.temp_c : current.temp_f}
            weatherCondition={current.condition.text}
            lastUpdate={current.last_updated}
            feelLike={
              isFDegreeInFeelLike === false
                ? current.feelslike_c
                : current.feelslike_f
            }
            visibility={
              isMilesInVisibility === false ? current.vis_km : current.vis_miles
            }
            wind={
              isKphInWindSpeed === false ? current.wind_mph : current.wind_kph
            }
            humidity={current.humidity}
            windDirection={current.wind_dir}
            pressure={
              isInchesInPressure === false
                ? current.pressure_mb
                : current.pressure_in
            }
            precipitation={
              isMmInPrecipitation === false
                ? current.precip_mm
                : current.precip_in
            }
            isFTemp={isFTempHandle}
            isFFeelLike={isFFeelLikeHandle}
            IsKphWindSpeed={IsKphWindSpeedHandle}
            IsInchesPressure={IsInchesPressureHandle}
            IsMilesVisbility={IsMilesVisbilityHandle}
            IsMmPrecipitation={IsMmPrecipitationHandle}
          />
        </>
      ) : null}
      <DailyCardsSlider />
      <DailyCardDetail />
    </div>
  );
}

export default App;
