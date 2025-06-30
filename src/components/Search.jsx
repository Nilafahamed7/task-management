import React from "react";

const Search = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={e => setSearchTerm(e.target.value)}
      className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default Search;
