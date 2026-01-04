"use client";
import { useState } from "react";

const STEP1_SUBTABS = {
  TYPE: "type",
  LOCATION: "location",
  DATE: "date",
};

export default function EventQuoteWizard() {
  const [step, setStep] = useState(1);
  const [step1Tab, setStep1Tab] = useState(STEP1_SUBTABS.TYPE);

  const [data, setData] = useState({
    type: "",
    city: "",
    venue: "",
    date: "",
    services: [],
  });

  const toggleService = (service) => {
    setData((p) => ({
      ...p,
      services: p.services.includes(service)
        ? p.services.filter((s) => s !== service)
        : [...p.services, service],
    }));
  };

  const step1Status = {
    type: !!data.type,
    location: !!data.city,
    date: !!data.date,
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-start md:items-center px-4 py-6 md:py-0">
      <div className="w-full max-w-6xl rounded-2xl border p-5 sm:p-6 md:p-10 shadow-sm">
        {/* ===== Heading ===== */}
        <div className="text-center mb-10 px-2">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Get Your Custom Event Quote in{" "}
            <span className="text-blue-600 italic">&lt;1 min.</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-500 max-w-2xl mx-auto">
            No sales calls. No hidden fees. Just a transparent estimate for your
            next flawless event.
          </p>
        </div>

        {/* ===== MAIN STEPS ===== */}
        <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-between mb-10 text-xs sm:text-sm font-medium">
          {[1, 2, 3].map((s) => (
            <button
              key={s}
              onClick={() => s < step && setStep(s)}
              className={`flex items-center gap-2 ${
                step >= s ? "text-blue-600" : "text-gray-400"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  step > s
                    ? "bg-purple-600 text-white border-purple-600"
                    : step === s
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-300"
                }`}
              >
                {step > s ? "✓" : s}
              </div>
              {s === 1 && "Tell us about your event"}
              {s === 2 && "Choose your on-site services"}
              {s === 3 && "Get your instant estimate"}
            </button>
          ))}
        </div>

        {/* ================= STEP 1 ================= */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* SUB TABS */}
            <div className="space-y-4">
              {[
                { key: STEP1_SUBTABS.TYPE, label: "Choose event type", index: 1 },
                { key: STEP1_SUBTABS.LOCATION, label: "Where is your event?", index: 2 },
                { key: STEP1_SUBTABS.DATE, label: "When is your event?", index: 3 },
              ].map(({ key, label, index }) => {
                const completed = step1Status[key];
                const active = step1Tab === key;

                return (
                  <button
                    key={key}
                    onClick={() => setStep1Tab(key)}
                    className={`flex items-center gap-4 w-full p-4 sm:p-5 rounded-xl border transition
                      ${
                        completed
                          ? "border-transparent"
                          : active
                          ? "border-blue-600"
                          : "border-gray-300"
                      }
                    `}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                        ${
                          completed
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : active
                            ? "border-2 border-blue-600 text-blue-600"
                            : "border-2 border-gray-300 text-gray-400"
                        }
                      `}
                    >
                      {completed ? "✓" : index}
                    </div>

                    <span
                      className={`text-left text-sm sm:text-base ${
                        completed
                          ? "text-gray-900"
                          : active
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                    >
                      {label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* RIGHT PANEL */}
            <div className="border rounded-xl p-4 sm:p-6 space-y-4">
              {step1Tab === STEP1_SUBTABS.TYPE && (
                <>
                  <p className="font-semibold">Event Type</p>
                  {[
                    "Conference / Trade Show",
                    "Corporate / Internal Event",
                    "Awards / Gala",
                    "Workshop / Seminar",
                    "Other",
                  ].map((type) => (
                    <label key={type} className="flex gap-2 text-sm sm:text-base">
                      <input
                        type="radio"
                        checked={data.type === type}
                        onChange={() => setData((p) => ({ ...p, type }))}
                      />
                      {type}
                    </label>
                  ))}
                </>
              )}

              {step1Tab === STEP1_SUBTABS.LOCATION && (
                <>
                  <input
                    className="w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base"
                    placeholder="Enter City"
                    value={data.city}
                    onChange={(e) =>
                      setData((p) => ({ ...p, city: e.target.value }))
                    }
                  />
                  <input
                    className="w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base"
                    placeholder="Enter Venue"
                    value={data.venue}
                    onChange={(e) =>
                      setData((p) => ({ ...p, venue: e.target.value }))
                    }
                  />
                </>
              )}

              {step1Tab === STEP1_SUBTABS.DATE && (
                <input
                  type="date"
                  className="w-full border rounded-lg p-3 sm:p-4 text-sm sm:text-base"
                  value={data.date}
                  onChange={(e) =>
                    setData((p) => ({ ...p, date: e.target.value }))
                  }
                />
              )}
            </div>

            {/* STEP 1 NAV */}
            <div className="md:col-span-2 flex justify-end">
              <button
                onClick={() => setStep(2)}
                className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full"
              >
                Next →
              </button>
            </div>
          </div>
        )}

        {/* ================= STEP 2 ================= */}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold mb-8">
              Which physical services do you need?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                ["Registration Staff", "Tech Support", "General Staff"],
                ["Breakfast", "Lunch", "Dinner"],
                ["Basic Kit", "Premium Kit"],
              ].map((group, i) => (
                <div key={i}>
                  {group.map((s) => (
                    <label key={s} className="flex gap-2 mb-2 text-sm sm:text-base">
                      <input
                        type="checkbox"
                        onChange={() => toggleService(s)}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-10">
              <button
                onClick={() => setStep(1)}
                className="border px-6 py-3 rounded-full"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="bg-blue-600 text-white px-6 py-3 rounded-full"
              >
                View My Quote →
              </button>
            </div>
          </>
        )}

        {/* ================= STEP 3 ================= */}
        {step === 3 && (
          <>
            <h2 className="text-2xl font-semibold mb-6">
              Here's Your Custom Event Package
            </h2>

            <ul className="space-y-2 mb-8 text-sm sm:text-base">
              <li>✓ Platform License (All Features)</li>
              {data.services.map((s) => (
                <li key={s}>✓ {s}</li>
              ))}
            </ul>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-start sm:items-center">
              <div>
                <p className="text-sm">Total Estimated Price</p>
                <p className="text-2xl font-bold">₹X,XXX</p>
              </div>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full">
                Book a Demo
              </button>
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-6 text-blue-600 text-sm sm:text-base"
            >
              ← Back to services
            </button>
          </>
        )}
      </div>
    </div>
  );
}
