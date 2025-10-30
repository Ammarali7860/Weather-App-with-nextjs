// utils/getWeather.js

export async function getWeather(city) {
  try {
    // Step 1: Get latitude & longitude from the city name
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found");
    }

    const { latitude, longitude, name , country } = geoData.results[0];

    // Step 2: Fetch current weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    return {
      city: name,
      country: country ,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      current_weather_units: weatherData.current_weather_units.windspeed,
      time: weatherData.current_weather.time,
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
}
