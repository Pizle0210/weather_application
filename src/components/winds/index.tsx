"use client";
import { useGlobalContext } from "@/providers/globalContext";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { icons } from "@/lib/data";
import Image from "next/image";

export default function Wind() {
  const { forecast } = useGlobalContext();

  const windSpeed = forecast?.wind?.speed;
  const windDir = forecast?.wind?.deg;
  console.log(windSpeed);
  console.log(windDir);

  if (!windSpeed || !windDir) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  return (
    <div className="wind h-[12rem] w-full col-span-full p-5 border-2 rounded-lg flex flex-col dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="flex justify-between">
        <h2 className="flex items-center capitalize font-medium gap-2">
          {icons.wind} Wind
        </h2>
        <p>{windSpeed}m/s</p>
      </div>
      <div className="compass relative flex justify-center">
        <div className="image relative">
          <Image
            src="/compass_body.svg"
            width={110}
            height={110}
            alt="compass"
            className="top-3 "
          />
          <Image
            src="/compass_arrow.svg"
            width={11}
            height={11}
            alt="compass"
            className={`absolute top-0 left-[45%] transition-all duration-500 ease-in-out dark:invert`}
            style={{
              transform: `rotate(${windDir}deg) translateX(-50%)`,
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
