import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
 // import Pagination from "../../Pagination/Paginations";
  import logo from "../../../../../assets/imglogo.png"
  import { BsCalendar } from "react-icons/bs";
import { HiDotsVertical } from "react-icons/hi";
import { BiUserPlus } from "react-icons/bi";
 import Pagination from "../../../../../Admin-Website/Admin/AdminPagnations/Paginations"; 
import FacilitiesModals from "../../../facilitiesModal/FacilitiesModals";
import axiosClient from "../../../../../axios-client";
import { toast } from "react-toastify";
   

const PAGE_SIZE = 10;
 
const HealthBord  = () => {
  const [currentPage, setCurrentPage] = useState(1);
   const [searchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedAction, setSelectedAction] = useState("");
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [selectedRow, setSelectedRow] = useState(null);
   const [isModalOpens, setIsModalOpens] = useState(false);
const [facilities, setFacilities] = useState([])
const [selectedActions, setSelectedActions] = useState({});
  
const performAction = async (endpoint, row, successMessage) => {
  try {
    const res = await axiosClient.post(endpoint, { id: row.id });
    if (res.data.status) {
      toast.success(successMessage);
    } else {
      toast.error(`Failed to perform the action on ${row.company_name}`);
    }
  } catch (error) {
    console.error(`Error performing action on ${row.company_name}:`, error);
    toast.error(`An error occurred while processing the request for ${row.company_name}`);
  }
};

const handleChange = async (event, row) => {
  const value = event.target.value;

  setSelectedActions((prev) => ({
    ...prev,
    [row.id]: value, // Track action for this specific row
  }));

  try {
    switch (value) {
      case "View Details":
        setSelectedRow(row); // Set the row data of the currently selected entity
        //  console.log(row)
        
      setIsModalOpen(true); // Open the modal
        break;

      case "Approve":
       
        await performAction('/user/approve', row, `${row.company_name} has been approved successfully for future transactions`);
        break;

      case "Deactivate":
        
        await performAction('/user/deactivate', row, `${row.company_name} has been deactivated successfully`);
        break;

      case "Verify":
        await performAction('/user/verify', row, `${row.company_name} has been verified successfully`);
        break;

      case "Activate":
        
        await performAction('/user/activate', row, `${row.company_name} has been activated successfully`);
        break;

        case "Verify Email":
        
        await performAction('/user/verify-email', row, `${row.company_name} email has been verified successfully`);
        break;
      default:
        console.log(`Action "${value}" is not defined`);
        break;
    }
  } catch (error) {
    console.error(`Error processing action "${value}" for row:`, row, error);
  }
};




  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
    setSelectedAction("");
  };
  const tableData = [
    {
      UserID: "#43873",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "0810031976",
      Amount: "$2,000",
      Status: "Active",
     
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "0810031976",
      Amount: "$1,500",
      Status: "pending",
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "08100319760",
      Amount: "$837639",
      Status: "Active",
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "Rejected",
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      name:"Benz",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
     
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "pending",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "Active",
      
    },
    {
      UserID: "#12233",
      LastVisted: "09/08/24, 12:0018pm",
      PhoneNumber: "08100319760",
      Amount: "$3,000",
      Status: "Active",
      
    },
    
    
    
  ];

  const filteredData = tableData.filter((row) => {
    const matchesQuery = row.UserID.toLowerCase().includes(searchQuery.toLowerCase());
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
 
//   const handleFilterChange = (status) => {
//     setFilterStatus(status);
//   };


const handleChanges = () => {
  setIsModalOpens(true);
};

const closeModals = () => {
  setIsModalOpens(false);
};
 
useEffect(()=>{
  const getUsers = async () => {
    try {
      const res = await axiosClient.get("/user/all");

      
      setFacilities(res.data.facilities);
    } catch (error) {
      console.log(error);
    }
  };
  getUsers();
},[])
const date = facilities?.map(item=>{
  const date = new Date(item.created_at); // Example date

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',  // Full month name
    day: 'numeric', // Day of the month
    year: 'numeric' // Year
  }).format(date);
  
  return formattedDate;
 })
  return (
    
    <div className="  w-full p-4 rounded-lg   ">
    <div className=" md:flex justify-between items-center mb-6 font-sans  ">
  {/* Left Section: Title and Tag */}
  <div className="flex justify-between w-full  gap-3 items-center md:mb-0 mb-5 space-y-4">
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="md:text-[32px] text-[#202224] leading-[43.65px] font-[700] font-inter  "
>
Health Facilities
</motion.h2>
 <button  onClick={handleChanges} className="flex text-[#333333] font-inter font-[500] text-[14px] leading-[20.3px] gap-1 items-center border py-2 px-1  rounded-[5px] border-[#D0D5DD]">
    <BiUserPlus/>
    Add New Facility
 </button>
</div>

 {/* Modal */}
 {isModalOpens && ( 
        <FacilitiesModals
        isOpen={isModalOpens}
        closeModals={closeModals}
        />
      )}
</div>


      {/* Responsive Table Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-auto scroll-container shadow-md"
      >
        <table className="min-w-full bg-white border border-[#F9FAFB] rounded-lg">
          <thead>
          <tr className="bg-[#fff] border-t shadow-sm rounded-[30px] ">
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                   ID
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     PhoneNumber
                   </th>
                   <th className="px-4 py-[20px] text-start text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Names
                   </th>
                   
                     
                   <th className=" px-4 py-[20px]   text-center text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Last Visted
                   </th>
                   
                   
                   
                   <th className="px-4 py-[20px] text-end text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Balance
                   </th>
                   <th className="px-4  py-[20px] text-end text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                    Status
                   </th>
                   
                   <th className="px-4 py-[20px] text-center  text-[12px] font-[500] text-[#6B788E] font-sans leading-[18px]">
                     Actions
                   </th>
                 </tr>
          </thead>
          <motion.tbody
  initial="hidden"
  animate="visible"
  variants={containerVariants}
>
            {facilities?.map((row, index) => (
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
               <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.id || "N/A"}</td>
                <td className="px-4 flex gap-2 items-center py-4 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">
                  {/* <img src={logo} className="w-[30px] h-[30px] rounded-full" /> */}
                  {row.phone}
                </td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-start text-[#384250]">{row.company_name}</td>      
                 <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-center text-[#384250] ">{date[index]}</td>
                <td className="px-4 py-2 text-[11px] md:text-[13px] font-[500] font-sans leading-[20px] text-end text-[#384250]">{row.balance}</td>
                  <td className="px-4 py-2 text-[11px]  md:text-[13px] font-[500] font-sans leading-[20px] text-end text-[#384250]">
                  <span
                    className={`${
                      row.status === "active"
                        ? "text-[#3ECF8E]"
                        : row.status === "pending"
                        ? "text-[#FFC13C]"
                        : row.status === "deactivated"
                        ? "text-[#F66F68]"
                        : " text-[#F66F68]"
                    }  text-[#384250] font-bold     rounded-[50px]`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className=" px-2 py-2 text-end">
                <select
                 onChange={(e) => handleChange(e, row)}
                //  value={selectedAction}
                 value={selectedActions[row.id] || ""}
                  className="border outline-none  py-2 rounded-md text-sm"
                >
                  <option value="">Action</option>
                  <option value="Send Mail">Send Mail</option>
                  <option value="View Details">View Details</option>
                  <option value="Deactivate">Deactivate</option>
                  <option value="Activate">Activate</option>
                  <option value="Approve">Approve</option>
                  <option value="Verify Email">Verify Email</option>
                </select>
              </td>


              {isModalOpen  && (
        <div className="fixed p-3 inset-0 font-sans bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
          <div className="bg-white rounded-lg p-6 md:w-1/2">
            <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-4">{row.company_name} Details</h2>
            <div className="flex gap-3 justify-between border-t pt-[20px]">

              <div>
                {/* sender */}
             <div className="">
             <h4 className=" font-[600]">Name</h4>
              <div className=" space-x-2 flex  items-center">
              <img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
              <span className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
               {/* {selectedRow.name} */}
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
               Facility's Phone number 
              </h4>
              <div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.Sender} */}
                 {selectedRow.phone}
              </div>
            
           </div>
            {/* Voucher Amount */}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Balance
              </h4>
              <div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.Amount} */}
                 {selectedRow.balance}
              </div>
            
           </div>
            {/* Transaction Date & Time */}
            <div className="mt-[10px] ">
             <h4 className=" md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Registration Date
              </h4>
              <div className="flex items-center border text-[12px] border-[#E5E7E8] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden gap-1">
                <BsCalendar/>
                 {date[index]}
              </div>
            
           </div>
              </div>
              {/* second */}
              <div>
                {/* Beneficiary */}
             <div className="">
             <h4 className=" font-[600]">KYC Status</h4>
              <div className=" space-x-2 flex  items-center">
              <img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
              <span className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] md:h-[40px] rounded-[4px]  px-5 md: overflow-hidden justify-center">
               {/* {selectedRow.name} */}
               {selectedRow.kycCompleted? 'Completed':'Not Completed'}
            </span>
            <span className="p-1 md:p-3 text-[13px] md:text-[18px] bg-[#F5F6F7] rounded-full">
            <HiDotsVertical/>
            </span>
              </div>
             
             </div>
             {/* phone NUmber */}
             <div className="mt-[10px]">
            <h4 className="font-[500] text-[12px] md:text-[14px] leading-[20px]">
              Facility KYC Documents
            </h4>
            <div className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-auto rounded-[4px] p-4 overflow-hidden">
            <ul className="list-disc pl-5">
                  {selectedRow.certificate_and_compliance && <li>
                      <a
                        href={selectedRow.certificate_and_compliance}
                        target="_blank"
                        download={true}
                        rel="noopener noreferrer"
                        className="text-[#0EAD69] underline"
                      >
                       HERFA Compliance
                      </a>
                    </li>}
                    {selectedRow.company_logo && <li>
                      <a
                        href={selectedRow.company_logo}
                        target="_blank"
                        download={true}
                        rel="noopener noreferrer"
                        className="text-[#0EAD69] underline"
                      >
                       Facility Logo
                      </a>
                    </li>}
                    {selectedRow.health_regulations_compliance && <li>
                      <a
                        href={selectedRow.health_regulations_compliance}
                        target="_blank"
                        download={true}
                        rel="noopener noreferrer"
                        className="text-[#0EAD69] underline"
                      >
                       Bank Statement
                      </a>
                    </li>}
                    {selectedRow.proof_of_registration && <li>
                      <a
                        href={selectedRow.proof_of_registration}
                        target="_blank"
                        download={true}
                        rel="noopener noreferrer"
                        className="text-[#0EAD69] underline"
                      >
                       Proof Of Registration
                      </a>
                    </li>}
                   
                 
                </ul>
              {/* {row.kycDocuments && row.kycDocuments.length > 0 ? (
                <ul className="list-disc pl-5">
                  {row.kycDocuments.map((doc, index) => (
                    <li key={index}>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0EAD69] underline"
                      >
                        {doc.name}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-[#959FA3]">No KYC documents available.</p>
              )} */}
            </div>
          </div>
           <div className="mt-[20px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px]">
               Facility's Bank
              </h4>
              <div className="border text-[#959FA3] font-[400] text-[12px] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.Beneficiary} */}
                 {selectedRow.bank_name}
              </div>
            
           </div>
            {/* Transaction*/}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] text-[12px] font-[500] md:text-[14px] leading-[20px] ">
             Facility's Account Number
              </h4>
              <div className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.type} */}
                 {selectedRow.account_number}
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

export default HealthBord;
