import React from 'react';

// NotFound component
function NotFound() {
  return (
    // Container div with flex layout to center the content
    <div className="flex justify-center items-center w-full h-full">
      {/* Heading displaying the "Error 404: Not Found" message */}
      <h1 className="text-2xl font-bold">Error 404: Not Found</h1>
    </div>
  );
}

export default NotFound;
