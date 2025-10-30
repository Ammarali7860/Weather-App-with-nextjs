"use client";
import Image from "next/image";
import React, { useState } from "react";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Berlin",
    "New York",
    "Tokyo",
    "London",
  ];

  const changeHandler = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 0) {
      const filteredCities = cities.filter((city) =>
        city.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredCities);
    } else  {
      setSuggestions([])
    }
  };

  const queryHandler = (city) => {
    setQuery(city);
    setSuggestions([]); // dropdown hide
  };

  return (
    <div className="relative w-full flex justify-center items-center gap-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full justify-center items-center gap-3"
      >
        <div className="relative flex w-[40%] bg-neutral-800 p-4 rounded-xl gap-4">
          <Image
            src="/images/icon-search.svg"
            alt="search icon"
            width={20}
            height={20}
          />

          <input
            className="bg-transparent text-neutral-0 w-full outline-none"
            type="text"
            placeholder="Search for a place..."
            onChange={changeHandler}
            value={query}
          />

          {/* Dropdown suggestions */}
          {suggestions.length > 0 && (
            <div className="custom-scrollbar absolute top-full left-0 w-full bg-neutral-800 mt-2 rounded-xl shadow-lg z-10 max-h-fit overflow-y-auto py-2">
              {suggestions.map((city, index) => (
                <div
                  key={index}
                  onClick={() => queryHandler(city)}
                  className="px-4 py-2 mx-4 y-2 hover:bg-neutral-700 rounded cursor-pointer"
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="bg-customBlue-500 rounded-xl px-8 py-4"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
