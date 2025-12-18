export default function FeatureItem({ children }) {
  return (
    <li className="flex items-center gap-4 border-b border-purple-200 pb-4">
      <span
        className="flex h-7 w-7 items-center justify-center
                     rounded-full bg-gradient-to-r
                     from-blue-500 to-purple-500 text-white text-sm"
      >
        ✓
      </span>
      <span className="text-gray-900">{children}</span>
    </li>
  );
}
