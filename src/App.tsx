import { useEffect, useState } from "react";
import Geocode from "react-geocode";

import "./App.css";
// import DailyCardDetail from "./components/DailyCardDetail";
import DailyCardsSlider from "./components/DailyCardsSlider";
import Navbar from "./components/Navbar";
import WeatherCard from "./components/WeatherCard";
import { getWeatherData } from "./http-common";
import {WeatherCondition} from './types'
function App() {
  Geocode.setApiKey("AIzaSyAgprw4BwWwRtjWlIrvelEcDRgddoRceow");
  Geocode.setLanguage("en");
  Geocode.setRegion("fi");
  const city = localStorage.getItem('city') || "";

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [data, setData] = useState<any>();
  const [isFDegreeInTemp, setIsFDegreeInTemp] = useState(false);
  const [isFDegreeInFeelLike, setIsFDegreeInFeelLike] = useState(false);
  const [isKphInWindSpeed, setIsKphInWindSpeed] = useState(false);
  const [isMilesInVisibility, setIsMilesInVisibility] = useState(false);
  const [isInchesInPressure, setIsInchesInPressure] = useState(false);
  const [isMmInPrecipitation, setIsMmInPrecipitation] = useState(false);
  const [searchValue, setSearchValue] = useState(city);
  // const [currentLatitude, setCurrentLatitude] = useState(0);
  // const [currentLongtitude, setCurrentLongtitude] = useState(0);

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
    try {
      let res = await getWeatherData(searchValue ? searchValue : "vaasa");
      localStorage.setItem('city', searchValue ? searchValue : "vaasa")
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setErrorMsg(String(error));
      setLoading(false);
    }
  };

  const setSearchValueHandle = (arg: string) => {
    setSearchValue(arg);
    console.log("arggg", arg);
  };
  //
  useEffect(() => {
      setLoading(true);
      fetchWeatherData();
    return () => {
      setErrorMsg("");
    };
  }, []);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setLoading(true);
      fetchWeatherData();
    }, 0);
    return () => {
      setErrorMsg("");
      clearTimeout(delayDebounceFn);
    };
    // fetchWeatherData();
  }, [setSearchValue, searchValue]);

  let { location, current } = !!data && data;
  return (
    <div className="App">
      {data && (
        <>
          <Navbar
            searchValueHandle={setSearchValueHandle}
            isError={errorMsg.length !== 0}
            errMsg="Invalid City. Please type again..."
          />
          <WeatherCard
          loading={loading}
          // backgroundImageURL={WeatherCondition.map(each => {
          //     if(String(current.condition.text) === each.text)  {
          //       return String(each.imageUrl)
          //     } 
          //     return String(WeatherCondition[0].imageUrl) 
          //   })}
            city={location.name}
            country={
              location.region !== "" ? location.region : location.country
            }
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
            uv={current.uv}
            isFTemp={isFTempHandle}
            isFFeelLike={isFFeelLikeHandle}
            IsKphWindSpeed={IsKphWindSpeedHandle}
            IsInchesPressure={IsInchesPressureHandle}
            IsMilesVisbility={IsMilesVisbilityHandle}
            IsMmPrecipitation={IsMmPrecipitationHandle}
          />
          <DailyCardsSlider countryToFecth={searchValue} loading={loading}/>
        </>
      )}

      {/* <DailyCardDetail /> */}
    </div>
  );
}

export default App;
