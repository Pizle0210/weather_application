"use client";
import { useGlobalContext } from "@/providers/globalContext";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { icons } from "@/lib/data";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import moment from "moment";
import { kelvinToCelsius } from "@/lib/utils";

type Forecast = {
  dt_txt: string;
  main: {
    temp: number;
  };
};

export default function DailyForecast() {
  const { forecast, hourlyForecast } = useGlobalContext();
  const { weather } = forecast ?? {};
  const { list, city } = hourlyForecast ?? {};
  console.log(list, city);

  if (!hourlyForecast || !city || !list) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }
  if (!forecast || !weather) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const todaysDate = new Date().toISOString().split("T")[0];
  console.log(todaysDate);

  const todayForecast: Forecast[] = list.filter((forecast: Forecast) => {
    return forecast.dt_txt.includes(todaysDate);
  });
  console.log(todayForecast);

  const { main: mainWeather } = weather.at(0);
  console.log(mainWeather);

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

  return (
    <div className="p-5 h-[12rem] w-full col-span-full border-2 rounded-lg flex flex-col dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="h-full flex gap-10 overflow-hidden">
        {todayForecast.length < 1 ? (
          <div>
            <p className="text-red-500 font-light ">No data available</p>
          </div>
        ) : (
          <div className="w-full">
            <Carousel>
              <CarouselContent>
                {todayForecast.map((forecast: Forecast) => (
                  <CarouselItem
                    key={forecast.dt_txt}
                    className="flex flex-col cursor-grab gap-8 basis-[6.5rem] "
                  >
                    <p className="dark:text-gray-300">
                      {moment(forecast.dt_txt).format("HH:mm")}
                    </p>
                    <p>{showIcons()}</p>
                    <p>{kelvinToCelsius(forecast.main.temp)}℃</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        )}
      </div>
    </div>
  );
}
