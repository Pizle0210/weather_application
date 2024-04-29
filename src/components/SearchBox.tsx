"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { icons } from "@/lib/data";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "./ui/command";
import { useGlobalContext } from "@/providers/globalContext";

type GeoCodedListItem = {
  name: string;
  country: string;
  state: string;
  lat: number;
  lon: number;
};

export default function SearchBox() {
  const { geoCodedList, handleInput, inputValue } = useGlobalContext();
  const [hovered, setHovered] = useState<number>(0);
  const { setActiveCityCoord } = useGlobalContext();
  const getClickedCoords = (lat: number, lon: number) => {
    setActiveCityCoord(lat, lon);
  };
  return (
    <div className="search-btn ">
      <Dialog >
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className=" cursor-default border inline-flex items-center justify-center text-sm font-light hover:dark:bg-[#131313] hover:bg-slate-100 transition ease-in-out duration-150 border-slate-300"
          >
            <p className="text-sm text-muted-foreground">search here...</p>
            <div className="command bg-gray-300 text-black !font-medium flex dark:bg-[#262626 ] py-[2px] pl-[0.33rem] pr-[0.45rem] rounded-sm ml-[17rem] items-center space-x-2 ">
              {icons.commandIcon}
              <span className="text-[1rem]">F</span>{" "}
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className="p-0">
          <Command className="rounded-md border shadow-md">
            <CommandInput
              placeholder="search here..."
              value={inputValue}
              onChangeCapture={handleInput}
            />
            <CommandList>
              {geoCodedList.length === 0 && <p>No result found..</p>}

              <ul className="px-3 p-2">
                {geoCodedList.length &&
                  geoCodedList.map((list: GeoCodedListItem, index: number) => {
                    const { country, state, name } = list;
                    return (
                      <li
                        key={index}
                        className={`py-2 px-2 list-none text-sm cursor-default hover:border-spacing-1 hover:border border-white/90 rounded mb-0.5
                          ${hovered === index ? "bg-accent" : ""}`}
                        onMouseEnter={() => setHovered(index)}
                        onClick={() => {
                          setActiveCityCoord([list.lat, list.lon]);
                        }}
                      >
                        <p>
                          {name}
                          {state ? `, ${state}` : ""}
                          {country ? `, ${country}` : ""}
                        </p>
                      </li>
                    );
                  })}
              </ul>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  );
}
