import React from 'react';

const TransactionFilter = ({ searchTerm, setSearchTerm, sortType, setSortType }) => {
  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <label htmlFor="sortSelect">Sort by:</label>
      <select id="sortSelect" onChange={handleSortChange}>
        <option value="none">None</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
    </div>
  );
};

export default TransactionFilter;
