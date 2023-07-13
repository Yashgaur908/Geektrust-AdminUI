import React from 'react';
import Searchbar from './Searchbar';

// Header component
function Header({ searchQuery, setSearchQuery }) {
  return (
    <div className="font-bold py-4 text-center">
      {/* Admin Panel title */}
      <h1 className="text-3xl">Admin Panel</h1>
      <div className="mt-3">
        {/* Searchbar component */}
        <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
}

export default Header;
