interface NavItemProps {
  name: string;
}

interface HourlyData {
  time: string[];
  temperature_2m: string;
}

interface DailyData {
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
  hourly_units: HourlyData;
  hourly: HourlyData;
  daily: DailyData;
}

export type {
  NavItemProps,
  WeatherData,
  DailyData,
  TimeProps,
  TempProps,
  CodeProps,
};
