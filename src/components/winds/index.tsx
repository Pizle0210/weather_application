"use client";
import { useGlobalContext } from "@/providers/globalContext";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { icons } from "@/lib/data";
import Image from "next/image";

export default function Wind() {
  const { forecast } = useGlobalContext();
  const { speed: windspeed, deg: windDir } = forecast?.wind ?? {};

  if (!windspeed) {
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
        <p>{Math.round(windspeed)} m/s</p>
      </div>
      <div className="relative flex justify-center">
        <Image
          src="/compass.jpg"
          width={100}
          height={100}
          priority
          quality={100}
          alt="compass"
          className={`absolute top-2 rounded-full h-24 w-24 border-4 bg-yellow-500 p-2 border-white/90 transition-transform rotate-${windDir}`}
        />
      </div>
    </div>
  );
}
