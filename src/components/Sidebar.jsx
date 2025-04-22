import { Home, PieChart, CreditCard, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-lg p-4">
      <h1 className="text-2xl font-bold mb-8">SmartSpend</h1>
      <ul className="space-y-4">
        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-black">
          <Home size={20} /> Dashboard
        </li>
        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-black">
          <PieChart size={20} /> Insights
        </li>
        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-black">
          <CreditCard size={20} /> Transactions
        </li>
        <li className="flex items-center gap-2 text-gray-700 font-medium hover:text-black">
          <Settings size={20} /> Settings
        </li>
      </ul>
    </div>
  );
}
