"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import HeroCard from "./components/HeroCard";
import StatCard from "./components/StatCard";
import DailyCard from "./components/DailyCard";
import HourlyItem from "./components/HourlyItem";
import RightPanel from "./components/RightPanel";
import { getWeather } from "./utils/getWeather";

const page = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("quetta");
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <>
      <Navbar />
      <section className=" w-full h-[120vh] flex flex-col gap-8 justify-center items-center p-16 ">
        <div className="w-full h-full content-center flex justify-center items-center">
          <h1 className=" text-6xl font-Bricolage_Grotesque">
            How's the sky looks today
          </h1>
        </div>
        <SearchForm />
        {/* main content area */}
        <div className=" w-full flex gap-8">
          {/* left side container */}
          <div className="w-[65%] flex flex-col gap-10">
            {/* container 1 */}
            <HeroCard />
            {/* container 2 */}
            <div className="flex gap-4">
              {/* box 1 */}
              <StatCard properties="Feels like" value={weather?.feelsLike} units={weather?.current_weather_units}/>

              {/* box 2 */}
              <StatCard properties="Humidity" value={weather?.humidity} units={weather?.current_weather_units}/>
              {/* box 3 */}
              <StatCard properties="Winds" value={weather?.windspeed} units={weather?.current_weather_units}/>
              {/* box 4 */}
              <StatCard
                properties="Precipitation"
                value={weather?.precipitation} units={weather?.current_weather_units}
              />
            </div>
            {/* container 3 */}
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="font-light">Precipitation </h2>
              </div>
              <div className="flex gap-4 justify-between">
                {/* day 1 */}
                <DailyCard
                  day="Mon"
                  weatherIcon="/images/icon-sunny.webp"
                  maxvalue="72"
                  minValue="59"
                />
                {/* Day 2 */}
                <DailyCard
                  day="Tue"
                  weatherIcon="/images/icon-rain.webp"
                  maxvalue="68"
                  minValue="57"
                />
                {/* Day 3 */}
                <DailyCard
                  day="Wed"
                  weatherIcon="/images/icon-drizzle.webp"
                  maxvalue="70"
                  minValue="59"
                />
                {/* Day 4 */}
                <DailyCard
                  day="Thu"
                  weatherIcon="/images/icon-rain.webp"
                  maxvalue="68"
                  minValue="57"
                />
                {/* Day 5 */}
                <DailyCard
                  day="Fri"
                  weatherIcon="/images/icon-partly-cloudy.webp"
                  maxvalue="68"
                  minValue="57"
                />
                {/* Day 6 */}
                <DailyCard
                  day="Sat"
                  weatherIcon="/images/icon-storm.webp"
                  maxvalue="68"
                  minValue="57"
                />
                {/* Day 7 */}
                <DailyCard
                  day="Sun"
                  weatherIcon="/images/icon-snow.webp"
                  maxvalue="68"
                  minValue="57"
                />
              </div>
            </div>
          </div>
          {/* right side container */}
          <RightPanel />
        </div>
      </section>
    </>
  );
};

export default page;
