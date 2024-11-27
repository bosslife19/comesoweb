// import React, { useState } from "react";
// import { motion } from "framer-motion";
//  import { FiEdit2 } from "react-icons/fi";
// import { IoFilter } from "react-icons/io5";
// import { BsSearch } from "react-icons/bs";
// import Pagination from "../../Pagination/Paginations";

// const PAGE_SIZE = 10;

// const SalsDashboard: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [selectedData, setSelectedData] = useState<any>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedDatas, setSelectedDatas] = useState<any>(null);
//   const [isModalEdit, setIsModalEdit] = useState<boolean>(false);
//   const [searchQuery, setSearchQuery] = useState<string>("");

  
//   const tableData = [
//     {
//       name: "Sabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$8,000",
//       expenses: "$2,000",
//       purchases: "$3,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 60,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+5",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$5,000",
//       expenses: "$1,500",
//       purchases: "$2,500",
//       outstandingInvoice: 6,
//       inventoryLevels: 30,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -2,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+3",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+3",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+3",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+3",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: "+3",
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",
//       recentTransactions: "Sold Hp Laptop 2pieces",
//       sales: "$12,000",
//       expenses: "$3,000",
//       purchases: "$4,000",
//       outstandingInvoice: 5,
//       inventoryLevels: 70,
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//   ];

//   const filteredData = tableData.filter((row) =>
//     row.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const paginatedData = filteredData.slice(
//     (currentPage - 1) * PAGE_SIZE,
//     currentPage * PAGE_SIZE
//   );

//   const containerVariants = {
//     hidden: { opacity: 1 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };
  

//   const rowAnimation = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
//     }),
//   };

//   const openModal = (data: any) => {
//     setSelectedData(data);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedData(null);
//   };

//   const openModalEdit = (data: any) => {
//     setSelectedDatas(data);
//     setIsModalEdit(true);
//   };

//   const closeModalEdit = () => {
//     setIsModalEdit(false);
//     setSelectedDatas(null);
//   };

//   return (
//     <div className="border w-full p-4 bg-white rounded-lg shadow-md mt-[20px]">
//     <div className=" md:flex justify-between items-center mb-6 font-sans">
//   {/* Left Section: Title and Tag */}
//   <div className="flex gap-3 items-center md:mb-0 mb-5">
//     <motion.h2
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="text-lg font-semibold text-gray-800"
//     >
//       Inventory Overview
//     </motion.h2>
//     <span className="text-[#6941C6] border border-[#E9D7FE] bg-[#f9f5ff] rounded-[16px] font-[600] text-[12px] py-1 px-[8px]">
//       20 SMEs
//     </span>
//   </div>

//   {/* Right Section: Search Bar and Filter Button */}
//   <div className="flex items-center gap-3">
//     {/* Search Bar */}
//     <div className="relative">
//     <input
//   type="text"
//   value={searchQuery}
//   onChange={(e) => setSearchQuery(e.target.value)}
//   placeholder="Search"
//   className="md:w-[400px] h-[40px] pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6941C6] focus:outline-none"
// />
//       <motion.span
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400">
//         <BsSearch/>
//       </motion.span>
//     </div>

//     {/* Filter Button */}
//     <button
//       className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#344054] rounded-lg bg-[#fff] border border-[#D0D5DD] transition"
//     >
//      <IoFilter className="text-[#344054]" />
//       Filter
//     </button>
//   </div>
// </div>


//       {/* Responsive Table Container */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="overflow-x-auto scroll-container"
//       >
//         <table className="min-w-full bg-white border border-gray-200 rounded-lg">
//           <thead>
//             <tr className="bg-gray-50">
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Name
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Recent Transactions
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Sales
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Expenses
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Purchases
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Outst. Invoice
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Inventory Levels
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Low Stock Alerts
//               </th>
//               <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <motion.tbody
//   initial="hidden"
//   animate="visible"
//   variants={containerVariants}
// >
//             {paginatedData.map((row, index) => (
//               <motion.tr
//                 key={index}
//                 variants={rowAnimation}
//                 initial="hidden"
//                 animate="visible"
//                 custom={index}
//                 onClick={() => openModal(row)}
//                 className="border-b hover:bg-gray-50"
//               >
//                 <td className="px-4 py-2 text-sm text-gray-700">{row.name}</td>
//                 <td className="px-4 py-2 text-sm text-gray-700">
//                   {row.recentTransactions}
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-700">{row.sales}</td>
//                 <td className="px-4 py-2 text-sm text-gray-700">{row.expenses}</td>
//                 <td className="px-4 py-2 text-sm text-gray-700">{row.purchases}</td>
//                 <td className="px-4 py-2 text-sm text-gray-700">
//                   {row.outstandingInvoice}
//                 </td>
//                 <td className="px-4 py-2 text-sm text-gray-700">
//                   <div className="flex items-center">
//                     <div className="w-[100px] bg-gray-200 rounded-full h-[8px] mr-2">
//                       <div
//                         className="bg-[#7F56D9] h-[8px] rounded-full"
//                         style={{ width: `${row.inventoryLevels}%` }}
//                       ></div>
//                     </div>
//                     <span className="text-gray-700 text-sm">
//                       {row.inventoryLevels}%
//                     </span>
//                   </div>
//                 </td>
//                 <td className="px-2 py-2 text-[11px] leading-[18px] font-[500] text-gray-700">
//                   <span className="font-medium text-gray-800">
//                     {row.lowStockAlerts}
//                   </span>
//                   <span
//                     className={`ml-2 px-1 py-[1px] text-xs rounded-full ${
//                       row.lowStockCount > 0
//                         ? "bg-gray-100 text-gray-700"
//                         : "bg-red-100 text-red-700"
//                     }`}
//                   >
//                     {row.lowStockCount}
//                   </span>
//                 </td>
//                 <td className="px-4 py-2">
//   <button onClick={(e) => { e.stopPropagation(); openModalEdit(row); }}>
//     <FiEdit2 className="text-gray-600" />
//   </button>
// </td>
//               </motion.tr>
//             ))}
//          </motion.tbody>
//         </table>
//       </motion.div>
      
//       <Pagination
//         count={tableData.length}
//         currentPage={currentPage}
//         setCurrentPage={setCurrentPage}
//         pageSize={PAGE_SIZE}
//       />
//          {isModalOpen && (
//         <div className="z-[200] fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded shadow-lg">
//             <h3 className="text-lg font-semibold mb-4">Details</h3>
//             <p>
//               <strong>Name:</strong>{selectedData?.name}
//             </p>
//             <p>
//               <strong>Recent Transactions:</strong>{" "}
//               {selectedData?.recentTransactions}
//             </p>
//             <p>
//               <strong>Sales:</strong> {selectedData?.sales}
//             </p>
//             <p>
//               <strong>Expenses:</strong> {selectedData?.expenses}
//             </p>
//             <p>
//               <strong>Purchases:</strong> {selectedData?.purchases}
//             </p>
//             <p>
//               <strong>Outstanding Invoice:</strong>{" "}
//               {selectedData?.outstandingInvoice}
//             </p>
//             <p>
//               <strong>Inventory Levels:</strong> {selectedData?.inventoryLevels}
//             </p>
//             <p>
//               <strong>Low Stock Alerts:</strong> {selectedData?.lowStockAlerts}
//             </p>
//             <button
//               className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//               onClick={closeModal}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

// {isModalEdit && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.3 }}
//           className="fixed z-[300] inset-0 bg-black bg-opacity-50 flex justify-center items-center "
//         >
//           <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg">
//             <h3 className="text-lg font-bold mb-4">Edit Details</h3>
//             <div className="space-y-2">
//               <p>
//                 <span className="font-medium">Name:</span> {selectedDatas?.name}
//               </p>
//               <p>
//                 <span className="font-medium">Transactions:</span>{" "}
//                 {selectedDatas?.recentTransactions}
//               </p>
//               <p>
//                 <span className="font-medium">Sales:</span> {selectedDatas?.sales}
//               </p>
//             </div>
//             <button
//               onClick={closeModalEdit}
//               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//             >
//               Close
//             </button>
//           </div>
//         </motion.div>
// )}
//     </div>
//   );
// };

// export default SalsDashboard;
