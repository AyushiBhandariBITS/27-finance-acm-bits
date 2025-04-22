import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard title="Monthly Spend" value="₹42,000" />
        <StatCard title="Top Category" value="Food & Dining" />
        <StatCard title="Savings Rate" value="18%" />
      </div>
      <div className="bg-white rounded-2xl shadow-md p-6 h-64">
        {/* Placeholder for chart */}
        <p className="text-center text-gray-400 mt-20">[ Chart Coming Soon ]</p>
      </div>
    </div>
  );
}
