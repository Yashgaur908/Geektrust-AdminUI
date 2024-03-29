import React from 'react';

// PaginationRight component
function PaginationRight({ onClick, disabled }) {
  return (
    <svg
      onClick={onClick}
      role='button'
      width="28px"
      height="28px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Right arrow path */}
      <path
        d="M9.5 5L15.7929 11.2929C16.1834 11.6834 16.1834 12.3166 15.7929 12.7071L9.5 19"
        stroke={disabled ? '#dddddd' : 'black'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default PaginationRight;
