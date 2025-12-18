export function FormField({ label, placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border bg-slate-100 px-4 py-2.5
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
