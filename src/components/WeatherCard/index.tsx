import {
  WeatherCardContainer,
  WeatherDegree,
  WeatherDesc,
  WeatherInfo,
  UpdatedTime,
  AdditionalInfo,
} from "./index.style";
import { WeatherCardProps } from "../../types";
import TwoOptions from "../TwoOptions";
import Spinner from "../Spinner";
const WeatherCard = ({
  city,
  country,
  weatherIcon,
  temp,
  lastUpdate,
  feelLike,
  localTime,
  weatherCondition,
  visibility,
  wind,
  humidity,
  windDirection,
  pressure,
  precipitation,
  isFTemp,
  isFFeelLike,
  IsKphWindSpeed,
  IsInchesPressure,
  IsMilesVisbility,
  IsMmPrecipitation,
  loading,
}: WeatherCardProps) => {
  const TempOptionsHandle = (arg: boolean) => {
    isFTemp(arg);
  };

  const FeelLikeOptionsHandle = (arg: boolean) => {
    isFFeelLike(arg);
  };

  const WindSpeedOptionsHandle = (arg: boolean) => {
    IsKphWindSpeed(arg);
  };

  const PressureOptionsHandle = (arg: boolean) => {
    IsInchesPressure(arg);
  };

  const VisibilityOptionsHandle = (arg: boolean) => {
    IsMilesVisbility(arg);
  };

  const PrecipitationOptionsHandle = (arg: boolean) => {
    IsMmPrecipitation(arg);
  };

  return (
    <WeatherCardContainer>
      {loading && <Spinner />}
      {!loading && (
        <>
          <h1>{`${city}, ${country}`}</h1>
          <WeatherInfo>
            <img alt="" src={weatherIcon} />
            <WeatherDegree> {temp} &deg; </WeatherDegree>
            <TwoOptions
              firstValue="C"
              secondValue="F"
              handleCLickOption={TempOptionsHandle}
              isDegreeForTemp={true}
            />
          </WeatherInfo>
          <WeatherDesc>{weatherCondition}</WeatherDesc>
          <UpdatedTime>Local Time: {localTime}</UpdatedTime>
          <UpdatedTime>Updated as of {lastUpdate}</UpdatedTime>
          <AdditionalInfo>
            <span>
              <p>Feel like: {feelLike} &deg; </p>
              <TwoOptions
                firstValue="C"
                secondValue="F"
                handleCLickOption={FeelLikeOptionsHandle}
                isDegreeForTemp={false}
              />
            </span>
            <span>
              <p>Wind Speed: {wind}</p>
              <TwoOptions
                firstValue="mph"
                secondValue="kph"
                handleCLickOption={WindSpeedOptionsHandle}
                isDegreeForTemp={false}
              />
            </span>
            <span>
              <p>Visibility: {visibility} </p>
              <TwoOptions
                firstValue="km"
                secondValue="miles"
                handleCLickOption={VisibilityOptionsHandle}
                isDegreeForTemp={false}
              />
            </span>
            <span>
              <p>Humidity: {humidity}%</p>
            </span>
            <span>
              <p>Wind Direction: {windDirection}</p>
            </span>
            <span>
              <p>Pressure: {pressure}</p>

              <TwoOptions
                firstValue="mb"
                secondValue="in"
                handleCLickOption={PressureOptionsHandle}
                isDegreeForTemp={false}
              />
            </span>
            <span>
              <p>Precipitation: {precipitation}</p>
              <TwoOptions
                firstValue="mm"
                secondValue="in"
                handleCLickOption={PrecipitationOptionsHandle}
                isDegreeForTemp={false}
              />
            </span>
            <span>
              <p>UV: 2</p>
            </span>
          </AdditionalInfo>
        </>
      )}
    </WeatherCardContainer>
  );
};

export default WeatherCard;
