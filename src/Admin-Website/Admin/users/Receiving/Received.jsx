// CompletedPage.jsx
import { useState } from "react";
 import { motion } from "framer-motion"; 
import Pagination from "../../AdminPagnations/Paginations";
import AccountDetails from "../../../../Screens/Admin/UserModalScreen/AccountDetails";
import ReceiveModal from "../../../../Screens/Admin/UserModalScreen/ReceivedModal";
const PAGE_SIZE = 7; 

const ReceivedDetails = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery] = useState("");
    const [filterStatus] = useState("All");
    const [selectedAction, setSelectedAction] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
   const [ SelectedRow,setSelectedRow] = useState(null);
 
    const tableData = [
        {
            id: 1,
           Bank:"United Bank",
           Duration:"09/10/2024 - 12",
          ID: "#4443873",
          Timestamp: "09/08/24, 12:0018pm",
    
          Amount: "$2,000",
          Status: "complete",
          Transactions: 60,
        },
        {
            id: 2,
           Bank:"United Bank",
           Duration:"09/10/2024 - 12",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Amount: "$1,500",
          Status: "pending",
          Transactions: 30,
        },
        {
            id: 3,
           Bank:"United Bank",
           Duration:"09/10/2024 - 12",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$837639",
          Status: "complete",
          Transactions: 70,
        },
        {
            id: 4,
           Bank:"United Bank",
           Duration:"09/10/2024 - 12",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "Rejected",
          Transactions: 70,
        },
        {
            id: 5,
         Bank:"United Bank",
         Duration:"09/10/2024 - 12",
          name:"South Royal Park Health Centre(8100319872)",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
          Transactions: 70,
          
        },
        {
            id: 6,
           Bank:"United Bank",
           Duration:"09/10/2024 - 12",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
        },
        {
            id: 17,
         Bank:"United Bank",
         Duration:"09/10/2024 - 12",
          name:"South Royal Park Health Centre(8100319872)",
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "pending",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "complete",
         type:"send voucher"
          
        },
        {
          ID: "#12233",
          Timestamp: "09/08/24, 12:0018pm",
          Sender: "08100319760",
          Amount: "$3,000",
          Status: "complete",
         type:"send voucher"
          
        },
        
        
        
      ];
    
     
  const filteredData = tableData.filter((row) => {
    const matchesQuery = row.ID.toLowerCase().includes(searchQuery.toLowerCase());
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

      const handleChange = (event, row) => {
        const value = event.target.value;
        setSelectedAction(value);
        if (value === "View") {
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
      <div className="   bg-white rounded-lg shadow-md mt-[20px]">

      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scroll-container "
      >
        <table className=" w-full  mx-2 bg-white  border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="">
                  
                   <th className="px-2 md:px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Payment ID
                   </th>
                   <th className="px-2 md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Timestamp(Request)
                     </th>
                     <th className="px-2 md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Sender
                   </th>
                   <th className="px-2 md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Amount
                   </th>
                   
                   <th className="px-2 md:px-4 py-[20px] md:text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Status
                   </th>
                   
                   <th className="px-2 md:px-4 py-[20px] md:text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
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
                className={`${
                    index % 2 === 0 ? "bg-gray-100" : " bg-white" 
                  } border-b hover:bg-gray-50`}
              >
                 
               <td className="px-2 md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.ID}</td>
               
                {/* <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row}</td>              */}
                <td className=" px-2 md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center md:text-start text-[#384250]">{row.Timestamp}</td>
                 <td className="px-2 md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Sender}               
                  </td>
                  <td className="px-2 md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Amount}               
                  </td>
                  
                  <td className="px-2 md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
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
                <td className="  px-2 md:px-4 py-2">
                <select
                  onChange={(e) => handleChange(e, row)}
                  value={selectedAction}
                  className="border outline-none  text-center py-[3px] md:py-2 rounded-full text-[12px] md:text-[14px]"
                >
                  <option value="">Action</option>
                  <option value="View">View Details</option>
                  <option value="Amount">Amount</option>
                </select>
              </td>
               {/* modal OPen */}
           {isModalOpen &&  (
        <ReceiveModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        />
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

export default ReceivedDetails;
