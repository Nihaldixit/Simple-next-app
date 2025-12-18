export default function TestimonialCard({ text, name, role }) {
  return (
    <div className="rounded-2xl border border-blue-900 bg-white p-6">
      <p className="text-gray-800">{text}</p>

      <div className="mt-6 flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-300" />
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
