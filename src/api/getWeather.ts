import { getCoords } from "./getCoords";

const getWeather = async (location: string) => {
  const coords = await getCoords(location);
  console.log(coords.results[0].geometry.lat);
  const lat = coords.results[0].geometry.lat;
  const long = coords.results[0].geometry.lng;

  const db = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin`
  );
  const data = await db.json();
  console.log(data);
  return data;
};

export { getWeather };
