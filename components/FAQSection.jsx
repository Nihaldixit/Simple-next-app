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
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Card */}
        <div className="rounded-2xl sm:rounded-3xl border border-blue-500 bg-slate-100 p-6 sm:p-10 lg:p-12">
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-blue-500 px-4 py-1.5 text-xs sm:text-sm font-medium text-blue-600">
              FAQ’s
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-8 sm:mb-10 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          {/* FAQ list */}
          <div className="space-y-5 sm:space-y-6">
            {FAQS.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.q} className="border-b pb-5 sm:pb-6">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-left text-base sm:text-lg font-medium text-gray-900"
                  >
                    <span className="leading-snug">{item.q}</span>
                    <span className="text-2xl leading-none">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base text-gray-700">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA box */}
          <div className="mt-10 sm:mt-12 flex flex-col gap-4 sm:gap-6 rounded-2xl sm:rounded-full border bg-white px-6 sm:px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                Have Questions? We're Here to Help!
              </h4>
              <p className="mt-1 text-sm sm:text-base text-gray-600">
                Reach out to our support team for any queries or assistance.
              </p>
            </div>

            <button className="w-full sm:w-auto rounded-full bg-blue-600 px-6 py-2.5 text-sm sm:text-base font-medium text-white hover:bg-blue-700">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
