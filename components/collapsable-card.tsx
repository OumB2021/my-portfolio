"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function CollapsableCard() {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };
  return (
    <div className="max-w-7xl mt-4">
      <div className="w-full bg-gradient-to-tl from-zinc-900 to-zinc-800 rounded-xl shadow-md overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between p-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-zinc-50">
              Full Stack Web Developer Intern
            </h1>
            <p className="text-zinc-400 tracking-widest font-semibold">
              Theramotive - Brooklyn, NY
            </p>
          </div>
          <button
            className="text-zinc-50 rounded-full bg-zinc-700 p-2 hover:bg-zinc-400"
            onClick={handleClick}
            aria-expanded={!collapsed}
          >
            {collapsed ? <ChevronDown /> : <ChevronUp />}
          </button>
        </div>
        {/* Expandable Content */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            collapsed ? "max-h-0 opacity-0" : "max-h-96 opacity-100"
          }`}
        >
          <div className="p-6 text-zinc-50">
            <h2 className="text-xl font-semibold">Job Experience Details</h2>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Managed a team of 10 bakers and staff.</li>
              <li>Implemented a new inventory management system.</li>
              <li>Increased sales by 20% over one year.</li>
              {/* Add more bullet points as needed */}
            </ul>
            <h3 className="text-lg font-semibold mt-6">Promotions and Years</h3>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Assistant Manager (2018 - 2019)</li>
              <li>Store Manager (2019 - 2021)</li>
              <li>Regional Manager (2021 - Present)</li>
              {/* Add more promotions and years as needed */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CollapsableCard;
