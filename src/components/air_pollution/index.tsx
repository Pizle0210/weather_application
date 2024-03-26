"use client";
import { useGlobalContext } from "@/providers/globalContext";
import React from "react";
import { Skeleton } from "../ui/skeleton";
import { icons } from "@/lib/data";
import ProgressBar from "../ProgressBar";
import { qualityIndexRatingText } from "@/lib/utils";

export default function Pollution() {
  const { airPollution } = useGlobalContext();

  if (!airPollution?.list?.[0]?.main) {
    return (
      <Skeleton className="h-[12rem] w-full col-span-2 md:col-span-full" />
    );
  }

  const { list } = airPollution;
  const airQualityIndex = list?.[0]?.main?.aqi * 10;
  const filteredIndex = qualityIndexRatingText.find(
    (item) => item.rating === airQualityIndex
  );

  return (
    <div className="air__pollution h-[12rem] w-full p-5  border-2 rounded-lg flex flex-col dark:bg-dark-grey shadow-sm dark:shadow-none justify-evenly gap-8 ">
      <h2 className="flex items-center capitalize font-medium gap-2">
        {icons.thermosun} Air Quality
      </h2>
      <div className="progress rounded-full">
        <ProgressBar value={airQualityIndex} className="progress" max={100} />
      </div>
      <p className="text-sm">Air quality is {filteredIndex?.description}</p>
    </div>
  );
}
