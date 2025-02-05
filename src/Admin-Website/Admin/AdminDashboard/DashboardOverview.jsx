import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as XLSX from "xlsx";
 // import Pagination from "../../Pagination/Paginations";
  
 import Pagination from "../../../Admin-Website/Admin/AdminPagnations/Paginations";
 import ButtonsWithPopup from "./SideButtons/ButtonWithProps";
import axiosClient from "../../../axios-client";
import Papa from "papaparse";
const PAGE_SIZE = 10;
 
const DashboardList  = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
  const [transactions, setTransactions] = useState([]);

  const handleChange = (event) => {
    setSelectedAction(event.target.value);
    console.log("Selected action:", event.target.value);
  };
  const handleExport = () => {
    
    // Create a new workbook and worksheet
    
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(transactions);

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "transactions");

    // Write workbook to a binary string and trigger download
    XLSX.writeFile(workbook, `transactions.xlsx`);
  };

  useEffect(()=>{
    const getTransactions = async () => {
      try {
        const response = await axiosClient.get("/transaction/all");
        
        setTransactions(response.data.transactions);
        
      
      } catch (error) {
        console.log(error);
      }
    };
    getTransactions();
  },[])
  
  const tableData = [
    {
      PaymentID: "@38734",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",

      Sender: "0810031976",
      Amount: "$2,000",
      Status: "complete",
      Beneficiary: "08173562873",
      inventoryLevels: 60,
      type:"send voucher"
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      Sender: "0810031976",
      Amount: "$1,500",
      Status: "pending",
      Beneficiary: "08173562873",
      inventoryLevels: 30,
      type:"send voucher"
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      Sender: "08100319760",
      Amount: "$837639",
      Status: "complete",
      Beneficiary: "08173562873",
      inventoryLevels: 70,
      type:"send voucher"
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "Rejected",
      Beneficiary: "08173562873",
      inventoryLevels: 70,
      type:"send voucher"
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
      inventoryLevels: 70,
      type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
      type:"send voucher"
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "complete",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    {
      PaymentID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "complete",
      Beneficiary: "08173562873",
     type:"send voucher"
      
    },
    
    
    
  ];
  const date = transactions?.map(item=>{
    const date = new Date(item.created_at); // Example date

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',  // Full month name
      day: 'numeric', // Day of the month
      year: 'numeric' // Year
    }).format(date);
    
    return formattedDate;
   })

  const filteredData = tableData.filter((row) => {
    const matchesQuery = row.PaymentID.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || row.Status.toLowerCase() === filterStatus.toLowerCase();
    return matchesQuery && matchesStatus;
  });

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
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
    }),
  };
 
  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };
  const exportToCSV = () => {
    const csvData = transactions.map((transaction, index) => ({
      TransactionID: transaction.transaction_id || "N/A",
      Timestamp:date[index],
      Type: transaction.type || "N/A",
      Sender: transaction.sender || "N/A",
      Beneficiary: transaction.beneficiary || "N/A",
      Amount: transaction.amount || "N/A",
      Status: transaction.status || "N/A",
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "transactions.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="border w-full p-4 rounded-lg  mt-[20px]">
    <div className=" md:flex justify-between items-center mb-6 font-sans">
  {/* Left Section: Title and Tag */}
  <div className="border w-full p-4 rounded-lg  mt-[20px]">
  <div className="flex justify-between items-center mb-6">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-[22px] text-[#49454FCC] font-[500]"
        >
          Recent Transactions
        </motion.h2>
        <button
          onClick={()=>{
            exportToCSV();
            handleExport();
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow"
        >
          Export to CSV
        </button>
      </div>
  </div>


{/* Right Section: Search Bar and Filter Button */}
<div className="flex items-center gap-3  mt-[35px]">
{/* <ButtonsWithPopup/> */}
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
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Transaction ID
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Timestamp
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     type   
                     </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Sender
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Beneficiary
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Amount
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
                   </th>
                   
                   {/* <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Actions
                   </th> */}
                 </tr>
          </thead>
          <motion.tbody
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
            {transactions?.map((row, index) => (
              <motion.tr
                key={index}
                variants={rowAnimation}
                initial="hidden"
                animate="visible"
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                } border-b hover:bg-gray-50`}
            >
               <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.transaction_id || "N/A"}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {date[index]}
                </td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.type}</td>             
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.sender||'N/A'}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.beneficiary||'N/A'}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.amount}               
                  </td>
                  <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  <span
                    className={`${
                      row.status === "Received"
                        ? "text-[#3ECF8E]"
                        : row.status === "pending"
                        ? "text-[#FFC13C]"
                        : row.status === "Rejected"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.status}
                  </span>
                </td>
                  {/* <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  <select onChange={handleChange} value={selectedAction} className="border outline-none px-4 py-2 rounded-md text-sm">
                    <option value=""> Action</option>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                  </select>
                </td> */}
              </motion.tr>
            ))}
         </motion.tbody>
        </table>
      </motion.div>
      
      <Pagination
        count={transactions?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageSize={PAGE_SIZE}
      />
         

 
    </div>
  );
};

export default DashboardList;
