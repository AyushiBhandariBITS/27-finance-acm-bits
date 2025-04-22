import TransactionsTable from "../components/TransactionsTable";

export default function Transactions() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Transactions</h2>
      <TransactionsTable />
    </div>
  );
}
