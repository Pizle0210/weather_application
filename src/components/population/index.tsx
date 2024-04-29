"use client";
import { useGlobalContext } from "@/providers/globalContext";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { formatNum } from "@/lib/utils";
import { icons } from "@/lib/data";

function usePopulationData() {
  const { hourlyForecast } = useGlobalContext();
  const { city } = hourlyForecast ?? {};
  console.log(city);

  return { hourlyForecast, city };
}

export function Population() {
  const { hourlyForecast, city } = usePopulationData();

  if (!hourlyForecast || !city) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }
  return (
    <div className="bg-white text-black p-5 h-[12rem] w-full col-span-full border-2 border-spacing-2 border-white/50 rounded-lg flex flex-col dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top flex flex-col justify-between h-full">
        <h2 className="flex items-center gap-2 font-medium text-lg">
          {icons.people} population
        </h2>
        <p className="text-center font-bold text-5xl">{formatNum(city.population)}</p>
        <p className="font-medium text-sm">
          Latest UN Population data for {city.name}
        </p>
      </div>
    </div>
  );
}
