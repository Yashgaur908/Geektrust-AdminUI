import React from 'react';
import PaginationItem from './PaginationItem';
import PaginationStartLeft from './PaginationStartLeft';
import PaginationEndRight from './PaginationEndRight';
import PaginationLeft from './PaginationLeft';
import PaginationRight from './PaginationRight';

// Pagination component
function Pagination({ totalPages, currentPage, setCurrentPage }) {
  // Function to handle next page button click
  const nextPage = () => {
    if (currentPage + 1 <= totalPages) setCurrentPage((currentPage) => currentPage + 1);
  };

  // Function to handle last page button click
  const lastPage = () => {
    if (currentPage < totalPages) setCurrentPage(totalPages);
  };

  // Function to handle previous page button click
  const previousPage = () => {
    if (currentPage - 1 >= 1) setCurrentPage((currentPage) => currentPage - 1);
  };

  // Function to handle first page button click
  const firstPage = () => {
    if (currentPage > 1) setCurrentPage(1);
  };

  return (
    <div className='flex my-2 w-300 items-center justify-center'>
      {/* Pagination Start Left component */}
      <PaginationStartLeft onClick={firstPage} disabled={currentPage === 1} />

      {/* Pagination Left component */}
      <PaginationLeft onClick={previousPage} disabled={currentPage === 1} />

      {/* Generate PaginationItem components based on total pages */}
      {new Array(totalPages).fill(-1).map((item, idx) => {
        return (
          <PaginationItem onClickHandler={() => setCurrentPage(idx + 1)} key={idx} active={currentPage === idx + 1}>
            {idx + 1}
          </PaginationItem>
        );
      })}

      {/* Pagination Right component */}
      <PaginationRight onClick={nextPage} disabled={currentPage >= totalPages} />

      {/* Pagination End Right component */}
      <PaginationEndRight onClick={lastPage} disabled={currentPage >= totalPages} />
    </div>
  );
}

export default Pagination;
