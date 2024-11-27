import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

interface PaginationProps {
  count: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  pageSize: number;
}

const Pagination: React.FC<PaginationProps> = ({
  count,
  currentPage,
  setCurrentPage,
  pageSize,
}) => {
  const pageCount = Math.ceil(count / pageSize);

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const nextPage = () => {
    if (currentPage < pageCount) setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="flex items-center justify-between mt-4 space-x-4">
      {/* Previous Button */}
      <button
        className="p-2 font-semibold text-sm flex items-center bg-gray-100 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
        onClick={previousPage}
        disabled={currentPage === 1}
      >
        <FiArrowLeft className="mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            className={`w-8 h-8 flex items-center justify-center transition-all duration-200 rounded ${
              currentPage === page
                ? "bg-[#F9FAFB] text-[#475467] border transform scale-105 shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-200 hover:scale-105"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="p-2 flex items-center font-semibold text-sm bg-gray-100 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
        onClick={nextPage}
        disabled={currentPage === pageCount}
      >
        Next
        <IoIosArrowRoundForward className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

export default Pagination;
