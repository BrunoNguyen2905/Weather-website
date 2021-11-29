import styled from "styled-components/macro";

export const WeatherCardContainer = styled.div`
  display: grid;
  place-items: center;
  background: gray;

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
