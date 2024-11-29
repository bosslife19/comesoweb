import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Pagination from '../../Pagination/Paginations';
import { Modal } from '../ModalDetals1/ModalDetails1';
import { Modal2 } from '../ModalDetails2/ModalDetails2';
import { ModalOtpPage } from '../ModalOTP/ModalOTP';
import { ModalSuccess } from '../ModalSuccess/ModalSuccess';
import logo from '../../../assets/imglogo.png'
import { motion } from "framer-motion";

const PayoutDetai = ({name}) => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery] = useState("");
  const [filterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isLastModalOpen, setIsLastModalOpen] = useState(false);

  // Modal Handlers
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
    setSelectedAction("");
  };

  const handProceed = () => {
    setIsModalOpen(false);
    setIsSecondModalOpen(true);
    setIsThirdModalOpen(false);
    setIsLastModalOpen(false);
  };

  const handProceedSecond = () => {
    setIsSecondModalOpen(false);
    setIsThirdModalOpen(true);
  };

  const handProceedThird = () => {
     setIsThirdModalOpen(false);
     setIsLastModalOpen(true);
  };

  const closeSecondModal = () => setIsSecondModalOpen(false);
  const closeThirdModal = () => setIsThirdModalOpen(false);
  const closeLastModal = () => setIsLastModalOpen(false);
  const PAGE_SIZE = 7;
 
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
        img:logo,
        name:"South Royal Park Health Centre",
      ID: "#4443873",
      Timestamp: "09/08/24, 12:0018pm",

      Payout: "$2,000",
      Status: "complete",
      Transactions: "60",
    },
    {
        id: 2,
        img:logo,
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Payout: "$1,500",
      Status: "pending",
      Transactions: "30",
    },
    {
        id: 3,
        img:logo,
        name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$837639",
      Status: "complete",
      Transactions: "70",
    },
    {
        id: 4,
        img:logo,
        name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "Rejected",
      Transactions: "70",
    },
    {
        id: 5,
      img:logo,
      name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
      Transactions: "70",
      
    },
    {
        id: 6,
        img:logo,
        name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
    },
    {
        id: 17,
      img:logo,
      name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
        name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
        name:"South Royal Park Health Centre",
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "pending",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
      Status: "complete",
     type:"send voucher"
      
    },
    {
      ID: "#12233",
      Timestamp: "09/08/24, 12:0018pm",
      Sender: "08100319760",
      Payout: "$3,000",
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
 
  const navigate = useNavigate();


  const handles = (id) => {
    // Use navigate to go to a page with the product or detail
    navigate(`/Pays/${id}`);
  };
  return (
    <div className=" w-full  bg-white rounded-lg shadow-md mt-[20px]">
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
        <table className="w-full mx-2 bg-white  border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="">
                   <th className="md:px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   Health Faclity
                   </th>
                   <th className="md:px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     ID
                   </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Transactions   
                     </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Payout
                   </th>
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
                   </th>
                   
                   <th className="md:px-4 py-[20px] md:text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
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
                 className="border-b hover:bg-gray-50 "
              >
                  <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] items-center gap-2 md:flex font-sans leading-[20px] text-start text-[#384250]">
                    <img src={row.img}  className=" w-[30px] h-[30px] rounded-full "/>
                     {row.name}
                </td>
               <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.ID}</td>
               
                {/* <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row}</td>              */}
                <td className=" md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center md:text-start text-[#384250]">{row.Transactions}</td>
                 <td className="md:px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {row.Payout}               
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
                  <option value="Payout">Payout</option>
                </select>
              </td>


              {/* modal */}
              {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          handProceed={handProceed}
          row={selectedRow}
        />
      )}
      {isSecondModalOpen && <Modal2  row={selectedRow} isOpen={isSecondModalOpen} closeSecondModal={closeSecondModal} handProceedSecond={handProceedSecond} />}
      {isThirdModalOpen && <ModalOtpPage isOpen={isThirdModalOpen} closeThirdModal={closeThirdModal} handProceedThird={handProceedThird} />}
      {isLastModalOpen && <ModalSuccess isOpen={isLastModalOpen} closeLastModal={closeLastModal} />}



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

export default PayoutDetai