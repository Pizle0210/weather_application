/**
 * Fetches the 5-day weather forecast for a given latitude and longitude using the OpenWeather API.
 *
 * @param req - The Next.js request object.
 * @returns A response containing the 5-day weather forecast data, or an error response if there was a problem fetching the data.
 */
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;
    const hourlyForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`;

    const response = await fetch(hourlyForecastUrl, {
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
