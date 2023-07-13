/**
 * Search query function to filter data based on search query
 * @param {String} searchQuery - The search query string
 * @param {Array} data - The data array to be filtered
 * @param {Function} setViewableData - Setter function to update the viewable data
 * @param {Function} setTotalPages - Setter function to update the total number of pages
 */
export function searchQueryFn(searchQuery, data, setViewableData, setTotalPages) {
    if (searchQuery.length) {
      // Filter data based on the search query
      // eslint-disable-next-line
      const filtered = data.filter((item) => {
        const { name, email, role } = item;
        const regex = new RegExp(searchQuery, 'gi');
        if (name.match(regex) || email.match(regex) || role.match(regex)) {
          return item;
        }
      });
  
      // Update the viewable data and total pages based on the filtered data
      setViewableData([...filtered].slice(0, 10));
      setTotalPages(Math.ceil(filtered.length / 10));
    } else {
      // Reset to original data and update the total pages
      setViewableData([...data].slice(0, 10));
      setTotalPages(Math.ceil(data.length / 10));
    }
  }
  
  /**
   * Update UI and pagination after deleting data
   * @param {Array} newData - The updated data array after deletion
   * @param {Function} setData - Setter function to update the data
   * @param {Function} setTotalPages - Setter function to update the total number of pages
   */
  export function updateUIAndPageOnDelete(newData, setData, setTotalPages) {
    // Update the data, total pages, and viewable data after deletion
    setData([...newData]);
    setTotalPages(Math.ceil(newData.length / 10));
  }
  