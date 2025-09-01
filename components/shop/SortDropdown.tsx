"use client";

import { useState } from "react";

type SortDropdownProps = {
  onChange: (sort: string) => void;
};

export default function SortDropdown({ onChange }: SortDropdownProps) {
  const [sort, setSort] = useState("best-selling");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSort(value);
    onChange(value);
  };

  return (
    <div className="mb-6 flex justify-end">
      <label className="mr-2 font-medium text-soil">Sort by:</label>
      <select
        value={sort}
        onChange={handleChange}
        className="rounded-lg border border-sand px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
      >
        <option value="best-selling">Best Selling</option>
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low → High</option>
        <option value="price-high">Price: High → Low</option>
      </select>
    </div>
  );
}
