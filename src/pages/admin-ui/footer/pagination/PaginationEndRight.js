import React from 'react';

// PaginationEndRight component
function PaginationEndRight({ onClick, disabled }) {
  return (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="matrix(-1, 0, 0, -1, 0, 0)"
      role='button'
      onClick={onClick}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        {/* Right arrow path */}
        <path
          d="M19 19L12.7071 12.7071C12.3166 12.3166 12.3166 11.6834 12.7071 11.2929L19 5"
          stroke={disabled ? '#dddddd' : 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        {/* Left arrow path */}
        <path
          d="M11 19L4.70711 12.7071C4.31658 12.3166 4.31658 11.6834 4.70711 11.2929L11 5"
          stroke={disabled ? '#dddddd' : 'black'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}

export default PaginationEndRight;
