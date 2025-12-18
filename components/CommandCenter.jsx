import VerticalDivider from "@/components/ui/VerticalDivider";
import AttendeeIcon from "@/components/ui/icons/AttendeeIcon";
import ExhibitorIcon from "@/components/ui/icons/ExhibitorIcon";
import LogisticsIcon from "@/components/ui/icons/LogisticsIcon";
import StaffIcon from "@/components/ui/icons/StaffIcon";
export default function CommandCenter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
          Your Command Center
        </div>

        {/* Heading */}
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          All Your Event Details,
          <br />
          One Calm Dashboard.
        </h2>

        {/* Features grid */}
        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Feature 1 */}
          <div className="flex gap-4">
            <AttendeeIcon />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Real-time Attendee Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                See all registrations, payments, and check-in statuses at a
                glance.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative flex gap-4 md:pl-12">
            <VerticalDivider />
            <ExhibitorIcon />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Exhibitor & Sponsor ROI
              </h3>
              <p className="mt-2 text-gray-600">
                Manage stall bookings, track payments, and prove value to your
                sponsors.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4">
            <LogisticsIcon />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                On-Site Logistics
              </h3>
              <p className="mt-2 text-gray-600">
                Manage check-in, meal vouchers, and kit distribution from a
                single screen.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative flex gap-4 md:pl-12">
            <VerticalDivider />
            <StaffIcon />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Staff Management
              </h3>
              <p className="mt-2 text-gray-600">
                Coordinate your event staff and volunteers with clear, visible
                assignments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
