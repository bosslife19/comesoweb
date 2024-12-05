import { useState } from 'react'
 import Pagination from '../../AdminPagnations/Paginations';
 
import logo from '../../../../assets/imglogo.png'
import { motion } from "framer-motion";   
import MonthPicker from '../../../../Screens/Admin/Calendar/MonthPicker';
// import { HiDotsVertical } from 'react-icons/hi';
// import { BsCalendar } from 'react-icons/bs';
 import AccountDetails from '../../../../Screens/Admin/UserModalScreen/AccountDetails';
 import ReceivedDetails from '../Receiving/Received';

const UsersDetails = () => {
   const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [filterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
   const [isModalOpen, setIsModalOpen] = useState(false);
  const [ SelectedRow,setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("pending"); // Set default active tab as "pending"
  const [showContent, setShowContent] = useState(true); // Initially show content for Pending Payout

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "pending") {
      setShowContent(true); // Show additional content when "Pending" is clicked
    } else {
      setShowContent(false); // Hide additional content when "Completed" is clicked
    }
  };

    
   const PAGE_SIZE = 7;
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
  
 
  const tableData = [
    {
        id: 1,
        img:logo,
        name:"South Royal Park Health Centre(8100319872)",
      ID: "#4443873",
      Timestamp: "09/08/24, 12:0018pm",

      Amount: "$2,000",
      Status: "complete",
      Transactions: "60",
    },
    {
        id: 2,
        img:logo,
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Amount: "$1,500",
      Status: "pending",
      Transactions: "30",
    },
    {
        id: 3,
        img:logo,
        name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$837639",
      Status: "complete",
      Transactions: "70",
    },
    {
        id: 4,
        img:logo,
        name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "Rejected",
      Transactions: "70",
    },
    {
        id: 5,
      img:logo,
      name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      Transactions: "70",
      
    },
    {
        id: 6,
        img:logo,
        name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
    },
    {
        id: 17,
      img:logo,
      name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
        name:"South Royal Park Health Centre(8100319872)",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Amount: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
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

 
  return ( 
    <div>
     
     <div className='md:flex justify-between'>
        {/* Secondary Navigation */}
       <div>
       <div className="flex space-x-4 md:mb-6">
        {/* Pending Payout Button */}
        <button
          onClick={() => handleTabClick("pending")}
          className={`py-[5px] md:py-[10px] px-[20px] md:px-[40px] mb-[20px] border rounded-[15px] md:rounded-[30px] text-[12px] md:text-[17px] ${
            activeTab === "pending" ? "border-[#413B89] text-[#222222E5]" : ""
          }`}
        >
          Sent
        </button>

        {/* Completed Button */}
        <button
          onClick={() => handleTabClick("completed")}
          className={`py-[5px] md:py-[10px] px-[20px] md:px-[40px] mb-[20px] border rounded-[15px] md:rounded-[30px] text-[12px] md:text-[17px] ${
            activeTab === "completed" ? "border-[#413B89] text-[#222222E5]" : ""
          }`}
        >
          Received
        </button>
      </div>

      {/* Secondary Content Rendering */}
      
       </div>
       <div>
      <MonthPicker/> 
    </div>
    </div>
    <div className=''>
        {activeTab === "pending" && ""} {/* Pending Payout Content */}
        {activeTab === "completed" && <ReceivedDetails  />} {/* Completed Content */}
      </div>
    
    {showContent && (
    <div className=" w-full  bg-white rounded-lg shadow-md mt-[20px]">
      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scroll-container"
      >
        <table className="w-full mx-2 bg-white  border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="">
                  
                   <th className="md:px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Payment ID
                   </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Timestamp   
                     </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Beneficiary
                   </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Amount
                   </th>

                   
                   <th className="md:px-4 py-[20px] md:text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
                   </th>
                   
                   <th className="md:px-4 py-[20px] md:text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
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
                 className="border-b hover:bg-gray-50 "
              >
                 
               <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.ID}</td>
               
                {/* <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row}</td>              */}
                <td className=" md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center md:text-start text-[#384250]">{row.Timestamp}</td>
                 <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.name}               
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
                        : row.Status === "Rejected"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    } text-[12px] text-[#384250] font-bold px-[10px] py-[5px] rounded-[50px]`}
                  >
                    {row.Status}
                  </span>
                </td>
                <td className="  md:px-4 py-2">
                <select
                  onChange={(e) => handleChange(e, row)}
                  value={selectedAction}
                  className="border outline-none  text-center py-[3px] md:py-2 rounded-full text-[12px] md:text-[14px]"
                >
                  <option value="">Action</option>
                  <option value="Approve">View Details</option>
                  <option value="Amount">Amount</option>
                </select>
              </td>


              {/* modal */}
           {/* modal OPen */}
           {isModalOpen &&  (
        <AccountDetails
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
    )}
    </div>
  );
};

export default UsersDetails
