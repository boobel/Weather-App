import styled from "styled-components";
import React, { useState, useContext, useEffect } from "react";
import {
  WeatherData,
  HourlyWeatherData,
  RainProps,
  CodeProps,
  TempProps,
} from "../interfaces/AppIntefaces";
import { SearchContext } from "../context/LocationContext";
import { getWeather } from "../api/getWeather";
import clearSky from "../assets/icons/forecast-clear-sky.svg";
import cloudy from "../assets/icons/forecast-cloudy.svg";
import rain from "../assets/icons/forecast-rain.svg";
import drizzle from "../assets/icons/forecast-drizzle.svg";
import foggy from "../assets/icons/forecast-foggy.svg";
import snow from "../assets/icons/forecast-snow.svg";
import thunderstorm from "../assets/icons/forecast-thunderstorm.svg";

const MainTile: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const { searchValue, setSearchValue } = useContext(SearchContext);
  const [dailyForecast, SetDailyForecast] = useState<HourlyWeatherData>();
  const [dailyWeatherCode, setDailyWeatherCode] = useState<CodeProps[]>();
  const [dailyTemp, SetDailyTemp] = useState<TempProps[]>();
  const [dailyRain, SetDailyRain] = useState<RainProps[]>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setWeather(await getWeather(searchValue));
      } catch (e) {
        console.error(e);
      }
    };
    fetchWeather();
  }, [searchValue]);

  useEffect(() => {
    if (weather) {
      SetDailyForecast(weather.hourly);
    }
    console.log(dailyForecast);
  }, [weather]);

  useEffect(() => {
    if (dailyForecast) {
      const rains = dailyForecast.rain.map((rain) => {
        return { rain };
      });
      const weatherCodes = dailyForecast.weathercode.map((weathercode) => {
        return { weathercode };
      });
      const temps = dailyForecast.temperature_2m.map((temp) => {
        return { temp };
      });
      SetDailyRain(rains);
      setDailyWeatherCode(weatherCodes);
      SetDailyTemp(temps);
      console.log(dailyRain);
    }
  }, []);

  const avgTemp =
    dailyTemp && dailyTemp.length > 0
      ? dailyTemp.reduce((total, temp) => total + temp.temp, 0) /
        dailyTemp.length
      : 0;

  const avgRain =
    dailyRain && dailyRain.length > 0
      ? dailyRain.reduce((total, rain) => total + rain.rain, 0) /
        dailyRain.length
      : 0;

  const weatherMiddleElement = () => {
    if (!dailyWeatherCode) {
      return null;
    }

    const middleIndex = Math.floor(dailyWeatherCode.length / 2);
    return dailyWeatherCode[middleIndex];
  };

  const middleWeatherCode = weatherMiddleElement() || { weathercode: 0 };

  return (
    <>
      <StyledContainer>{searchValue}</StyledContainer>
      <div>Chance of rain: {avgRain.toFixed(2)}</div>
      <div>{avgTemp.toFixed(0)}</div>
      <StyledImage
        src={
          middleWeatherCode && weatherCodesDict[middleWeatherCode.weathercode]
        }
        alt="weather"
      />
    </>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50vw;
  height: 30vh;
`;

const StyledImage = styled.img`
  height: auto;
  width: 15%;
  object-fit: contain;
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

export { MainTile };
