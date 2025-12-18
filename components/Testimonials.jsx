import StatCard from "@/components/ui/StatCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-6 flex justify-center">
          <span className="rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
            Testimonials
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          How Flawless Events Get Made.
        </h2>

        {/* Grid */}
        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-3">
          {/* Stat card */}
          <StatCard
            value="90%"
            label="Faster Attendee Check-in"
            color="yellow"
          />

          {/* Stat card */}
          <StatCard
            value="4X"
            label="Higher Sponsor Re-bookings"
            color="purple"
          />

          {/* Testimonial */}
          <TestimonialCard
            text="Anginat Events turned our 3-day conference into a smooth operation. The exhibitor management and real-time analytics were a game-changer. We're never going back to spreadsheets."
            name="John Matthews"
            role="Conference Director"
          />

          {/* Testimonial */}
          <TestimonialCard
            text="The AI photo gallery was the star of our awards gala. Our attendees felt like celebrities, and our social media engagement went through the roof. Flawless execution from start to finish."
            name="Sarah Collins"
            role="Gala Coordinator"
          />

          {/* Testimonial */}
          <TestimonialCard
            text="We manage over 50 internal events a year. Anginat gives us a single, reliable dashboard for everything. It has saved our team countless hours in manual data entry and reporting."
            name="David Chen"
            role="Corporate Events Lead"
          />

          {/* Stat card */}
          <StatCard
            value="50%"
            label="Less Admin & Spreadsheet Work"
            color="yellow"
          />

          {/* Stat card */}
          <StatCard
            value="4X"
            label="Higher Sponsor Re-bookings"
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}
