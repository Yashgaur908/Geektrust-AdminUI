import React from 'react';

// Searchbar component
function Searchbar({ searchQuery, setSearchQuery }) {
  
  // Event handler for text input
  const textHandler = (event) => {
    setSearchQuery(event.target.value);
  }

  return (
    <div className='flex justify-center items-center w-[100%]'>
      {/* Input field for search */}
      <input
        style={{ borderColor: 'black' }}
        className='p-[5px] w-[90%] text-[15px] border-[1px] text-center'
        type='text'
        value={searchQuery}
        onChange={textHandler}
        placeholder='Search by name, email or role'
      />
    </div>
  );
}

export default Searchbar;
