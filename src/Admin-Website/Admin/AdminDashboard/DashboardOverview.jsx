import  { useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  
 import Pagination from "../../../Admin-Website/Admin/AdminPagnations/Paginations";
 import ButtonsWithPopup from "./SideButtons/ButtonWithProps";
 
const PAGE_SIZE = 10;
 
const DashboardList  = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");

  const handleChange = (event) => {
    setSelectedAction(event.target.value);
    console.log("Selected action:", event.target.value);
  };
  
  const tableData = [
    {
      PaymentID: "@3873",
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

  return (
    <div className="border w-full p-4 bg-white rounded-lg shadow-md mt-[20px]">
    <div className=" md:flex justify-between items-center mb-6 font-sans">
  {/* Left Section: Title and Tag */}
  <div className="flex-col gap-3 items-center md:mb-0 mb-5 space-y-4">
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="text-[22px] text-[#49454FCC] leading-[27.72px] font-[500] font-inter  "
>
  Recent Transactions
</motion.h2>
<div className="flex justify-between items-center flex-wrap">
<div className="flex gap-2 mt-2">
<button
onClick={() => handleFilterChange("All")}
className={`border md:px-[0px] px-[20px] md:w-[118px] md:h-[42px] rounded-[30px] ${filterStatus === "All" ? "border-blue-500 text-[#222222E5]" : "bg-white text-black"} font-[500] text-[14px] md:text-[17px] leading-[21.42px]`}
>
All
</button>

<button onClick={() => handleFilterChange("Complete")} className="border md:px-[0px] px-[20px] md:w-[118px] h-[42px]  rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px] ">
  Complete
</button>
<button className="border md:px-[0px] px-[20px] md:w-[118px] h-[42px]  rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px] "onClick={() => handleFilterChange("Pending")}>
  Pending
</button>
<button className="border md:px-[0px] px-[10px] md:w-[118px] h-[42px]  rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px]"
onClick={() => handleFilterChange("Rejected")}>
  Rejected
</button>
</div>

</div>
</div>

{/* Right Section: Search Bar and Filter Button */}
<div className="flex items-center gap-3  mt-[35px]">
<ButtonsWithPopup/>
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
                   Payment ID
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
                   
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
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
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                } border-b hover:bg-gray-50`}
            >
               <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.PaymentID || "N/A"}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Timestamp}
                </td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.type}</td>             
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.Sender}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.Beneficiary}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Amount}               
                  </td>
                  <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  <span
                    className={`${
                      row.Status === "complete"
                        ? "text-[#3ECF8E]"
                        : row.Status === "pending"
                        ? "text-[#FFC13C]"
                        : row.Status === "Rejected"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.Status}
                  </span>
                </td>
                  <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  <select onChange={handleChange} value={selectedAction} className="border outline-none px-4 py-2 rounded-md text-sm">
                    <option value=""> Action</option>
                    <option value="Approve">Approve</option>
                    <option value="Reject">Reject</option>
                  </select>
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
         

 
    </div>
  );
};

export default DashboardList;
