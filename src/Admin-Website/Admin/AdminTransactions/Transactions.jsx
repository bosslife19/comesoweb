import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  import logo from "../../../assets/imglogo.png"
import Pagination from "../AdminPagnations/Paginations";
import ButtonsWithPopup from "./sideButtons/ButtonWithProps";
import { BsCalendar } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import axiosClient from "../../../axios-client";
   
const PAGE_SIZE = 10;
 
const Transactions  = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedRow, setSelectedRow] = useState(null);
   const [transactions, setTransactions] = useState([])
   const date = transactions?.map(item=>{
    const date = new Date(item.created_at); // Example date

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',  // Full month name
      day: 'numeric', // Day of the month
      year: 'numeric' // Year
    }).format(date);
    
    return formattedDate;
   })

  // const handleChange = (event) => {
  //   setSelectedAction(event.target.value);
  //   console.log("Selected action:", event.target.value);
  // };
  
  const tableData = [
    {
      PaymentID: "@3873",
      Timestamp: "09/08/24, 12:0018pm",
      pending:"sent Voucher",
      name:"Benz",

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
      name:"Benz",
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
      name:"Benz",
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
      name:"Benz",
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
      name:"Benz",
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
      name:"Benz",
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

useEffect(()=>{
const getAlltransactions = async ()=>{
  const res = await axiosClient.get('/transaction/all');
  
  setTransactions(res.data.transactions)
}
getAlltransactions()
},[]);
  const filteredData = transactions?.filter((row) => {
    // const matchesQuery = row.beneficiary && row.beneficiary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "All" || row.status.toLowerCase() === filterStatus.toLowerCase();
    return  matchesStatus;
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

  const handleChange = (event, row) => {
    const value = event.target.value;
    setSelectedAction(value);
    if (value === "Approve") {
      setSelectedRow(row);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
    setSelectedAction("");
  };

  return (
    <div className="  w-full p-4 rounded-lg   ">
    <div className=" md:flex justify-between items-center mb-6 font-sans  ">
  {/* Left Section: Title and Tag */}
  <div className="flex-col gap-3 items-center md:mb-0 mb-5 space-y-4">
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="md:text-[32px] text-[#202224] leading-[43.65px] font-[700] font-inter  "
>
  Transactions
</motion.h2>
<div className="flex justify-between flex-wrap items-center">
<div className="flex gap-2 mt-2 items-center">
<button
onClick={() => handleFilterChange("All")}
className={`border md:px-[0px] px-[20px] md:w-[118px] md:h-[42px] rounded-[30px] ${filterStatus === "All" ? "border-blue-500 text-[#222222E5]" : "bg-white text-black"} font-[500] text-[14px] md:text-[17px] leading-[21.42px]`}
>
All
</button>

<button onClick={() => handleFilterChange("Sent")} className={`border md:px-[0px] px-[20px] md:w-[118px] h-[42px] ${filterStatus === "Sent" ? "border-blue-500 text-[#222222E5]" : "bg-white text-black"} rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px] `}>
  Sent
</button>
<button className={`border md:px-[0px] px-[20px] md:w-[118px] h-[42px]  rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF]  ${filterStatus === "Received" ? "border-blue-500 text-[#222222E5]" : "bg-white text-black"} text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px]`} onClick={() => handleFilterChange("Received")}>
  Received
</button>
{/* <button className="border md:px-[0px] px-[10px] md:w-[118px] h-[42px]  rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] md:text-[17px] leading-[21.42px]"
onClick={() => handleFilterChange("Rejected")}>
  Rejected
</button> */}
</div>

</div>
</div>

{/* Right Section: Search Bar and Filter Button */}
{/* <div className="flex lg:px-5 lg:items-center gap-3  mt-[35px]">
<ButtonsWithPopup/>
</div> */}
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
          <tr className=" ">
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
            { filteredData?.map((row, index) => (
              <motion.tr
                key={index}
                variants={rowAnimation}
                initial="hidden"
                animate="visible"
                custom={index} 
                className={`${
                    index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                  } border-b hover:bg-gray-50`}
              >
               <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.transaction_id || "N/A"}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {date[index]}
                </td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.type}</td>             
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.sender}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.beneficiary}</td>
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
                        : row.Status === "Rejected"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.status}
                  </span> 
                </td>
                <td className=" px-4 py-2">
                <select
                  onChange={(e) => handleChange(e, row)}
                  value={selectedAction}
                  className="border outline-none px-1  py-2 rounded-[20px] text-sm"
                >
                  <option value="">Action</option>
                  <option value="Approve">View Details</option>
                </select>
              </td>
            {/* modal OPen */}
            {isModalOpen && selectedRow && (
        <div className="fixed p-3 inset-0 font-sans bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
          <div className="bg-white rounded-lg p-6 md:w-1/2">
            <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-4">Transaction details (ID- #545676)</h2>
            <div className="flex gap-3 justify-between border-t pt-[20px]">

              <div>
                {/* sender */}
             <div className="">
             <h4 className=" font-[600]">Sender</h4>
              <div className=" space-x-2 flex  items-center">
              <img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
              <span className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
               {selectedRow.name}
            </span>
            <span className="p-1 md:p-3 text-[13px] md:text-[18px] bg-[#F5F6F7] rounded-full">
            <HiDotsVertical/>
            </span>
              </div>
             
             </div>
             {/* phone NUmber */}
           <div className="mt-[20px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px]">
               Sender’s Phone number 
              </h4>
              <div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {selectedRow.Sender}
              </div>
            
           </div>
            {/* Voucher Amount */}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Voucher Amount
              </h4>
              <div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {selectedRow.Amount}
              </div>
            
           </div>
            {/* Transaction Date & Time */}
            <div className="mt-[10px] ">
             <h4 className=" md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Transaction Date & Time
              </h4>
              <div className="flex items-center border text-[12px] border-[#E5E7E8] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden gap-1">
                <BsCalendar/> {selectedRow.Timestamp}
              </div>
            
           </div>
              </div>
              {/* second */}
              <div>
                {/* Beneficiary */}
             <div className="">
             <h4 className=" font-[600]">Beneficiary</h4>
              <div className=" space-x-2 flex  items-center">
              <img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
              <span className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] md:h-[40px] rounded-[4px]  px-5 md: overflow-hidden justify-center">
               {selectedRow.name}
            </span>
            <span className="p-1 md:p-3 text-[13px] md:text-[18px] bg-[#F5F6F7] rounded-full">
            <HiDotsVertical/>
            </span>
              </div>
             
             </div>
             {/* phone NUmber */}
           <div className="mt-[20px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px]">
               Beneficiary’s Phone number 
              </h4>
              <div className="border text-[#959FA3] font-[400] text-[12px] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {selectedRow.Beneficiary}
              </div>
            
           </div>
            {/* Transaction*/}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] text-[12px] font-[500] md:text-[14px] leading-[20px] ">
             Transaction Type
              </h4>
              <div className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {selectedRow.type}
              </div>
            
           </div>
            {/* Transaction Date & Time */}
            <div className="mt-[20px] flex justify-end items-center">
              <button
                className="bg-[#0EAD69] font-sans text-sm  text-white px-4 py-2 rounded-full font-[500]"
               >
                Successful
              </button>
            
           </div>
              </div>
            </div>
            
            <div className="mt-4 flex justify-center py-3">
              <button
                className="bg-[#F5F6F7] text-[#191B1C] px-3 font-[500] md:px-[30px] py-2 rounded-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
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

export default Transactions;
