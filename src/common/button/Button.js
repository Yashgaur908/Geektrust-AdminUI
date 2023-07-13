import React from 'react';

function Button({ children }) {
  return (
    // Button component
    <button
      className="px-4 py-2 text-white font-bold rounded-md bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out focus:outline-none"
    >
      {/* Render the children of the Button component */}
      {children}
    </button>
  );
}

export default Button;
