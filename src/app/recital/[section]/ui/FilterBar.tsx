"use client";
import { useState } from "react";

const filters = ["All", "New", "Sale", "Featured"];

export default function FilterBar() {
  const [active, setActive] = useState("All");
  return (
    <div className="flex gap-2 flex-wrap mb-6">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setActive(f)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === f
              ? "bg-[#13292A] text-white"
              : "bg-[#F5E1DB] text-[#13292A] hover:bg-[#F2C9D8]"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
