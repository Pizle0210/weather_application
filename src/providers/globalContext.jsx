"use client";
import useSWR from "swr";
import { createContext, useContext, useEffect, useState } from "react";
import {
  fetchWeather,
  fetchPollutionData,
  fetchDailyData,
} from "../hooks/fetchers";

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [forecast, setForcast] = useState({});
  const [airPollution, setAirPollution] = useState({});
  const [fiveDaysForecast, setFiveDaysForecast] = useState({});

  const { data } = useSWR("weather", fetchWeather, {
    revalidateOnFocus: false,
    refreshInterval: 1000 * 60,
  });
  const { data: pollutionData } = useSWR("pollution", fetchPollutionData, {
    revalidateOnFocus: false,
    refreshInterval: 1000 * 60,
  });
  const { data: dailyData } = useSWR("weekly", fetchDailyData);
  console.log('weekly',dailyData);

  useEffect(() => {
    setForcast(data);
    setAirPollution(pollutionData);
    setFiveDaysForecast(dailyData);
  }, [dailyData, data, pollutionData]);
  console.log(dailyData);

  return (
    <GlobalContext.Provider
      value={{ forecast, airPollution, fiveDaysForecast }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
