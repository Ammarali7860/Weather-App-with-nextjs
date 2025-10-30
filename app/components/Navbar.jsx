'use client'
import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState({
    temperature: "Celsius (°C)",
    wind: "km/h",
    precipitation: "Millimeters (mm)",
  });

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
  const handleSelect = (category, value) => {
    setSelectedUnits((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <nav className="h-[10vh] flex justify-between items-center pt-16 px-20 relative">
      {/* Logo */}
      <div>
        <Image
          src="/images/logo.svg"
          alt="Weather App Logo"
          width={200}
          height={200}
        />
      </div>

      {/* Units Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-neutral-600 rounded-lg px-5 py-3"
        >
          <Image
            src="/images/icon-units.svg"
            alt="gear icon"
            width={15}
            height={15}
          />
          <span>Units</span>
          <Image
            src="/images/icon-dropdown.svg"
            alt="dropdown arrow"
            width={15}
            height={15}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-neutral-800 rounded-xl shadow-lg border border-neutral-600 p-4 z-20">
            <h4 className="text-neutral-400 text-sm mb-2">Switch to Imperial</h4>

            {/* Temperature */}
            <div className="mb-3">
              <h5 className="text-neutral-300 text-sm font-semibold mb-1">Temperature</h5>
              {["Celsius (°C)", "Fahrenheit (°F)"].map((unit) => (
                <div
                  key={unit}
                  className={`${selectedUnits.temperature === unit ? "bg-neutral-700 p-2 rounded" : ""} flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-700 p-2 rounded`}
                  
                  onClick={() => handleSelect("temperature", unit)}
                >
                  <span>{unit}</span> 
                  <span>{selectedUnits.temperature === unit ? "✓" : ""}</span>
                  
                </div>
              ))}
            </div>

            {/* Wind Speed */}
            <div className="mb-3">
              <h5 className="text-neutral-300 text-sm font-semibold mb-1">Wind Speed</h5>
              {["km/h", "mph"].map((unit) => (
                <div
                  key={unit}
                  className={`${selectedUnits.wind === unit ? "bg-neutral-700 p-2 rounded" : ""} flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-700 p-2 rounded`}
                  onClick={() => handleSelect("wind", unit)}
                >
                  
                  <span>{unit}</span>
                  <span>{selectedUnits.wind === unit ? "✓" : ""}</span>
                </div>
              ))}
            </div>

            {/* Precipitation */}
            <div>
              <h5 className="text-neutral-300 text-sm font-semibold mb-1">Precipitation</h5>
              {["Millimeters (mm)", "Inches (in)"].map((unit) => (
                <div
                  key={unit}
                  className={`${selectedUnits.precipitation === unit ? "bg-neutral-700 p-2 rounded" : ""} flex items-center justify-between gap-2 cursor-pointer hover:bg-neutral-700 p-2 rounded`}
                  onClick={() => handleSelect("precipitation", unit)}
                >
                   <span>{unit}</span>
                  <span>{selectedUnits.precipitation === unit ? "✓" : ""}</span>
                 
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
