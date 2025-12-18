"use client";

import { useState } from "react";

const TABS = [
  "Conferences & Trade Show",
  "Corporate & Internal Events",
  "Awards & Galas",
  "Workshops & Seminars",
];

const CONTENT = {
  "Conferences & Trade Show": {
    title: "Insights for Your Conference & Expo",
    cta: "Book a Conference Demo",
    points: [
      {
        title: "4X Higher Sponsor Re-bookings",
        text: "Our exhibitor hub proves sponsor ROI with digital lead capture and real-time dashboards.",
      },
      {
        title: "90% Faster Attendee Check-in",
        text: "Eliminate registration lines with high-speed QR scanning and on-demand badge printing.",
      },
    ],
    features: [
      "Exhibitor Management",
      "Digital Lead Capture",
      "On-Demand Badging",
      "Real-Time Analytics",
    ],
  },

  "Corporate & Internal Events": {
    title: "Your Internal Events, Simplified.",
    cta: "Book an Internal Demo",
    points: [
      {
        title: "50% Less Admin Work",
        text: "Stop managing town halls with spreadsheets. Use one dashboard for everything.",
      },
      {
        title: "100% Attendee Accountability",
        text: "Track attendance, kits, and meals with QR check-in and kit management.",
      },
    ],
    features: [
      "Custom Registration Forms",
      "Staff Management",
      "Kit & Meal Tracking",
      "Feedback Surveys",
    ],
  },

  "Awards & Galas": {
    title: "Where Elegance Meets Efficiency.",
    cta: "Book a Gala Demo",
    points: [
      {
        title: "Elevate the Guest Experience",
        text: "Sell tickets, manage table seating, and eliminate check-in lines with QR scanning.",
      },
      {
        title: "Instant 'Wow' Moments",
        text: "AI photo galleries create personal galleries guests can instantly share.",
      },
    ],
    features: [
      "AI Photo Gallery",
      "Seamless Ticketing",
      "VIP & Table Management",
      "QR Code Check-In",
    ],
  },

  "Workshops & Seminars": {
    title: "Focus on the Content, Not the Chaos.",
    cta: "Start Your Workshop",
    points: [
      {
        title: "Effortless Session Management",
        text: "Manage multi-track or multi-day events with custom schedules.",
      },
      {
        title: "Measure Your Impact",
        text: "Use analytics and feedback tools to measure workshop success.",
      },
    ],
    features: [
      "Custom Multi-Track Forms",
      "Analytics & Feedback",
      "On-Demand Badging",
      "Attendee Communication",
    ],
  },
};

export default function UseCases() {
  const [active, setActive] = useState(TABS[0]);
  const data = CONTENT[active];

  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* SECTION HEADING */}
        <div className="mb-14 text-center">
          <span className="inline-flex rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
            Solutions by Event Type
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            How Anginat powers your <br className="hidden sm:block" />
            entire event portfolio.
          </h2>
        </div>
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition
                ${
                  active === tab
                    ? "border-blue-600 bg-blue-50 text-blue-600"
                    : "border-gray-300 text-gray-700 hover:border-blue-400"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-blue-500 bg-white p-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Left */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900">{data.title}</h3>

              <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700">
                {data.cta}
                <span className="rounded-full bg-white px-2 text-blue-600">
                  →
                </span>
              </button>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {data.points.map((p) => (
                <div key={p.title}>
                  <h4 className="font-semibold text-gray-900">{p.title}</h4>
                  <p className="mt-1 text-gray-600">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {data.features.map((f) => (
              <div key={f} className="flex items-center gap-3 text-gray-800">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm">
                  ✓
                </span>
                {f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
