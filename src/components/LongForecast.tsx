import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { getWeather } from "../api/getWeather";
import {
  WeatherData,
  DailyWeatherData,
  TimeProps,
  TempProps,
  CodeProps,
} from "../interfaces/AppIntefaces";
import { LongItem } from "./LongItem";
import { SearchContext } from "../context/LocationContext";

const LongForecast: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData>();
  const [weeklyForecast, SetWeeklyForecast] = useState<DailyWeatherData>();
  const [weeklyTime, SetWeeklyTime] = useState<TimeProps[]>();
  const [weeklyTempMax, SetWeeklyTempMax] = useState<TempProps[]>();
  const [weeklyTempMin, SetWeeklyTempMin] = useState<TempProps[]>();
  const [weeklyWeatherCode, setWeeklyWeatherCode] = useState<CodeProps[]>();
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
      SetWeeklyForecast(weather.daily);
    }
  }, [weather]);

  useEffect(() => {
    if (weeklyForecast) {
      const times = weeklyForecast.time.map((time) => {
        return { time };
      });
      const tempsMax = weeklyForecast.temperature_2m_max.map((temp) => {
        return { temp };
      });
      const tempsMin = weeklyForecast.temperature_2m_min.map((temp) => {
        return { temp };
      });
      const weatherCodes = weeklyForecast.weathercode.map((weathercode) => {
        return { weathercode };
      });
      SetWeeklyTime(times);
      SetWeeklyTempMax(tempsMax);
      SetWeeklyTempMin(tempsMin);
      setWeeklyWeatherCode(weatherCodes);
    }
  }, [weeklyForecast]);

  return (
    <SideContainer>
      <h1>7 Day forecast</h1>
      <ForecastCointainer>
        {weeklyTempMax?.map((tempMaxItem, index) => {
          const timeItem = weeklyTime?.[index];
          const tempMinItem = weeklyTempMin?.[index];
          const codeItem = weeklyWeatherCode?.[index];
          const date = timeItem?.time
            ? new Date(timeItem.time).toLocaleDateString("en-US", {
                weekday: "long",
              })
            : "";
          return (
            <LongItem
              date={date}
              weatherCode={codeItem?.weathercode || 0}
              tempMax={tempMaxItem.temp}
              tempMin={tempMinItem?.temp || 0}
              index={index}
            />
          );
        })}
      </ForecastCointainer>
    </SideContainer>
  );
};

const SideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: solid 1px #2c2b2b;
  width: 30vw;
  min-width: 250px;
  border-radius: 1rem;
  background-color: var(--primary-color);
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

const ForecastCointainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 2rem;
`;

export { LongForecast };
