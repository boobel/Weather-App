import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { getAir } from "../api/getAir";
import { AirData, HourlyAirData } from "../interfaces/AppIntefaces";
import uvIndex from "../assets/icons/uv-index-icon.svg";
import aQ from "../assets/icons/aq-icon.svg";
import pm25 from "../assets/icons/pm25-icon.svg";
import dustIcon from "../assets/icons/dust-icon.svg";

const AirQuality: React.FC = () => {
  const [airQuality, setAirQuality] = useState<AirData>();
  const [dailyAirData, setDailyAirData] = useState<HourlyAirData>();
  const [dailyUV, setDailyUV] = useState<number>();
  const [dailyAQI, setDailyAQI] = useState<number>();
  const [dailyDust, setDailyDust] = useState<number>();
  const [dailyPM, setDailyPM] = useState<number>();

  const computeAverage = (arr: any[], key: string) => {
    const sum = arr.reduce((acc: any, val: any) => acc + val[key], 0);
    const avg = sum / arr.length;
    return avg;
  };

  useEffect(() => {
    const fetchAirQuality = async () => {
      try {
        setAirQuality(await getAir("New York"));
      } catch (e) {
        console.error(e);
      }
    };
    fetchAirQuality();
  }, []);

  useEffect(() => {
    if (airQuality) {
      setDailyAirData(airQuality.hourly);
    }
  }, [airQuality]);

  useEffect(() => {
    if (dailyAirData) {
      const dusts = dailyAirData.dust.map((dust) => {
        return { dust };
      });
      const uvs = dailyAirData.uv_index.map((uv) => {
        return { uv };
      });
      const aqis = dailyAirData.european_aqi.map((aqi) => {
        return { aqi };
      });
      const pms = dailyAirData.pm2_5.map((pm) => {
        return { pm };
      });
      setDailyDust(computeAverage(dusts, "dust"));
      setDailyUV(computeAverage(uvs, "uv"));
      setDailyAQI(computeAverage(aqis, "aqi"));
      setDailyPM(computeAverage(pms, "pm"));
    }
  }, [dailyAirData]);

  return (
    <StyledAirQuality>
      <h3>Air Quality</h3>
      <StyledContainer>
        <StyledCell>
          <StyledHeader>
            <StyledImage src={uvIndex} alt="uv-index-icon" />
            <StyledText> UV Index</StyledText>
          </StyledHeader>
          <StyledReading>{dailyUV?.toFixed(2)}</StyledReading>
        </StyledCell>
        <StyledCell>
          <StyledHeader>
            <StyledImage src={aQ} alt="uv-index-icon" />
            <StyledText> Air Quality</StyledText>
          </StyledHeader>
          <StyledReading>{dailyAQI?.toFixed(2)}</StyledReading>
        </StyledCell>
        <StyledCell>
          <StyledHeader>
            <StyledImage src={dustIcon} alt="uv-index-icon" />
            <StyledText> Dust </StyledText>
          </StyledHeader>
          <StyledReading>{dailyDust}</StyledReading>
        </StyledCell>
        <StyledCell>
          <StyledHeader>
            <StyledImage src={pm25} alt="uv-index-icon" />
            <StyledText> Particular Matter 2.5</StyledText>
          </StyledHeader>
          <StyledReading>{dailyPM?.toFixed(2)}</StyledReading>
        </StyledCell>
      </StyledContainer>
    </StyledAirQuality>
  );
};

const StyledAirQuality = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  width: 50vw;
  height: 30vh;
  border-radius: 1rem;
  background-color: var(--primary-color);
`;

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1vh;
  column-gap: 1vw;
`;

const StyledCell = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  width: 10vw;
`;

const StyledText = styled.span`
  font-weight: 700;
  font-size: 125%;
`;

const StyledReading = styled.span`
  font-size: 150%;
  font-weight: 900;
`;

const StyledImage = styled.img`
  height: auto;
  width: 2vw;
  object-fit: contain;
`;

export { AirQuality };
