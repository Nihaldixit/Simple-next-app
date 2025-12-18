import { FormField } from "@/components/ui/FormField";
import { FormTextarea } from "@/components/ui/FormTextArea";

export default function ContactSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-6 inline-flex rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600">
              Contact
            </div>

            {/* Heading */}
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              We’d Love to Hear <br /> From You
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-lg text-gray-600">
              Contact us for inquiries, support, or feedback. We're here to
              assist you every step of the way.
            </p>

            {/* Contact actions */}
            <div className="mt-10 space-y-4 max-w-md">
              {/* Email */}
              <div className="flex items-center justify-between rounded-full border border-blue-500 px-5 py-3">
                <div className="flex items-center gap-3 text-gray-900">
                  <span className="text-blue-600">✉️</span>
                  info@anginatevents.com
                </div>
                <button className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                  Email Us
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between rounded-full border border-blue-500 px-5 py-3">
                <div className="flex items-center gap-3 text-gray-900">
                  <span className="text-blue-600">📞</span>
                  +91 0000000000
                </div>
                <button className="rounded-full bg-blue-600 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
                  Contact Us
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl border-2 border-blue-600 p-8">
            <h3 className="mb-6 text-2xl font-semibold text-gray-900">
              Send us your query
            </h3>

            <form className="space-y-5">
              <FormField label="Name" placeholder="Enter Your Name" />
              <FormField label="E-mail" placeholder="Enter Your Email" />
              <FormTextarea label="Message" placeholder="Enter Your Message" />

              <button
                type="submit"
                className="rounded-full bg-blue-600 px-6 py-2.5 text-white font-medium
                             hover:bg-blue-700 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
