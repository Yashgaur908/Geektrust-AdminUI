import React, { useState, useEffect } from 'react';
import TRow from './TRow';
import THead from './THead';
import { searchQueryFn } from '../utils';

// Panel component to display the table panel with paginated data and search functionality.
function Panel({ data, currentPage, totalPages, searchQuery, setData, setTotalPages }) {
  const [viewableData, setViewableData] = useState([]);

  // Runs on data or page change
  useEffect(() => {
    if (currentPage === 1) {
      // Slice the data to display the current page's portion
      setViewableData(data.slice(0, currentPage * 10));
    } else if (currentPage === totalPages) {
      setViewableData(data.slice((currentPage - 1) * 10, data.length));
    } else {
      setViewableData(data.slice((currentPage - 1) * 10, currentPage * 10));
      setTotalPages(Math.ceil(data.length / 10));
    }

    // If there is a search query, apply filtering
    if (searchQuery.length) {
      searchQueryFn(searchQuery, data, setViewableData, setTotalPages);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, currentPage]);

  // Runs when user searches for anything
  useEffect(() => {
    searchQueryFn(searchQuery, data, setViewableData, setTotalPages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div id='panel-container'>
      <table className='admin-table' id='admin-table'>
        <THead />
        <tbody>
          {viewableData.map((item) => (
            <TRow
              key={item.id}
              searchQuery={searchQuery}
              setData={setData}
              data={data}
              item={item}
              setTotalPages={setTotalPages}
              setViewableData={setViewableData}
            />
          ))}
        </tbody>
      </table>
      {!viewableData.length && (
        <div className='flex justify-center items-center py-[20px]'>
          <h1 className='text-[18px]'>No users found in this page</h1>
        </div>
      )}
    </div>
  );
}

export default Panel;
