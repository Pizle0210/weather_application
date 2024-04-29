import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const city = searchParams.get("search");
    const ApiKey = process.env.OPEN_WEATHER_API_KEY;

    if (!ApiKey) {
      return NextResponse.json({ error: "API key not found" }, { status: 500 });
    }
    const GeoCodedUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${ApiKey}`;

    const response = await fetch(GeoCodedUrl);
    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data);
    } else {
      return NextResponse.json(
        { error: "Request failed", status: response.status },
        { status: response.status }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching weather data" },
      { status: 500 } 
    );
  }
};
 