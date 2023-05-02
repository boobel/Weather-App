import styled from "styled-components";
import React, { useEffect, useState, useContext } from "react";
import { getWeather } from "../api/getWeather";
import {
  HourlyWeatherData,
  WeatherData,
  TimeProps,
  TempProps,
  CodeProps,
} from "../interfaces/AppIntefaces";
import { ShortItem } from "./ShortItem";
import { SearchContext } from "../context/LocationContext";

const ShortForecast: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [dailyForecast, SetDailyForecast] = useState<HourlyWeatherData>();
  const [dailyTime, SetDailyTime] = useState<TimeProps[]>();
  const [dailyTemp, SetDailyTemp] = useState<TempProps[]>();
  const [dailyWeatherCode, setDailyWeatherCode] = useState<CodeProps[]>();
  const { searchValue } = useContext(SearchContext);

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
  }, [weather]);

  useEffect(() => {
    if (dailyForecast) {
      const times = dailyForecast.time.map((time) => {
        return { time };
      });
      const temps = dailyForecast.temperature_2m.map((temp) => {
        return { temp };
      });
      const weatherCodes = dailyForecast.weathercode.map((weathercode) => {
        return { weathercode };
      });
      SetDailyTime(times.filter((item, index) => (index + 1) % 30 === 0));
      SetDailyTemp(temps.filter((item, index) => (index + 1) % 30 === 0));
      setDailyWeatherCode(
        weatherCodes.filter((item, index) => (index + 1) % 30 === 0)
      );
    }
  }, [dailyForecast]);

  return (
    <StyledForecast>
      <h3>Today's Weather</h3>
      <StyledContainer>
        {dailyTemp?.map((tempItem, index) => {
          const timeItem = dailyTime?.[index];
          const codeItem = dailyWeatherCode?.[index];
          const date = timeItem?.time
            ? new Date(timeItem.time).toLocaleString("en-US", {
                hour: "numeric",
                hour12: true,
              })
            : "";
          return (
            <ShortItem
              tempItem={tempItem?.temp || 0}
              date={date}
              index={index}
              codeItem={codeItem?.weathercode || 0}
            />
          );
        })}
      </StyledContainer>
    </StyledForecast>
  );
};

const StyledContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;

const StyledForecast = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  box-sizing: border-box;
  width: 50vw;
  height: 25vh;
  border-radius: 1rem;
  background-color: var(--primary-color);
`;

export { ShortForecast };
