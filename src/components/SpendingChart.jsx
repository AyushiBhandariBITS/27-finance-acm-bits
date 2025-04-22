import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { category: "Food", amount: 300 },
  { category: "Travel", amount: 450 },
  { category: "Shopping", amount: 200 },
  { category: "Bills", amount: 500 },
];

export default function SpendingChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#6366f1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
