import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
  const [newValue, setNewValue] = useState(""); // For input field

  function handleEvent(e) {
    e.preventDefault();
    if (newValue === "") return;
    onSubmit(newValue);
    setNewValue("");
  }

  return (
    <form onSubmit={handleEvent} className="max-w-md mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="item" className="block text-gray-700 text-sm font-medium mb-2">
          New Item
        </label>
        <input
          type="text"
          id="item"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
      >
        ADD
      </button>
    </form>
  );
}
