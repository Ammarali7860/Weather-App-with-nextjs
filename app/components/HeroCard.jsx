import Image from 'next/image'
import React, { useState,useEffect } from 'react'
import { getWeather } from '../utils/getWeather'



const HeroCard = () => {
 
  
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeather("quetta");
      setWeather(data);
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-full h-[35vh] bg-[url('/images/bg-today-large.svg')] bg-no-repeat bg-cover rounded-3xl p-8 flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl">{weather?.city} , {weather?.country}</h2>
                <p>{weather?.time}</p>
              </div>
              <div className="flex gap-2 justify-start">
                <Image
                  src="/images/icon-sunny.webp"
                  alt="clear sky icon"
                  width={100}
                  height={100}
                />
                <h2 className="text-8xl font-bold italic">
                  {Math.round(weather?.temperature)}
                  <span className="align-top text-5xl not-italic pl-1">°</span>
                </h2>
              </div>
            </div>
  )
}

export default HeroCard