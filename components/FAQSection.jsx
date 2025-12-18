"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Do I need to be a tech expert to use this?",
    a: "No. Our “calm dashboard” is designed for event organizers, not coders. It’s intuitive, clean, and as easy to use as a social media app.",
  },
  {
    q: "What happens if I need help during my event?",
    a: "We’re with you. We provide dedicated on-site and remote support to act as your tech team, ensuring your event day runs flawlessly.",
  },
  {
    q: "Do I need to buy or rent special scanners for QR check-in?",
    a: "No. Our secure app turns any smartphone or tablet into a high-speed scanner. Your team can use the hardware you already own to eliminate lines.",
  },
  {
    q: "Can your platform really handle my 5,000-person conference?",
    a: "Yes. Our platform is built for high-volume events and reliably scales from 100 to 10,000+ attendees, including complex registration and exhibitor needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-5xl px-6">
        {/* Card */}
        <div className="rounded-3xl border border-blue-500 bg-slate-100 p-12">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
              FAQ’s
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          {/* FAQ list */}
          <div className="space-y-6">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.q} className="border-b pb-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between text-left text-lg font-medium text-gray-900"
                  >
                    {item.q}
                    <span className="text-2xl">{isOpen ? "×" : "+"}</span>
                  </button>

                  {isOpen && (
                    <p className="mt-4 max-w-3xl text-gray-700">{item.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA box */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-full border bg-white px-8 py-6 sm:flex-row">
            <div>
              <h4 className="text-lg font-semibold text-gray-900">
                Have Questions? We're Here to Help!
              </h4>
              <p className="text-gray-600">
                Reach out to our support team for any queries or assistance.
              </p>
            </div>

            <button className="rounded-full bg-blue-600 px-6 py-2.5 text-white font-medium hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
