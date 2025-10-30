'use client'
import React, { useState,useRef,useEffect } from 'react'
import HourlyItem from './HourlyItem'
import Image from 'next/image'




const RightPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState("Tuesday");

    
        
    
      const dropdownRef = useRef(null);
    
      // Outside click to close dropdown
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
      }, []);
    
      // Handle selection
      const handleSelect = (day) => {
        setSelectedDay(day);
      };
  return (
    <div className="w-[35%] h-full">
                <div className="h-full w-full bg-neutral-800 rounded-3xl flex flex-col  gap-4">
                  {/* row 1 */}
                  <div className="flex justify-between items-center p-8">
                    <h2 className="text-2xl">Hourly forecast</h2>
                    <div className="relative" ref={dropdownRef}>
                    <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 bg-neutral-600 rounded-lg px-5 py-2">
                      
                      <span>{selectedDay}</span>
                      <Image
                        src="/images/icon-dropdown.svg"
                        alt="gear icon"
                        width={15}
                        height={15}
                      />
                    </button>
                    {isOpen && (
          <div className="absolute top-11 right-0 mt-2 w-48 bg-neutral-800 rounded-xl shadow-lg border border-neutral-600 p-4 z-20">
            <div className="">
              <h5 onClick={() => { handleSelect("Monday"); setIsOpen(false); }} className={` ${selectedDay === "Monday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600 `}>Monday</h5>
              <h5 onClick={() => { handleSelect("Tuesday"); setIsOpen(false); }} className={` ${selectedDay === "Tuesday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600`}>Tuesday</h5>
              <h5 onClick={() => { handleSelect("Wednesday"); setIsOpen(false); }} className={` ${selectedDay === "Wednesday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600`}>Wednesday</h5>
              <h5 onClick={() => { handleSelect("Thursday"); setIsOpen(false); }} className={` ${selectedDay === "Thursday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600`}>Thursday</h5>
              <h5 onClick={() => { handleSelect("Friday"); setIsOpen(false); }} className={` ${selectedDay === "Friday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600`}>Friday</h5>
              <h5 onClick={() => { handleSelect("Saturday"); setIsOpen(false); }} className={` ${selectedDay === "Saturday" ? "bg-neutral-600":""} text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600`} >Saturday</h5>
              <h5 onClick={() => { handleSelect("Sunday"); setIsOpen(false); }} className="text-neutral-300 font-semibold p-1 mb-1 hover:bg-neutral-600">Sunday</h5>
            </div>
          </div>
        )}
                    </div>
                    

                  </div>
                  {/* row 2 */}
                  <div className="custom-scrollbar h-[70vh] overflow-y-auto flex flex-col justify-between gap-3 p-8">
                    {/* 3 AM */}
                   <HourlyItem icon="/images/icon-storm.webp" time="3 AM" degree="68" />
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-rain.webp" time="4 AM" degree="66" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-drizzle.webp" time="5 AM" degree="65" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-sunny.webp" time="6 AM" degree="67" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-partly-cloudy.webp" time="7 AM" degree="69" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-rain.webp" time="8 AM" degree="70" />
                  
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-storm.webp" time="9 AM" degree="68" />
                  
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-snow.webp" time="10 AM" degree="64" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-drizzle.webp" time="11 AM" degree="66" />
                    
                    {/* 3 AM */}
                    <HourlyItem icon="/images/icon-partly-cloudy.webp" time="12 PM" degree="68" />
                    
                  </div>
                </div>
              </div>
  )
}

export default RightPanel