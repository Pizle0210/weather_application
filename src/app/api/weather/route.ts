import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const lat = searchParams.get("lat");
    const lon = searchParams.get("lon");
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;

    if (!ApiKey) {
      return NextResponse.json({ error: "API key not found" }, { status: 500 });
    }

    const CurrentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    const response = await fetch(CurrentWeatherUrl);

    if (response.ok) {
      return response
    } else {
      return NextResponse.json(
        { error: "Request failed", status: response.status },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return NextResponse.json(
      { error: "Error fetching weather data" },
      { status: 500 }
    );
  }
};
