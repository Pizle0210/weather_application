import Pollution from "@/components/air_pollution";
import DailyForecast from "@/components/daily-forecast/DailyForecast";
import Map from "@/components/custom_map";
import { Population } from "@/components/population";
import Sunset from "@/components/sunset";
import Temperature from "@/components/temperature";
import Wind from "@/components/winds";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <div className="wrapper flex flex-col lg:flex-row h-full justify-center items-center">
        <div className=" flex flex-col md:flex-row gap-4">
          <div className="min-w-[15rem] md:w-[14rem] flex flex-col gap-4 w-full rounded-md">
            <Wind />
            <div className="rounded-md bg-gray-600 p-4 border shadow-sm dark:shadow-none h-[31rem]">
              <Temperature />
              <Population />
            </div>
          </div>

          <div className="flex flex-col md:w-[30rem]">
            <div className="flex flex-col h-full lg:flex gap-4 ">
              {/* pollution and sunset */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-grow gap-4">
                  <div className="grid gap-4 flex-col md:flex-row">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-2/3 ">
                        <DailyForecast />
                      </div>
                      <div className="md:w-1/3">
                        <Pollution />
                      </div>
                    </div>
                    <Map />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </React.Fragment>
  );
}
