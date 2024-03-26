import { type ClassValue, clsx } from "clsx";
import moment from "moment";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const kelvinToCelsius = (kelkin: number) => Math.round(kelkin - 273.15);

export const formatNum = (num: number) =>
  num >= 1000000
    ? (num / 1000000).toFixed(1) + "M"
    : num >= 1000
    ? (num / 1000).toFixed(1) + "K"
    : num;

export const unixToTime = (unix: number, timezone: number) =>
  moment
    .unix(unix)
    .utcOffset(timezone / 60)
    .format("HH:mm");

export const qualityIndexRatingText = [
  {
    rating: 20,
    description: "awesome",
  },
  {
    rating: 40,
    description: "good",
  },
  {
    rating: 50,
    description: "moderate",
  },
  {
    rating: 60,
    description: "fair",
  },
  {
    rating: 80,
    description: "poor",
  },
  {
    rating: 100,
    description: "harzardous",
  },
];
