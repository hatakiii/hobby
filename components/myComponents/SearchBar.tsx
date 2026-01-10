"use client";

import React, { useState } from "react";

export const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "Alex",
    "Alicia",
    "Albert",
    "Brandon",
    "Bella",
    "Catherine",
    "Chris",
    "Daniel",
    "Daisy",
    "Ethan",
    "Eva",
    "Frank",
  ];

  const handleReset = () => {
    setSearch("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const matchCount = names.filter(
    (name) => search && name.toLowerCase().includes(search.toLowerCase())
  ).length;
  return (
    <div>
      SearchBar
      <div className="flex">
        <input
          type="text"
          placeholder="Search user ..."
          value={search}
          onChange={handleChange}
          className="w-100 h-10 border-2 bg-amber-300"
        />
        <button
          onClick={handleReset}
          className="w-20 h-10 bg-blue-500 text-white rounded-4xl flex items-center justify-center"
        >
          Reset
        </button>
      </div>
      {search && (
        <p>
          Found {matchCount} match{matchCount !== 1 ? "es" : ""}
        </p>
      )}
      <ul>
        {names.map((name, idx) => {
          const match =
            search && name.toLowerCase().includes(search.toLowerCase());
          //Энэ бол iteration бүрийн local variable
          return (
            <li
              key={idx}
              style={{
                color: match ? "blue" : "black",
                fontWeight: match ? "bold" : "normal",
                marginBottom: "0.5rem",
              }}
            >
              {name}
            </li>
          );
        })}
      </ul>
      {search && <p>Found match</p>}
    </div>
  );
};
