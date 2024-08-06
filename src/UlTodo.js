import React from 'react';

// Define inline styles or use a CSS-in-JS approach
const ulStyle = {
  maxWidth: '32rem', // Tailwind's max-w-lg
  margin: '0 auto',
  padding: '1rem',
  backgroundColor: '#f0f4f8', // Light grey-blue background
  border: '1px solid #d1d5db', // Tailwind's border-gray-300
  borderRadius: '0.5rem', // Tailwind's rounded-lg
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Slightly stronger shadow
  listStyleType: 'none',
  paddingLeft: 0,
  color: '#333333',
};

const noListStyle = {
  color: '#9ca3af', // Tailwind's text-gray-400
  textAlign: 'center',
  padding: '1rem 0',
  fontSize: '1.125rem', // Tailwind's text-lg
};

const LiTodoStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '0.75rem',
  borderBottom: '1px solid #d1d5db', // Tailwind's border-gray-300
  backgroundColor: '#ffffff', // White background for items
  borderRadius: '0.375rem', // Tailwind's rounded-md
  color: '#333333', // Dark gray text color
};


const DeleteButtonStyle = {
  backgroundColor: '#ec4899', // Tailwind's pink-500
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '0.375rem', // Tailwind's rounded-md
  cursor: 'pointer',
  fontSize: '0.875rem', // Tailwind's text-sm
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  marginLeft: '0.5rem',
};

const DeleteButtonHoverStyle = {
  backgroundColor: '#d946ef', // Tailwind's pink-600
};

const DeleteButtonActiveStyle = {
  transform: 'scale(0.95)', // Slight scale-down effect on click
};

export default function UlTodo({ todos, todoDelete, handleToggle }) {
  return (
    <ul style={ulStyle}>
      {todos.length === 0 ? (
        <li style={noListStyle}>No List</li>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} style={LiTodoStyle}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggle(todo.id)}
              style={{ marginRight: '0.5rem' }}
            />
            <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'line-through' }}>
              {todo.text}
            </span>
            <button
              style={DeleteButtonStyle}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = DeleteButtonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = DeleteButtonStyle.backgroundColor}
              onMouseDown={(e) => e.currentTarget.style.transform = DeleteButtonActiveStyle.transform}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
              onClick={() => todoDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
}
