import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;
    const CurrentAirPollution = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    const response = await fetch(CurrentAirPollution);

    if (response.ok) {
      return response;
    } else {
      return new Response(
        `Error encountered while fetching current air pollution data. Status: ${response.status}`,
        { status: response.status }
      );
    }
  } catch (error) {
    return new Response(
      `Error encountered while fetching current air pollution data: ${error}`,
      { status: 500 }
    );
  }
};

