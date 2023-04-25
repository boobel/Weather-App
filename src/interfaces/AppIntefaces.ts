interface NavItemProps {
  name: string;
}

interface HourlyWeatherData {
  temperature_2m: number[];
  time: string[];
  weathercode: number[];
}

interface HourlyAirData {
  dust: number[];
  uv_index: number[];
  european_aqi: number[];
  pm2_5: number[];
  time: string[];
}

interface DailyWeatherData {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weathercode: number[];
  time: string[];
}

interface TimeProps {
  time: string;
}

interface TempProps {
  temp: number;
}

interface CodeProps {
  weathercode: number;
}

interface WeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: HourlyWeatherData;
  hourly: HourlyWeatherData;
  daily: DailyWeatherData;
}

interface AirData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  hourly_units: HourlyAirData;
  hourly: HourlyAirData;
}

export type {
  NavItemProps,
  WeatherData,
  DailyWeatherData,
  HourlyWeatherData,
  HourlyAirData,
  TimeProps,
  TempProps,
  CodeProps,
  AirData,
};
