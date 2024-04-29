const fetchWeather = async (lat:number,lon:number) => {
  const response = await fetch(`api/weather?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  return data;
};

const fetchPollutionData = async (lat:number,lon:number) => {
  const response = await fetch(`api/pollution?lat=${lat}&lon=${lon}`);
  const data = await response.json();
  return data;
};
const fetchDailyData = async () => {
  const response = await fetch(`api/hourly`);
  const data = await response.json();
  return data;
};
// export { fetchWeather, fetchPollutionData,fetchDailyData };
