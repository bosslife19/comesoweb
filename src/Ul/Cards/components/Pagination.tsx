import React from 'react';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
    pageCount: number;
    onPageChange: (selectedPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount, onPageChange }) => {
    return (
       
        <ReactPaginate
                                            previousLabel={`Previous`}
                                            nextLabel={"Next"}
                                            breakLabel={"..."}
                                            pageCount={pageCount
                                            }
                                            marginPagesDisplayed={3}
                                            pageRangeDisplayed={5}
                                            onPageChange={(selected) => onPageChange(selected.selected + 1)}
                                            containerClassName={"flex"}
                                            pageClassName={
                                                "text-md rounded-lg items-center flex justify-center font-medium mx-1 border rounded-lg px-4 py-2"
                                            }
                                            activeClassName={
                                                "bg-gray rounded-lg flex font-medium border text-md text-white"
                                            }
                                            previousClassName={
                                                "bg-white text-md border rounded-lg text-[#7B7A77] flex  px-3 py-2"
                                            }
                                            nextClassName={
                                                "bg-white text-md border rounded-lg text-[#7B7A77] flex  px-3 py-2"
                                            }
                                        />
    );
};

export default Pagination;
