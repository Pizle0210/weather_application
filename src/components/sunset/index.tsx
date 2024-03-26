"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { useGlobalContext } from "@/providers/globalContext";
import { unixToTime } from "@/lib/utils";
import { icons } from "@/lib/data";

export default function Sunset() {
  const { forecast } = useGlobalContext();
  console.log(forecast);
  const morning = forecast?.sys?.sunrise;
  const evening = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunriseTime = unixToTime(morning, timezone);
  const sunsetTime = unixToTime(evening, timezone);

  if (!forecast?.sys?.sunset) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }
  return (
    <div className="sunset h-[12rem] w-full col-span-full p-4 border-2 rounded-lg flex flex-col dark:bg-dark-grey shadow-sm dark:shadow-none gap-8">
      <div className="top">
        <h2 className="flex items-center capitalize font-medium gap-2">
          {icons.sunset} Sunset
        </h2>
        <p className="text-xl">{sunsetTime}</p>
      </div>
      <p className="gap-2">Sunrise:{sunriseTime}</p>
    </div>
  );
}
