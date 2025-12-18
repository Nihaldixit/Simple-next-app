export default function StatCard({ value, label, color }) {
  const styles = {
    yellow: "bg-yellow-100 border-yellow-400",
    purple: "bg-purple-200 border-purple-400",
  };

  return (
    <div className={`rounded-2xl border p-6 ${styles[color]}`}>
      <div className="text-4xl font-bold text-gray-900">{value}</div>
      <p className="mt-2 text-gray-700">{label}</p>

      {/* Placeholder for chart/image */}
      <div className="mt-6 h-20 rounded-md bg-white/60" />
    </div>
  );
}
