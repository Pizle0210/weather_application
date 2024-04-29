import React from "react";
import {
  FaGithub,
  FaWind,
  FaCloud,
  FaSearch,
  FaSnowflake,
  FaCloudSun,
  FaRegEye,
  FaPooStorm,
} from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { BsCommand } from "react-icons/bs";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import {
  LuCloudRain,
  LuNavigation,
  LuCloudDrizzle,
  LuThermometerSun,
  LuSunset,
  LuDroplet,
  LuSunDim,
  LuThermometer,
} from "react-icons/lu";

export const icons = {
  github: React.createElement(FaGithub, { size: "1.1rem", color: "peach" }),
  wind: React.createElement(FaWind, {
    size: "1.7rem",
    style: { color: "#ffff" },
  }),
  cloud: React.createElement(FaCloud, { size: "2rem" }),
  search: React.createElement(FaSearch, { size: "2rem" }),
  snowflake: React.createElement(FaSnowflake, { size: "2rem" }),
  cloudsun: React.createElement(FaCloudSun, { size: "2rem" }),
  eyes: React.createElement(FaRegEye, { size: "2rem" }),
  calender: React.createElement(SlCalender, { size: "2rem" }),
  cloudrain: React.createElement(LuCloudRain, { size: "2rem" }),
  navigation: React.createElement(LuNavigation, { size: "1.1rem" }),
  clouddrizzle: React.createElement(LuCloudDrizzle, { size: "2rem" }),
  thermo: React.createElement(LuThermometer, { size: "1.2rem" }),
  thermosun: React.createElement(LuThermometerSun, { size: "1.2rem" }),
  sunset: React.createElement(LuSunset, { size: "1.2rem" }),
  sundim: React.createElement(LuSunDim, { size: "2rem" }),
  droplet: React.createElement(LuDroplet, { size: "2rem" }),
  commandIcon: React.createElement(BsCommand, { size: "1rem" }),
  lightMode: React.createElement(MdOutlineLightMode, { size: "1.4rem" }),
  darkMode: React.createElement(MdOutlineDarkMode, { size: "1.2rem" }),
  storm: React.createElement(FaPooStorm, { size: "1.2rem" }),
  people: React.createElement(IoIosPeople, { size: "1.3rem" }),
} as const;

// function createIcon(Component, size = "1em") {
//   return React.createElement(Component, { size });
// }

// export const icons = {
//   github: createIcon(FaGithub, "2em"),
//   wind: createIcon(FaWind, "2em"),

export const defaultState = [
  {
    name: "Chicago",
    country: "US",
    state: "Illinois",
    lat: 40.6331,
    lon: 89.3985,
  },
  {
    name: "Culiacán",
    country: "MX",
    state: "Sinaloa",
    lat: 24.8091,
    lon: 107.394,
  },
  {
    name: "Madrid",
    country: "ES",
    state: "Madrid",
    lat: 40.4168,
    lon: 3.7038,
  },
  {
    name: "Abuja",
    country: "NG",
    state: "FCT",
    lat: 9.0563,
    lon: 7.4985,
  },
  {
    name: "Tokyo",
    country: "JP",
    state: "Kanto",
    lat: 35.6764,
    lon: 139.65,
  },
  {
    name: "Paris",
    country: "FR",
    state: "Île-de-France",
    lat: 48.8566,
    lon: 2.3522,
  },
];

