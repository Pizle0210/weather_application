"use client";
import { debounce } from "lodash";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { defaultState } from "@/lib/data";

type GetCodedData = {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
};

type GlobalContextValues = {
  forecast: any;
  airPollution: any;
  hourlyForecast: any;
  inputValue: string;
  geoCodedList: GetCodedData[];
  handleInput: any;
  setActiveCityCoord: any;
};

const GlobalContext = createContext<GlobalContextValues>({
  forecast: {},
  airPollution: {},
  hourlyForecast: {},
  geoCodedList: [],
  inputValue: "",
  handleInput: () => {},
  setActiveCityCoord: () => {
    [];
  },
});

type Props = PropsWithChildren<{}>;

export default function GlobalContextProvider({ children }: Props) {
  const [forecast, setForcast] = useState({});
  const [airPollution, setAirPollution] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState({});
  const [geoCodedList, setGeoCodedList] =
    useState<GetCodedData[]>(defaultState);
  const [inputValue, setInputValue] = useState<string>("");
  const [activeCityCoord, setActiveCityCoord] = useState([6.459, 3.6015]);

  const fetchWeather = async (lat: number, lon: number) => {
    try {
      const response = await fetch(`api/weather?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      console.log(data);
      setForcast(data);
      return data; // Return the fetched data
    } catch (error) {
      console.error(`Error fetching weather data:`, error);
      throw error;
    }
  };

  const fetchPollutionData = async (lat: any, lon: any) => {
    try {
      const response = await fetch(`api/pollution?lat=${lat}&lon=${lon}`);
      const data = await response.json();
      console.log(data);
      setAirPollution(data);
      return data;
    } catch (error) {
      console.error(`Error fetching pollution data:`, error);
      throw error;
    }
  };

  const fetchDailyData = async (lat: any, lon: any) => {
    const response = await fetch(`api/hourly?lat=${lat}&lon=${lon}`);
    const data = await response.json();
    console.log(data);
    setHourlyForecast(data);
    return data;
  };

  const fetchGeoCodedCityList = async (search: string) => {
    try {
      const response = await fetch(`api/geocoded?search=${search}`);
      const data = await response.json();
      console.log(`geocoded`, data);
      setGeoCodedList(data);
      return data;
    } catch (error) {
      console.error(`Error fetching city data:`, error);
      throw error;
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value === "") {
      setGeoCodedList(defaultState);
    }
  };

  useEffect(() => {
    fetchWeather(activeCityCoord[0], activeCityCoord[1]);
    fetchPollutionData(activeCityCoord[0], activeCityCoord[1]);
    fetchDailyData(activeCityCoord[0], activeCityCoord[1]);
    fetchGeoCodedCityList("london");
  }, [activeCityCoord]);

  // debounce function
  const delay = debounce((search) => {
    fetchGeoCodedCityList(search);
  }, 400);

  useEffect(() => {
    if (inputValue) {
      delay(inputValue);
    }

    return () => delay.cancel();
  }, [inputValue]);

  return (
    <GlobalContext.Provider
      value={{
        forecast,
        airPollution,
        hourlyForecast,
        geoCodedList,
        inputValue,
        handleInput,
        setActiveCityCoord,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
