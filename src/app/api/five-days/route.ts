import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const Lat = 9.0563;
    const Lon = 7.4985;
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;
    const fiveDaysForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Lon}&appid=${ApiKey}`;

    const response = await fetch(fiveDaysForecastUrl, {
      next: { revalidate: 3600 },
    });

    if (response.ok) {
      return response;
    }
    return new Response(
      `Error encountered while fetching current air pollution data`,
      { status: response.status }
    );
  } catch (error) {
    return new Response(
      `Error encountered while fetching current air pollution data: ${error}`,
      { status: 500 }
    );
  }
};
