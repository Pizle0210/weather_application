"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { icons } from "@/lib/data";
import { kelvinToCelsius } from "@/lib/utils";
import moment from "moment";
import { useGlobalContext } from "@/providers/globalContext";
import React, { useEffect, useState } from "react";

export default function Temperature() {
  const [localTime, setLocalTime] = useState<string>("");
  const [currentDay, setCurrentDay] = useState<string>("");
  const { forecast } = useGlobalContext();
  const { name, timezone, weather, main } = forecast ?? {};
  const { main: mainWeather, description } = (weather && weather.at(0)) ?? {};

  const currentTemperature = kelvinToCelsius(main?.temp);
  const minTemperature = kelvinToCelsius(main?.temp_min);
  const maxTemperature = kelvinToCelsius(main?.temp_max);
console.log(name); 
  const showIcons = () => {
    switch (mainWeather) {
      case "Drizzle":
        return icons.clouddrizzle;
      case "Rain":
        return icons.cloudrain;
      case "Snow":
        return icons.snowflake;
      case "Clouds":
        return icons.cloud;
      default:
        return icons.lightMode;
    }
  };

  // time update
  useEffect(() => {
    const interval = setInterval(() => {
      const localTime = moment().utcOffset(timezone / 60);
      const formatTime = localTime.format("HH:mm");
      const day = localTime.format("dddd");
      setLocalTime(formatTime);
      setCurrentDay(day);
    }, 1000);
  }, []);

  return (
    <div>
      {!forecast || !weather ? (
        <p>Loading...</p>
      ) : (
        <div className="flex justify-between rounded-lg flex-col p-2">
          <p className="flex justify-between items-center mb-1">
            <span className="font-medium text-white text-lg">{currentDay}</span>
            <span className="font-medium text-white text-lg">{localTime}</span>
          </p>
          <p className="flex space-x-2 font-bold mb-5">
            <span className="text-white">{name}</span>
            <span className="text-white">{icons.navigation}</span>
          </p>
          <p className="self-center">
            <span className="text-7xl max-md:text-4xl text-yellow-500 dark:text-white font-extrabold tracking-wide">
              {currentTemperature}℃{" "}
            </span>
          </p>
          <div className="text-white">
            <div className="flex flex-row space-x-2 md:space-x-3 items-center mb-1">
              <span>{showIcons()}</span>
              <p className="text-lg font-medium">{description}</p>
            </div>
            <p className="space-x-3 flex items-center">
              <span className="font-medium capitalize">
                Low: {minTemperature}℃
              </span>
              <span className="font-medium capitalize">
                High: {maxTemperature}℃
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
