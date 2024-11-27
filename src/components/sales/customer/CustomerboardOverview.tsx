import React, { useState } from "react";
import { motion } from "framer-motion";
import Pagination from "../../Pagination/Paginations";
import { IoFilter } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { PiDotsThreeOutlineVerticalLight, PiDotsThreeOutlineVerticalThin } from "react-icons/pi";
import  logo  from "../../../assets/setion.png"
import { TbTrash } from "react-icons/tb";
 
const PAGE_SIZE = 10;

const CustomerboardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedData, setSelectedData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDatas, setSelectedDatas] = useState<any>(null);
  const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  
  
  const tableData = [
    {
      InvoiceNo:"#12345",
      name: "Sabusiwa Funmilayo",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",      
      Amount: "$2,000",
      Date:"May 13,2023",
      inventoryLevels: 60,
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+5",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",      
      Amount: "$1,500",
      Date:"May 13,2023",
      outstandingInvoice: 6,
      inventoryLevels: 30,
      lowStockAlerts: "HP Laptop",
      lowStockCount: -2,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+3",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+3",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+3",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: -3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+3",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: -3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: "+3",
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: -3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
     PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
    {
      name: "Fabusiwa Funmilayo",
       InvoiceNo:"#12345",
      recentTransactions: "Sold Hp Laptop 2pieces",
      Customer:"plotuos.org",
      Amount: "$3,000",
      Date:"May 13,2023",
      PaymentStatus:"Paid",
      lowStockAlerts: "HP Laptop",
      lowStockCount: 3,
    },
  ];

  const filteredData = tableData.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  

  const rowAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
    }),
  };

  const openModal = (data: any) => {
    setSelectedData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };

  return (
    <div className="border w-full p-4 bg-white rounded-lg shadow-md mt-[20px]">
    <div  className=" md:flex justify-between items-center mb-6 font-sans">
  {/* Left Section: Title and Tag */}
  <div className="flex gap-3 items-center md:mb-0 mb-5">
    <motion.h2
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-lg font-semibold text-gray-800"
    >
      Inventory Overview
    </motion.h2>
    <span className="text-[#6941C6] border border-[#E9D7FE] bg-[#f9f5ff] rounded-[16px] font-[600] text-[12px] py-1 px-[8px]">
      20 SMEs
    </span>
  </div>

  {/* Right Section: Search Bar and Filter Button */}
  <div className="flex items-center gap-3">
    {/* Search Bar */}
    <div className="relative">
    <input
  type="text"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
  placeholder="Search"
  className="md:w-[400px] h-[40px] pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6941C6] focus:outline-none"
/>
      <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
        <BsSearch/>
      </motion.span>
    </div>

    {/* Filter Button */}
    <button
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] rounded-lg bg-[#fff] border border-[#D0D5DD] transition"
    >
     <IoFilter className="text-[#344054]" />
      Filter
    </button>
  </div>
</div>


      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scroll-container"
      >
        <table className="min-w-full bg-white border border-[#F9FAFB] rounded-lg">
          <thead>
            <tr className="bg-[#F9FAFB]">
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Invoice No
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Name
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Recent Transactions
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
              Customer
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Amount
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
               Date
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
              Payment Status
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Low Stock Alerts
              </th>
              <th className="px-3 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                Actions
              </th>
            </tr>
          </thead>
          <motion.tbody
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
            {paginatedData.map((row, index) => (
              <motion.tr
              key={index}
              variants={rowAnimation}
              initial="hidden"
              animate="visible"
              custom={index}
              onClick={() => openModal(row)}
                  className="border-b hover:bg-gray-50"
              >
                <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.InvoiceNo}</td>
                <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.name}</td>
                <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                  {row.recentTransactions}
                </td>
                <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.Customer}</td>
                 <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.Amount}</td>
                <td className="px-2 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                  {row.Date}
                </td>
                <td className=" px-4 py-2 text-[11px] md:text-[13px] flex justify-center font-[500] font-sans leading-[20px] text-center text-[#384250]">
                   <div className="bg-[#ABEFC6] rounded-full w-[70px] flex items-center gap-1 justify-center">
                   <div className="w-[8px] rounded-full h-[8px] px-1 bg-[#17B26A]"></div>
                   <span className=" text-[11px] md:text-[14px] font-[500] font-sans leading-[20px] text-center text-[#17B26A]">{row.PaymentStatus}</span>
                   
                   </div>
                </td>
                <td className="px-4 text-center py-2 text-[11px] leading-[18px] font-[500] text-[#384250]">
                  <span className="font-medium text-gray-800">
                    {row.lowStockAlerts}
                  </span>
                  <span
                    className={`ml-2 px-1 py-[1px] text-xs rounded-full ${
                      row.lowStockCount > 0
                        ? "bg-gray-100 text-[#384250]"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {row.lowStockCount}
                  </span>
                </td>
                <td className="px-4 py-2 flex gap-2">
              <span className="text-[20px]">
              <PiDotsThreeOutlineVerticalLight />
              </span>
              <span>
              <TbTrash />
              </span>
                </td>
              </motion.tr>
            ))}
         </motion.tbody>
        </table>
      </motion.div>
      
      <Pagination
        count={tableData.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={PAGE_SIZE}
      />
          {isModalOpen && (
        <div onClick={closeModal}  className="z-[200] font-sans fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[700px]  font-[400] font-sans text-[14px] leading-[21px] shadow-lg rounded-[10px]">
            <div className="flex justify-between bg-[#004AAD] py-[10px] px-[20px] rounded-t-[10px]">
              <img src={logo} alt="" className=" w-[44px] h-[44px]" />
            <h3 className="text-lg font-semibold  text-[#fff]">Four Electronics</h3>
            <div  className="bg-[#fff] rounded-lg h-[30px] gap-2 flex px-[10px] items-center text-[#004AAD]">
            <div className="w-[8px] rounded-full h-[8px] px-1 bg-[#004AAD] text-center"></div>
           <span className="font-[400] font-sans text-[14px] leading-[21px] ">sales</span>
          </div>
            </div>
            <div className="p-6">
            <span className="flex justify-between items-center">
              <strong>Invoice No</strong>{selectedData?.InvoiceNo}
            </span>
            <span className="flex justify-between py-[10px]">
              <strong> Address</strong>
              1247 Maplewood Avenue Hillside, IL 60162
            </span>
            <span className="flex justify-between py-[10px]">
              <strong>Date:</strong>{" "}
              {selectedData?.Date}
            </span>
            
            <div className="flex justify-between py-[20px]">
              <span>Product Description</span>
              <span>Quantity</span>
              <span>Amount (NGN)</span>
            </div>
            <div className="py-[10px] flex-col justify-center items-center">
              <div className=" flex justify-between">
               <div className="flex items-center gap-2">
               <img src={logo} alt="" />
               <span>Four Electronic</span>
               </div>

               <span>2</span>

               <span>720,400.00</span>
              </div>
              <div className="py-[20px] ">
                <div className="flex justify-between mb-4">
                <span>Subtotal</span>
                <span>2,102,000</span>
                </div>
                <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-[#2FC271]">-10%</span>
                <span>2,102,000</span>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
                <span>Total</span>
                 <span>2,102,000</span>
                </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
             
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerboardList;
