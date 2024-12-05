import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  
import Pagination from "../websitePagnations/Paginations";
import { BsCalendar2 } from "react-icons/bs";   
 import ModalTransactions from "../../../Screens/Website/Transactions/ModalTransactions";
import axiosClient from "../../../axios-client";
 // import ButtonsWithPopup from "./SideButtons/ButtonWithProps";
    const PAGE_SIZE = 11; 
 
const Transactions  = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [filterStatus] = useState("All");
  const [selectedRow, setSelectedRow] = useState(null); // State to track selected row
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [transactions, setTransactions] = useState([]);

  const date = transactions?.map(item=>{
    const date = new Date(item.created_at); // Example date

    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',  // Full month name
      day: 'numeric', // Day of the month
      year: 'numeric' // Year
    }).format(date);
    
    return formattedDate;
   })

   useEffect(()=>{
    const getUser = async ()=>{
     try {
       const response = await axiosClient.get('/user');
       
       
        setTransactions(response.data.transactions)
     } catch (error) {
       console.log(error);
     }
     
   
    }
    getUser();
     }, []);
 
  
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
      id: 1,
    Timestamp: "09/08/24, 12:0018pm",
    Sender: "mako Cenjo",
    Payout: "$2,000",
    Status: "complete",
    Transactions: "60",
    Amount:"$150",
  },
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

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

 
  return (
    <div className="lg:h-[100vh]">
      <div className="flex justify-between pl-2 pt-[15px] items-center">
          <h2 className="text-[#23303B] font-poppins font-[500] text-[15px] md:text-[24px] md:leading-[35.16px]">
          Transactions          </h2>
          <span className="flex gap-2 text-[#23303B] px-4 py-2 rounded-[30px] border items-center">
            <BsCalendar2 />
            This Month
          </span>
        </div>
      <div className="w-full   bg-white shadow-md rounded-[20px] mt-[20px]">
        

        {/* Responsive Table Container */}
        {
          transactions && 
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto scroll-container"
        >
          <table className="w-full mx-2 border-[#F9FAFB] bg-white ">
            <thead>
              <tr>
                <th className="md:px-4 w-[100px] py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Timestamp
                </th>
                <th className="md:px-4 w-[100px] py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Sender
                </th>
                <th className="md:px-4 w-[100px] py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Phone Number
                </th>
                <th className="md:px-4 w-[100px] py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Amount
                </th>
                <th className="md:px-4 w-[100px] py-[20px] text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                  Status
                </th>
              </tr>
            </thead>
            <motion.tbody>
              {transactions.map((row, index) => (
                <motion.tr
                  key={index}
                  onClick={() => handleRowClick(row)}
                  className={`${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } border-b hover:bg-gray-50 cursor-pointer`}
                >
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                    {date[index]}
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                    {row.sender}
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                    {row.phone || "-"}
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                    {row.amount || "-"}
                  </td>
                  <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250]">
                    <span
                      className={`${
                        row.status === "Received"
                          ? "text-[#3ECF8E]"
                          : row.Status === "Pending"
                          ? "text-[#FFC13C]"
                          : row.Status === "Failed"
                          ? "text-[#F66F68]"
                          : "text-[#F66F68]"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </motion.div>
        }


        <Pagination
          count={tableData.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={PAGE_SIZE}
        />
      </div>

      {/* Modal */}
      {isModalOpen && selectedRow && (
        <ModalTransactions
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        />
       
      )}
    </div>
  );
};

export default Transactions;
