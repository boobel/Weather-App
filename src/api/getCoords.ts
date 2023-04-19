const getCoords = async (location: string) => {
  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=3172f920b0b2456eafd6226325073cf6`
  );
  const data = await res.json();
  return data;
};
export { getCoords };
