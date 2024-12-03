import  { useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  
import Pagination from "../Pagination/Paginations";
 // import ButtonsWithPopup from "./SideButtons/ButtonWithProps";
 import logo from "../../assets/imglogo.png"
   const PAGE_SIZE = 10;
 
const PayoutBoardList  = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [filterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  
  const handleChange = (event, row) => {
    const value = event.target.value;

    setSelectedAction((prev) => ({
      ...prev,
      [row.id]: value, // Set action for the specific row ID
    }));

    if (value === "Payout") {
      setSelectedRow(row);
      setIsModalOpen(true);
    }
  };


  
 
  
  const tableData = [
    {
        id: 1,
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",
      Payout: "$2,000",
      Status: "complete",
      Transactions: "60",
      Amount:"$150",
    },
    {
        id: 2,
        Amount:"$150",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",      Payout: "$1,500",
      Status: "pending",
      Transactions: "30",
    },
    {
        id: 3,
        
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      
      PhoneNumber:"0810003874",
      Amount:"$150",
      Status: "complete",
    },
    {
        id: 4,
        
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "Failed",
    },
    {
        id: 5,
      
      name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
      
    },
    {
        id: 6,
        
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
    },
    {
        id: 17,
      
      name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "complete",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "mako Cenjo",     
      PhoneNumber:"0810003874",
      Payout: "$3,000",
      Status: "complete",
     type:"send voucher"
      
    },
    
    
    
  ];

  const filteredData = tableData.filter((row) => {
    const matchesQuery = row.Timestamp.toLowerCase().includes(searchQuery.toLowerCase());
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
 
 

 
  return (
   <div className="  lg:h-[100vh] ">
     <div className=" w-full   bg-white rounded-lg shadow-md mt-[20px] ">
    <div className=" md:flex justify-between items-center mb-2 font-sans">
  {/* Left Section: Title and Tag */}
  
<div className="flex justify-between px-[10px] flex-wrap items-center">
<div className="flex gap-2 items-center ">
{/* <span className=" text-[#49454FCC] font-[400] text-[12px] leading-[17.64px] sm:text-[14px]">
Health Faclity
</span> */}


</div>

</div>
 
{/* Right Section: Search Bar and Filter Button */}
 
</div>


      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scroll-container"
      >
        <table className="w-full mx-2  border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="">
                   <th className="md:px-4 w-[100px]  py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Timestamp
                   </th>
                   <th className="md:px-4 w-[100px] py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Sender
                   </th>
                   <th className="md:px-4 w-[100px] py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Phone Number   
                     </th>
                   <th className="md:px-4 w-[100px] py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Amount
                   </th>
                   <th className="md:px-4 w-[100px] py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
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
              onClick={(e) => {
                // Check if the click happened on the select element or its child elements
                if (e.target.tagName !== 'SELECT') {
                  // Perform your row navigation or action here
                  handles(row.id);  // Replace with your navigation handler
                }
              }}
                key={index}
                variants={rowAnimation}
                initial="hidden"
                animate="visible"
                custom={index} 
                className={`${
                    index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                  } border-b hover:bg-gray-50`}
              >
                  
               <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.Timestamp}</td>
               
                 <td className=" md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center md:text-start text-[#384250]">{row.Sender}</td>
                 <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.PhoneNumber}               
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Amount}               
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  <span
                    className={`${
                      row.Status === "complete"
                        ? "text-[#3ECF8E]"
                        : row.Status === "pending"
                        ? "text-[#FFC13C]"
                        : row.Status === "Failed"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.Status}
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
         

 
    </div>
   </div>
  );
};

export default PayoutBoardList;
