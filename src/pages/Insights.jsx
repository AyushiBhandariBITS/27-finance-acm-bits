import SpendingChart from "../components/SpendingChart";

export default function Insights() {
  const overspending = true;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Spending Insights</h2>
      <SpendingChart />
      <div className="mt-6 p-4 rounded-lg bg-gray-100">
        <h3 className="text-lg font-medium">Recommendations</h3>
        <ul className="list-disc pl-5 text-sm mt-2">
          <li>Reduce eating out expenses.</li>
          <li>Use public transport more often.</li>
        </ul>
      </div>
      <div className="mt-4 p-4 rounded-lg text-white" style={{ backgroundColor: overspending ? '#f87171' : '#34d399' }}>
        {overspending ? "⚠️ You're overspending in some categories!" : "✅ You're on track this month!"}
      </div>
    </div>
  );
}
