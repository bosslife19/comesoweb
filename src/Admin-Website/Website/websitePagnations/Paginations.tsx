import React, { useState } from "react";
import { BsFiletypeCsv } from "react-icons/bs";
import { FiDownload, FiFileText } from "react-icons/fi";
import { GrDocumentMissing } from "react-icons/gr";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";

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

  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(pageCount);

  // Dynamically filter visible pages
  const visiblePages = pages.slice(startPage - 1, endPage);

  const nextPage = () => {
    if (currentPage < endPage) setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (currentPage > startPage) setCurrentPage((prev) => prev - 1);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="md:flex   bg-white items-center justify-between px-4 py-4   rounded-[20px]  ">
      {/* Dropdowns for Start and End Pages */}
      <div className="flex items-center space-x-2">
         
          <select
            id="endPage"
            value={endPage}
            onChange={(e) => setEndPage(Number(e.target.value))}
            className="border bg-[#DEDEDE] border-gray-300 rounded md:px-2 md:py-1 text-gray-700"
          >
            {pages
              .filter((page) => page >= startPage) // Ensure endPage >= startPage
              .map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
          </select>
          <p className="text-[#333333] text-sm opacity-[0.7] font-[500] font-poppins leading-[24px]">
          per page
          </p>
        </div>
{/* Page Numbers */}
{/* <div className="flex justify-between items-center space-x-2">
          {visiblePages.map((page) => (
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
        </div> */}
      {/* Pagination Buttons */}
      <div className="flex items-center md:mt-[0px] mt-[10px] md:justify-between space-x-4 ">
      <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-4 mr-[20px]">
          <button
             className="flex rounded-[30px] items-center space-x-2 px-4 py-2 border  bg-[#F9FAFB] text-gray-700 hover:bg-gray-200"
          >
            <span className="text-sm">Export</span>
            <BsFiletypeCsv className="text-gray-700" />
            <GrDocumentMissing/>
          </button>
          
        </div>
        <div className="flex items-center space-x-2">
          
          <select
            id="startPage"
            value={startPage}
            onChange={(e) => setStartPage(Number(e.target.value))}
            className="border border-gray-300 rounded md:px-2 md:py-1 text-gray-700"
          >
            {pages.map((page) => (
              <option key={page} value={page}>
                {page}
              </option>
            ))}
          </select>
          <p className="text-[#333333] text-sm opacity-[0.7] font-[500] font-poppins leading-[24px]">
          of 1 pages
          </p>
        </div>

       
      </div>
        {/* Previous Button */}
        <div className="flex ">
        <button
          className="md:p-2 font-semibold text-sm flex items-center text-gray-700 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
          onClick={previousPage}
          disabled={currentPage === startPage}
        >
          <MdKeyboardArrowLeft className="transition-transform duration-200" />
        </button>

        

        {/* Next Button */}
        <button
          className="p-2 flex items-center font-semibold text-sm text-gray-700 rounded transition-all duration-200 ease-in-out disabled:opacity-50 hover:bg-gray-200"
          onClick={nextPage}
          disabled={currentPage === endPage}
        >
          <RiArrowRightSLine className="transition-transform duration-200" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
