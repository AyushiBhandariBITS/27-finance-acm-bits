import FeedbackForm from "../components/FeedbackForm";

export default function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Settings</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium">Name</label>
        <input className="border p-2 rounded w-full" placeholder="Ayushi Bhandari" />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input className="border p-2 rounded w-full" placeholder="ayushi@example.com" />
      </div>
      <FeedbackForm />
    </div>
  );
}
