import React, { useEffect, useState } from 'react';
import Footer from './footer';
import Header from './header';
import Panel from './panel';
import axios from 'axios';

// AdminUIPanel component
function AdminUIPanel() {
  // State variables
  const [data, setData] = useState([]); // Data from API
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [searchQuery, setSearchQuery] = useState(''); // Search query

  // Fetch data from API on page load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json');
        setData(result.data);
        setTotalPages(Math.ceil(result.data.length / 10));
        setCurrentPage(1);
      } catch (error) {
        throw new Error("Error: Couldn't fetch data!");
      }
    };

    fetchData();
  }, []);

  return (
    <div data-testId="adminUI-panel">
      {/* Render the Header component */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Render the Panel component if data exists */}
      {data.length ? (
        <Panel
          searchQuery={searchQuery}
          setTotalPages={setTotalPages}
          totalPages={totalPages}
          currentPage={currentPage}
          data={data}
          setData={setData}
        />
      ) : (
        // Render a message if no records exist
        <div className="w-full flex justify-center items-center py-4">
          <h1 className="text-lg font-bold">No records exist</h1>
        </div>
      )}

      {/* Render the Footer component */}
      <Footer
        setTotalPages={setTotalPages}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={data}
        setData={setData}
      />
    </div>
  );
}

export default AdminUIPanel;
