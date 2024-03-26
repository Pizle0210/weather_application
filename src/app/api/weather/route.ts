import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const Lat = 9.0563;
    const Lon = 7.4985;
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;
    const CurrentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Lon}&appid=${ApiKey}`;
    const response = await fetch(CurrentWeatherUrl);
    if (response.ok) {
      return response;
    } else {
      return new Response("Request failed");
    }
  } catch (error: unknown) {
    return new Response(
      `Error encountered while fetching current air pollution data: ${error}`,
      { status: 500 }
    );
  }
};
