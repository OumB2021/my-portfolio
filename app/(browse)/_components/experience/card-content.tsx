"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

function CardContent() {
  const [collapsed, setCollapsed] = useState(true);

  const handleClick = () => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <div className="w-full bg-[#3f3f46] rounded-sm shadow-md overflow-hidden">
      {/* Card Header */}
      <div className="flex items-center justify-between p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-[#f4f4f5]">
            Full Stack Web Developer Intern
          </h1>
          <p className="text-[#a1a1aa] tracking-widest ">
            Theramotive - Brooklyn, NY
          </p>
          <p className="text-[#a1a1aa] text-sm tracking-widest ">
            June 2024 - August 2024
          </p>
        </div>
        <button
          className="text-zinc-50 rounded-full bg-[#52525b] p-2 hover:bg-[#a1a1aa]"
          onClick={handleClick}
          aria-expanded={!collapsed}
        >
          {collapsed ? <ChevronDown /> : <ChevronUp />}
        </button>
      </div>

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
  );
}
export default CardContent;
