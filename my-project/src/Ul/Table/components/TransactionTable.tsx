
import React, { useState, useEffect, useRef, Fragment } from "react";
import ReactPaginate from "react-paginate";
import { GoDotFill } from "react-icons/go";
import { FiEdit2 } from "react-icons/fi";
import { HiEye } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import Skeleton from "./Skeleton";
import { Menu, Transition } from '@headlessui/react';


interface TableColumn {
    value: string;
    text: string;
}

interface TableProps<
    T extends { status: string; _id: string; },
> {
    data?: T[];
    columns: TableColumn[];
    link?: string;
    itemsPerPage: number;
    loading: boolean;
    showCheckbox?: boolean;
    icon?: React.ElementType;
    onViewUser?: (item: Record<string, []>) => void;
    searchQuery: string;
    openEditModal: (item: T) => void;
    openDeleteModal: (item: T) => void;
    openViewModal?: (item: T) => void;
    openRecordModal?: (item: T) => void;
    showViewButton?: boolean
    showRecordButton?: boolean;
    showImage?: boolean
}

const TranscationTable: React.FC<
    TableProps<{ status: string; _id: string; }>
> = ({
    data,
    columns,
    itemsPerPage,
    showCheckbox,
    searchQuery,
    loading,
    showViewButton = false,
    showRecordButton = false,
    openEditModal = () => { },
    openDeleteModal = () => { },
    openViewModal = () => { },
    openRecordModal = () => { },
    // showImage = false
}) => {
        const [page, setPage] = useState<number>(0);
        const [selectedItems, setSelectedItems] = useState<string[]>([]);
        // const dispatch: Dispatch<AnyAction> = useDispatch();

        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const paginatedData = data?.slice(startIndex, endIndex);
        const remainingItems = data?.slice(page * itemsPerPage);


        const handleSelection = (item: string) => {
            if (selectedItems.includes(item)) {
                setSelectedItems(
                    selectedItems.filter(selected => selected !== item),
                );
            } else {
                setSelectedItems([...selectedItems, item]);
            }
        };

        const handlePageChange = (selectedPage: { selected: number }) => {
            setPage(selectedPage.selected);
        };

        // const [activeDropdownItem, setActiveDropdownItem] = useState<string | null>(null);

        // const handleDropdownClick = (item: string) => {
        //     if (activeDropdownItem === item) {
        //         setActiveDropdownItem(null);
        //     } else {
        //         setActiveDropdownItem(item);
        //     }
        // };

        const tableRef = useRef<HTMLDivElement>(null);


        useEffect(() => {
            const handleClickOutside = (event: MouseEvent) => {

                if (
                    tableRef.current &&
                    !tableRef.current.contains(event.target as Node)
                ) {
                    // setActiveDropdownItem(null);
                }
            };

            document.addEventListener("click", handleClickOutside);

            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }, []);


        const filteredPaginatedData = paginatedData?.filter(item =>
            JSON.stringify(item)
                .toLowerCase()
                .includes(searchQuery?.toLowerCase()),
        );




        return (
            <div className="table-container relative rounded-lg  overflow-x-auto overflow-y-auto" ref={tableRef}>
                <div className="flex flex-col gap-6">
                    {loading && (
                        <>
                            <div className="columns-skeleton grid grid-cols-6 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} height="30px" radius="5px" width="" />
                                ))}
                            </div>
                            <div className="columns-skeleton grid grid-cols-6 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} height="30px" radius="5px" width="" />
                                ))}
                            </div>
                            <div className="columns-skeleton grid grid-cols-6 gap-6">
                                {Array.from({ length: 6 }).map((_, i) => (
                                    <Skeleton key={i} height="30px" radius="5px" width="" />
                                ))}
                            </div>
                        </>
                    )}
                </div>
                {!loading && (
                    <table className="w-full  " >
                        <thead className="text-gray font-normal  uppercase px-3 rounded-lg">
                            <tr className="bg-[#6B788E33]">
                                <th
                                    scope="col"
                                    className="p-4 whitespace-nowrap font-normal leading-6 text-center"
                                >
                                    S/N
                                </th>
                                {columns.map(column => (
                                    <th
                                        key={column.value}
                                        scope="col"
                                        className="p-3 whitespace-nowrap font-normal leading-6 text-center"
                                    >
                                        {column.text}
                                    </th>
                                ))}
                                <th
                                    scope="col"
                                    className="p-4 whitespace-nowrap font-normal leading-6 text-center"
                                >
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPaginatedData?.map((item, index) => (
                                <tr
                                    key={item._id}
                                    className="bg-white border rounded border-gray border-opacity-20"
                                >
                                    <td className=" gap-5 text-center p-3 text-md cursor-pointer  text-black">
                                        {index + 1}
                                        
                                    </td>
                                    {/* {showImage && (
                                    <td>
                                        <img src={'/avatar.png'} className="h-10 w-10"/>

                                    </td>
                                        )} */}
                                    {showCheckbox && (
                                        <td className="w-4 p-2">
                                            <span className="flex items-center">
                                                <input
                                                    id={`checkbox-table-search-${index}`}
                                                    type="checkbox"
                                                    role="checkbox"
                                                    data-testid={`checkbox-${index}`}
                                                    className="w-6 h-6 cursor-pointer text-blue bg-white border-gray rounded hover:border-blue focus:ring-2"
                                                    checked={selectedItems.includes(
                                                        item.toString(),
                                                    )}
                                                    onChange={() =>
                                                        handleSelection(item.toString())
                                                    }
                                                />
                                                <label
                                                    htmlFor={`checkbox-table-search-${index}`}
                                                    className="sr-only"
                                                >
                                                    checkbox
                                                </label>
                                            </span>
                                        </td>
                                    )}
                                    {columns.map(column => (
                                        <td
                                            key={column.value}
                                            className="text-gray leading-tight py-6 text-center  items-center font-normal text-[16px] whitespace-nowrap"
                                        >
                                            {column.value === "status" ? (
                                                item[column.value] === "Paid" || item[column.value] === "paid" ? (
                                                    <span className=" flex  justify-center  items-center    bg-opacity-10">
                                                        <span className="bg-greendeep text-green bg-opacity-10 flex items-center gap-2 p-2 rounded-full"><GoDotFill />  Paid</span>
                                                    </span>
                                                ) : item[column.value] === "Unpaid" || item[column.value] === "unpaid" ? (
                                                    <span className="flex  justify-center  items-center  bg-opacity-10">
                                                        <span className="bg-red text-red bg-opacity-10 flex items-center gap-2 p-2 rounded-full"><GoDotFill />  Unpaid</span>
                                                    </span>
                                                ) : item[column.value] === "active" ? (
                                                    <span className=" flex  justify-center  items-center  bg-opacity-10">
                                                        <span className="bg-greendeep text-green bg-opacity-10 flex items-center gap-2 p-2 rounded-full"><GoDotFill />  Active</span>
                                                    </span>
                                                ) : item[column.value] === "inactive" ? (
                                                    <span className=" flex justify-center  items-center bg-opacity-10">
                                                        <span className="bg-red text-red bg-opacity-10 flex items-center gap-2 p-2 rounded-full"><GoDotFill />  Inactive</span>
                                                    </span>
                                                ) : (
                                                    <span className=" flex  justify-center  items-center bg-opacity-10">
                                                        <span className="bg-yellow text-black bg-opacity-10 flex items-center gap-2 p-2 rounded-full"><GoDotFill /> Partially paid</span>
                                                    </span>
                                                )
                                            ) : (
                                                (
                                                    item as unknown as {
                                                        [key: string]: string;
                                                    }
                                                )[column.value]
                                            )}
                                        </td>
                                    ))}

                                    <td className="text-center p-4 text-md cursor-pointer font-bold  text-black">
                                        <Menu as="div" className="inline-block">
                                            <Menu.Button className="flex items-center justify-center rounded-full">
                                                {/* Your action button */}
                                                <svg
                                                    className="h-5 w-5 text-black transform cursor-pointer -rotate-90"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM10 4a2 2 0 100-4 2 2 0 000 4zM10 20a2 2 0 100-4 2 2 0 000 4z" />
                                                </svg>
                                            </Menu.Button>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-10   mt-2  bg-white p-3 whitespace-nowrap z-[9999] rounded-md shadow-lg focus:outline-none">
                                                    <div className="py-1">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={() => { openEditModal(item); }}
                                                                    className={`${active ? ' hover:bg-blue hover:text-white ' : 'text-blue'
                                                                        } group flex rounded-md items-center w-full px-2 py-2`}
                                                                >
                                                                    <FiEdit2 className="mr-2 h-5 w-5" aria-hidden="true" />
                                                                    Edit
                                                                </button>
                                                            )}
                                                        </Menu.Item>
                                                        {showViewButton && (
                                                            <Menu.Item>
                                                                {({ active }) => (

                                                                    <button
                                                                        onClick={() => { openViewModal(item); }}
                                                                        className={`${active ? 'hover:bg-blue hover:text-white' : 'text-blue'
                                                                            } group flex rounded-md items-center w-full px-2 py-2`}
                                                                    >
                                                                        <HiEye className="mr-2 h-5 w-5" aria-hidden="true" />
                                                                        View
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        )}
                                                        {showRecordButton && (
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <button
                                                                        onClick={() => { openRecordModal(item); }}
                                                                        className={`${active ? 'hover:bg-blue hover:text-white' : 'text-blue'
                                                                            } group flex rounded-md items-center w-full px-2 py-2 `}
                                                                    >
                                                                        <MdPayments className="mr-2 h-5 w-5" aria-hidden="true" />
                                                                        Record Payment
                                                                    </button>
                                                                )}
                                                            </Menu.Item>
                                                        )}

                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <button
                                                                    onClick={() => { openDeleteModal(item); }}
                                                                    className={`${active ? 'hover:bg-red hover:text-white' : 'text-red'
                                                                        } group flex rounded-md items-center w-full px-2 py-2`}
                                                                >
                                                                    <AiOutlineDelete className="mr-2 h-5 w-5" aria-hidden="true" />
                                                                    Delete
                                                                </button>
                                                            )}
                                                        </Menu.Item>


                                                    </div>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                        <tfoot className="text-black bg-white  shadow-lg">
                            <tr>
                                <td colSpan={12} className="p-3 ">
                                    <div className="flex justify-between">
                                        <div>
                                            {remainingItems &&
                                                remainingItems.length > 0 && (
                                                    <p className="uppercase text-sm text-gray-500">
                                                        Total {remainingItems.length}
                                                    </p>
                                                )}
                                        </div>
                                        <div>
                                            {data && data.length > 0 && (
                                                <ReactPaginate
                                                    previousLabel={`Previous`}
                                                    nextLabel={"Next"}
                                                    breakLabel={"..."}
                                                    pageCount={Math.ceil(
                                                        (data.length || 0) /
                                                        itemsPerPage,
                                                    )}
                                                    marginPagesDisplayed={3}
                                                    pageRangeDisplayed={5}
                                                    onPageChange={handlePageChange}
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
                                            )}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                )}
            </div>
        );
    };

export default TranscationTable;
