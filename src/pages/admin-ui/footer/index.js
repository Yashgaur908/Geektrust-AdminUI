import React from 'react';
import Button from '../../../common/button/Button';
import { updateUIAndPageOnDelete } from '../utils';
import Pagination from './pagination';

// Footer component
function Footer({ totalPages, setTotalPages, currentPage, setCurrentPage, data, setData }) {
  // Handler for deleting selected checkboxes
  const deleteSelectedCheckHandler = () => {
    // Array to store the IDs of selected checkboxes
    const ids = [];

    // Get all checkboxes and add the IDs of checked checkboxes to the array
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) ids.push(checkbox.id);
    });

    // Uncheck the main checkbox in the header
    document.getElementById('checkBoxHead').checked = false;

    // Filter data to exclude items with IDs in the "ids" array
    const filtered = data.filter((item) => !ids.includes(item.id));

    // Update UI and pagination after deleting selected items
    updateUIAndPageOnDelete(filtered, setData, setTotalPages);
  };

  return (
    <div className='relative mt-[15px] mobile:flex-col mobile:gap-[25px] medium:flex-col desktop:ml-[10px] flex justify-center items-center'>
      {/* Delete Selected button */}
      <div className='desktop:absolute desktop:left-[10px]' onClick={deleteSelectedCheckHandler}>
        <Button>Delete Selected</Button>
      </div>
      
      {/* Pagination component */}
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default Footer;
