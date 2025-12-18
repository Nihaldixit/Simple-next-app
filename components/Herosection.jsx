'use client'
export default function Herosection() {
    return (
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
  
          {/* Logo badge */}
          <div className="mx-auto mb-8 inline-flex items-center rounded-xl border border-blue-500 px-6 py-3">
            <span className="text-lg font-semibold">Anginat</span>
            <span className="ml-1 text-sm text-gray-500">Events</span>
          </div>
  
          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-tight tracking-tight text-gray-900 sm:text-6xl">
            <span className="font-serif italic text-purple-500">
              The one
            </span>{" "}
            platform <br />
            that actually runs your event.
          </h1>
  
          {/* Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Handle everything from registration and ticketing to AI photo
            galleries and exhibitor tracking. All in one place.{" "}
            <span className="italic text-purple-500">Finally.</span>
          </p>
  
          {/* CTA button */}
          <div className="mt-10 flex justify-center">
            <button
              className="inline-flex items-center gap-2 rounded-full
                         bg-blue-600 px-7 py-3 text-white font-medium
                         hover:bg-blue-700 transition-colors
                         focus-visible:outline-none
                         focus-visible:ring-2 focus-visible:ring-blue-500
                         focus-visible:ring-offset-2"
            >
              Get started now
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-blue-600">
                →
              </span>
            </button>
          </div>
  
          {/* Social proof */}
          <div className="mt-10 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-blue-600">
              <div className="flex -space-x-2">
                <img className="h-6 w-6 rounded-full border" src="/avatar1.jpg" />
                <img className="h-6 w-6 rounded-full border" src="/avatar2.jpg" />
                <img className="h-6 w-6 rounded-full border" src="/avatar3.jpg" />
              </div>
              <span>Already powering events for <strong>1000+</strong> organizers.</span>
            </div>
          </div>
  
        </div>
      </section>
    );
  }
  