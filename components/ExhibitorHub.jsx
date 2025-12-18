import FeatureItem from "@/components/ui/FeatureItem";

export default function ExhibitorHub() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Badge */}
        <div className="mb-6 inline-flex rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
          The Exhibitor Hub
        </div>

        {/* Heading */}
        <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          More than a floor plan.
          <br />
          An ROI machine.
        </h2>

        {/* Subheading */}
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          We put your entire floor plan into one command center.
        </p>

        {/* Feature list */}
        <ul className="mt-10 max-w-xl space-y-5">
          <FeatureItem>Live Floor Plan Management</FeatureItem>
          <FeatureItem>Digital Lead Capture</FeatureItem>
          <FeatureItem>Instant Exhibitor ROI</FeatureItem>
          <FeatureItem>Centralized Admin Hub</FeatureItem>
        </ul>
      </div>
    </section>
  );
}
