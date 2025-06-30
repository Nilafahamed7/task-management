import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => setCurrentPage(number)}
          className={`px-3 py-1 rounded ${currentPage === number ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"} hover:bg-blue-500 hover:text-white`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
