export default function TransactionsTable() {
    const transactions = [
      { date: "2025-04-01", category: "Food", amount: "₹250" },
      { date: "2025-04-03", category: "Travel", amount: "₹800" },
      { date: "2025-04-04", category: "Bills", amount: "₹500" },
    ];
  
    return (
      <table className="min-w-full bg-white border rounded-lg mt-4">
        <thead>
          <tr className="bg-gray-100 text-left text-sm font-medium text-gray-700">
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Category</th>
            <th className="py-2 px-4">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index} className="border-t text-sm">
              <td className="py-2 px-4">{tx.date}</td>
              <td className="py-2 px-4">{tx.category}</td>
              <td className="py-2 px-4">{tx.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  