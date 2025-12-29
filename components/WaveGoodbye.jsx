"use client";

import { useEffect, useState } from "react";
import {
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";

const PHRASES = [
  "photo chaos",
  "lost attendees",
  "manual data entry",
  "long check-in lines",
  "messy spreadsheets",
];

const STATS = [
  { value: "[1,000+]", label: "Events Powered" },
  { value: "[1.5M+]", label: "Attendees Checked In" },
  { value: "[5,000+]", label: "Organizers Onboarded" },
  { value: "[500K+]", label: "Exhibitors Managed" },
  { value: "[3M+]", label: "AI Photos Delivered" },
];

export default function WaveGoodbye() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PHRASES.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white overflow-hidden">
      {/* ================= TOP SECTION ================= */}
      <div className="flex items-center h-[280px] px-24">
        {/* Left */}
        <div className="flex-1">
          <h1 className="text-[3.2rem] font-bold text-neutral-900">
            Wave goodbye to
          </h1>
        </div>

        {/* Right animated phrases */}
        <div className="flex-1 relative h-[160px]">
          <div className="absolute top-0 left-0">
            {PHRASES.map((text, index) => {
              const offset =
                (index - activeIndex + PHRASES.length) % PHRASES.length;

              return (
                <span
                  key={text}
                  className={`absolute left-0 whitespace-nowrap transition-all duration-700 ease-in-out
                    ${
                      offset === 0
                        ? "text-blue-500 italic font-medium"
                        : "text-neutral-300"
                    }
                  `}
                  style={{
                    transform: `translateY(${offset * 42}px)`,
                    opacity: offset === 0 ? 1 : 0.25,
                  }}
                >
                  <span className="text-[2.4rem]">{text}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white py-14">
        {/* timeline line */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-px bg-blue-200" />

        <div className="relative flex justify-between px-24">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-1/5"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-4 shadow-md">
                <CalendarDaysIcon className="w-6 h-6 text-white" />
              </div>

              {/* Value */}
              <p className="text-lg font-semibold text-neutral-900">
                {stat.value}
              </p>

              {/* Label */}
              <p className="text-sm text-neutral-600 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
