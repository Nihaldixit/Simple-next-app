export default function Footer() {
  return (
    <footer className="bg-white pt-24 md-4">
      <div className="mx-auto max-w-7xl px-6">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <div className="text-2xl font-bold text-gray-900">
                Anginat
                <span className="ml-1 text-sm font-normal text-gray-600">
                  Events
                </span>
              </div>
            </div>

            <p className="mb-6 max-w-xs text-gray-700">
              <span className="text-blue-600 font-medium">The One</span>{" "}
              Platform That Actually Runs Your Event.
            </p>

            <div className="space-y-3 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-blue-600">✉️</span>
                info@anginatevents.com
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-600">📞</span>
                +91 0000000000
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Platform</h4>
            <ul className="space-y-3 text-gray-700">
              <li>Solutions</li>
              <li>Blogs</li>
              <li>Case Studies</li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">About</h4>
            <ul className="space-y-3 text-gray-700">
              <li>Our Story</li>
              <li>Benefits</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-semibold text-gray-900">Follow Us</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span>📘</span> Facebook
              </li>
              <li className="flex items-center gap-3">
                <span>🐦</span> Twitter
              </li>
              <li className="flex items-center gap-3">
                <span>📸</span> Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t pt-6 text-sm text-gray-600 md:flex-row">
          <p>© 2025 Anginat Events. All rights reserved.</p>

          <div className="flex gap-6">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
