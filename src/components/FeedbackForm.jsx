import { useState } from "react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  return (
    <div className="mt-4">
      <textarea
        className="w-full border rounded p-2 text-sm"
        rows="4"
        placeholder="How well was the plan made? Share your feedback..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button className="mt-2 bg-indigo-500 text-white py-1 px-4 rounded">
        Submit Feedback
      </button>
    </div>
  );
}
