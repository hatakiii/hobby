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
  return (
    <div>
      SearchBar
      <div className="flex">
        <input type="text" className="w-100 h-10 border-2 bg-amber-300" />
        <button className="w-20 h-10 bg-blue-500 text-white rounded-4xl flex items-center justify-center">
          Reset
        </button>
      </div>
      {names.map((name) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};
