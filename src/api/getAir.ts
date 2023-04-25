import { getCoords } from "./getCoords";

const getAir = async (location: string) => {
  const coords = await getCoords(location);
  const lat = coords.results[0].geometry.lat;
  const long = coords.results[0].geometry.lng;

  const db = await fetch(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${long}&hourly=pm2_5,dust,uv_index,european_aqi&timezone=Europe%2FBerlin`
  );
  const data = await db.json();
  return data;
};

export { getAir };
