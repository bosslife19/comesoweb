// import React, { useState } from "react";
// import { motion } from "framer-motion";
// // import Pagination from "../../../screens/Pagination/Paginations";
// import { IoFilter } from "react-icons/io5";
// import { BsSearch } from "react-icons/bs";
// // import  logo  from "../../../assets/setion.png" 
// import { TbTrash } from "react-icons/tb";
 
// import { CiEdit } from "react-icons/ci";
// import Pagination from "../../Pagination/Paginations";
 
// const PAGE_SIZE = 10;

// const UserTab  = () => {
//   nst App = () => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [isEditOpen, setIsEditOpen] = useState(false);
//     const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  
//     const openEditModal = () => setIsEditOpen(true);
//     const closeEditModal = () => setIsEditOpen(false);
  
//     const openDeleteModal = () => setIsDeleteOpen(true);
//     const closeDeleteModal = () => setIsDeleteOpen(false);
  
//     const handleEditSubmit = () => {
//       alert("Role Updated");
//       closeEditModal();
//     };
  
//     const handleDeleteSubmit = () => {
//       alert("Admin Deleted");
//       closeDeleteModal();
//     };
  
  
//   const tableData = [
//     {
//       name: "Sabusiwa Funmilayo",
//       role: "Admin",   
//       Last_seen:"21 may 2023",
//       active: "Active",  
     
//       DateJoined:"May 13,2023",
     
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",   
//       Last_seen:"21 may 2023",
//       active: "Active",  
     
//       Date:"May 13,2023",
      
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: -3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",
//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//     {
//       name: "Fabusiwa Funmilayo",

//       role: "Admin",
//       Amount: "$3,000",
//       Date:"May 13,2023",

//       lowStockAlerts: "HP Laptop",
//       lowStockCount: 3,
//     },
//   ];


 

//   return (
//     <div className="border   p-4 bg-white rounded-lg shadow-md mt-[20px]">
//     <div  className=" md:flex justify-between items-center mb-6 font-sans">
//   {/* Left Section: Title and Tag */}
//   <div className="flex gap-3 items-center md:mb-0 mb-5">
//     <motion.h2
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="text-lg font-semibold text-gray-800 "
//     >
//       Users
//     </motion.h2>
//     <span className="text-[#6941C6] border border-[#E9D7FE] bg-[#f9f5ff] rounded-[16px] font-[600] text-[12px] py-1 px-[8px]">
//       6 Users
//     </span>
//   </div>

//   {/* Right Section: Search Bar and Filter Button */}
//   <div className=" flex items-center gap-3">
//     {/* Search Bar */}
//     <div className="relative">
//     <input
//   type="text"
//   value={searchQuery}
//   onChange={(e) => setSearchQuery(e.target.value)}
//   placeholder="Search"
//   className="md:w-full h-[40px] pl-10 pr-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6941C6] focus:outline-none"
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
//         className=" overflow-x-auto scroll-container"
//       >
//         <table className=" w-full bg-white border border-[#F9FAFB] rounded-lg">
//           <thead>
//             <tr className=" bg-[#F9FAFB] ">
              
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
//                 Name
//               </th>
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
//                 Role
//               </th>
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
//               Date Joined
//               </th>
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
//                 Last Seen
//               </th>
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
//                status
//               </th>
//               <th className="px-4 py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
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
//               key={index}
//               variants={rowAnimation}
//               initial="hidden"
//               animate="visible"
//               custom={index}
//               // onClick={() => openModal(row)}
//                   className="border-b hover:bg-gray-50"
//               >
//                  <td className="px-2 py-4 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.name}</td>
//                 <td className="px-2 py-4 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
//                   {row.role}
//                 </td>
//                 <td className="px-2 py-4 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.DateJoined}</td>
//                  <td className="px-2 py-4 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">{row.Last_seen}</td>
                 
                
//                 <td className="px-4 text-center py-4 text-[11px] leading-[18px] font-[500] text-[#384250]">
//                   <div className="font-medium flex  items-center  justify-center gap-1 w-[auto] bg-[#ECFDF3] border border-[#ABEFC6]   py-[10px] rounded-full text-green-800 ">
//                    <div className="w-[8px] h-[8px] bg-[#067647] rounded-full">  </div>
//                    <span className="text-[#067647] font-[600]">
//                    {row.active}
//                    </span>
                   
//                   </div>
                   
//                 </td>
//                 {/* <td className="px-4 py-4 flex gap-2 justify-center"> */}
//                 <td className="px-4 py-4 flex gap-2 justify-center">
//       {/* Edit Button */}
//       <button className="text-xl text-blue-500 hover:text-blue-700" onClick={openEditModal}>
//         <CiEdit />
//       </button>

//       {/* Delete Button */}
//       <button className="text-xl text-red-500 hover:text-red-700" onClick={openDeleteModal}>
//         <TbTrash />
//       </button>

//       {/* Edit Modal */}
      
//     </td>
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
          
//           {isEditOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-[300] flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg w-96">
//             <div className="p-4 border-b flex justify-between items-center">
//               <h2 className="text-lg font-semibold">Edit Role</h2>
//               <button className="text-gray-600 hover:text-gray-900" onClick={closeEditModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="p-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-300"
//               />
//               <select
//                 className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
//               >
//                 <option value="">Select Role</option>
//                 <option value="admin">Admin</option>
//                 <option value="editor">Editor</option>
//                 <option value="viewer">Viewer</option>
//               </select>
//             </div>
//             <div className="p-4 border-t flex justify-end">
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 onClick={handleEditSubmit}
//               >
//                 Update Role
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Delete Modal */}
//       {isDeleteOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[300]">
//           <div className="bg-white rounded-lg shadow-lg w-80">
//             <div className="p-4 border-b flex justify-between items-center">
//               <h2 className="text-lg font-semibold">Delete Admin</h2>
//               <button className="text-gray-600 hover:text-gray-900" onClick={closeDeleteModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="p-4">
//               <p>Are you sure you want to delete this admin?</p>
//             </div>
//             <div className="p-4 border-t flex justify-end">
//               <button
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//                 onClick={handleDeleteSubmit}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )} 
            
//     </div>
//   );
// };

// export default UserTab;
