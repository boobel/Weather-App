import React from "react";
import styled from "styled-components";
import clearSky from "../assets/icons/forecast-clear-sky.svg";
import cloudy from "../assets/icons/forecast-cloudy.svg";
import rain from "../assets/icons/forecast-rain.svg";
import drizzle from "../assets/icons/forecast-drizzle.svg";
import foggy from "../assets/icons/forecast-foggy.svg";
import snow from "../assets/icons/forecast-snow.svg";
import thunderstorm from "../assets/icons/forecast-thunderstorm.svg";

interface LongItemProps {
  date: string;
  weatherCode: number;
  tempMax: number;
  tempMin: number;
}

const LongItem = ({ date, weatherCode, tempMax, tempMin }: LongItemProps) => {
  return (
    <StyledItem>
      <StyledText>{date}</StyledText>
      <StyledImage
        src={weatherCodesDict[weatherCode]}
        alt={weatherCodesDict[weatherCode]}
      />
      <StyledText>
        {tempMax}/{tempMin} °C
      </StyledText>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

const StyledImage = styled.img`
  height: auto;
  width: 15%;
  object-fit: contain;
`;

const StyledText = styled.span`
  width: 7rem;
  font-size: calc(0.5rem + 0.5vw);
`;

const weatherCodesDict: { [key: number]: string } = {
  0: clearSky,
  1: cloudy,
  2: cloudy,
  3: clearSky,
  45: foggy,
  48: foggy,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,
  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  71: snow,
  73: snow,
  75: snow,
  77: snow,
  80: rain,
  81: rain,
  82: rain,
  85: snow,
  86: snow,
  95: thunderstorm,
  96: thunderstorm,
  99: thunderstorm,
};

export { LongItem };
