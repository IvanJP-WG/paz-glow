"use client";

import { useState } from "react";

type ShopFilters = {
  concern: string[];
  category: string[];
  vegan: string[];
  fragranceFree: string[];
};


type FilterProps = {
  onChange: (filters: ShopFilters) => void; // <-- use same type
};

const initialFilters: ShopFilters = {
  concern: [],
  category: [],
  vegan: [],
  fragranceFree: [],
};

export default function Filters({ onChange }: FilterProps) {
  const [filters, setFilters] = useState(initialFilters);

  const options = {
    concern: ["Dryness", "Dullness", "Sensitivity", "Texture"],
    category: ["Cleansers", "Moisturizers", "Masks", "Ritual Sets"],
    vegan: ["Yes", "No"],
    fragranceFree: ["Yes", "No"],
  };

  const toggleFilter = (type: keyof typeof filters, value: string) => {
    let updated = [...filters[type]];
    if (updated.includes(value)) {
      updated = updated.filter((v) => v !== value);
    } else {
      updated.push(value);
    }
    const newFilters = { ...filters, [type]: updated };
    setFilters(newFilters);
    onChange(newFilters);
  };

  const clearFilters = () => {
    setFilters(initialFilters);
    onChange(initialFilters);
  };

  return (
    <aside className="w-72 p-6 bg-sand rounded-2xl shadow-md">
      <div>
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {Object.entries(options).map(([key, values]) => (
        <div key={key} className="mb-6">
          <h3 className="font-medium mb-2 capitalize">{key}</h3>
          <div className="flex flex-col gap-2">
            {values.map((value) => (
              <label key={value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters[key as keyof typeof filters].includes(value)}
                  onChange={() => toggleFilter(key as keyof typeof filters, value)}
                  className="accent-clay"
                />
                <span className="text-soil">{value}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
      </div>
      <button
        onClick={clearFilters}
        className="mt-4 w-full py-2 bg-soil text-white rounded-lg hover:bg-clay transition"
      >
        Remove All Filters
      </button>
    </aside>
  );
}
