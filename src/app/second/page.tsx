"use client";

import { TextField } from "@/components/ui/text-field";
import { Metadata } from "next";
import { ChangeEvent, useState } from "react";

export const metadata: Metadata = {
  title: "Search algorithms - Second Page",
};

export default function ThirdPage() {
  const data = [
    "Danawi Liam",
    "Tarjaya",
    "Daruna",
    "Warsoni",
    "John Wick",
    "Hadi PS",
    "Derian Lekso",
  ];

  const [query, setQuery] = useState<string>("");
  const [filteredData, setFilteredData] = useState<string[]>(data);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    // Filter data yang cocok dengan query (case insensitive)
    const results = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(results);
  };
  return (
    <div className="flex flex-col h-screen gap-6 bg-primary-500 dark:bg-neutral-800 justify-center items-center">
      <h3 className="text-3xl font-bold text-white ">Search algorithms</h3>
      <div className="flex flex-col gap-6 justify-center w-1/2 items-center">
        <TextField
          placeholder="Search"
          className="w-1/2"
          onChange={handleSearch}
        />
        <div className="flex flex-col  items-center">
          <p className="text-xl text-white font-bold">Data</p>
          <div className="flex gap-3">
            {filteredData.map((item) => {
              return (
                <div
                  key={item}
                  className="p-2 bg-white dark:bg-neutral-700 rounded-md text-lg"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
