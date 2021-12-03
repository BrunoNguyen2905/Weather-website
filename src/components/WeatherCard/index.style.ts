import styled from "styled-components/macro";
import { BackgroundImageProp } from "../../types";

export const WeatherCardContainer = styled.div<BackgroundImageProp>`
  background-image: url(${props => props.backgroundImg});
  display: grid;
  place-items: center;
  background-attachment: fixed;
  background-size: cover;
  padding: 60px 0px;
  color: white;
  box-shadow: inset 0 0 0 2000px rgba(79, 77, 83, 0.4);
  img {
    width: 100px;
    height: 100px;
  }
`;
export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-width: 16vw;
`;

export const WeatherDegree = styled.p`
  font-size: 80px;
`;

export const WeatherDesc = styled.p`
  font-size: 36px;
`;

export const UpdatedTime = styled.p`
  font-weight: 700;
  margin-top: 12px;
`;
export const AdditionalInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  text-align: center;

  span {
    flex: 25%;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 24px;
  }
`;
