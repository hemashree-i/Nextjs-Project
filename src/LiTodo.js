export default function LiTodo({ id, completed, title, handleToggle, todoDelete }) {
  return (
    <li key={id} className="flex items-center justify-between p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow-md">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => handleToggle(id, e.target.checked)}
          className="h-4 w-4 text-blue-500 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
        />
        <span className={`text-gray-900 ${completed ? 'line-through text-gray-500' : ''}`}>{title}</span>
      </label>
      <button
        onClick={() => todoDelete(id)}
        className="text-red-500 hover:text-red-700 transition-colors duration-200"
      >
        Delete
      </button>
    </li>
  );
}
