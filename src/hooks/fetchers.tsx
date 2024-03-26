const fetchWeather = async () => {
  const response = await fetch("api/weather");
  const data = await response.json();
  return data;
};

const fetchPollutionData = async () => {
  const response = await fetch("api/pollution");
  const data = await response.json();
  return data;
};
const fetchDailyData = async () => {
  const response = await fetch("api/five-days");
  const data = await response.json();
  return data;
};
export { fetchWeather, fetchPollutionData,fetchDailyData };
