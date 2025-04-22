export default function StatCard({ title, value }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-4 w-full">
        <p className="text-gray-500 text-sm">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
      </div>
    );
  }
  