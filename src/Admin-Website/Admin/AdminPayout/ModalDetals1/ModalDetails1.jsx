/* eslint-disable react/prop-types */
 import { BsArrowRight, BsCalendar } from 'react-icons/bs';
import { HiDotsVertical } from 'react-icons/hi';
import logo from "../../../../assets/imglogo.png"
 import { IoMdClose } from 'react-icons/io';
import { ClipLoader } from 'react-spinners';

 

export const Modal = ({ row, closeModal, handProceed, company, bank, accountNumber, amount, phone ,buttonSpinner}) =>{
  const date =new Date(row.created_at); // Example date

    
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      month: 'long',  // Full month name
      day: 'numeric', // Day of the month
      year: 'numeric' // Year
    }).format(date);
    
    

  return(
    <div className="fixed inset-0 font-sans p-3 bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
          <div className="bg-white rounded-lg p-6 md:w-1/2">
            <div className='flex justify-between'>
            <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-4">
             Payout Details
            </h2>
            <span className='className="bg-[#F5F6F7] border border-[#F5F6F7] text-[#191B1C] px-3 font-[600] md:px-[13px] py-3 mb-2 rounded-full'><IoMdClose/></span>
            </div>
            <div className="flex gap-3 justify-between border-t pt-[20px]">

<div>
  {/* sender */}
<div className="">
<h4 className=" font-[600]">Beneficiary Company</h4>
<div className=" space-x-2 flex  items-center">
<img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
<span className="pt-2 border text-[#959FA3] font-[400] text-[12px] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
 {/* {row.name} */}
 {company}
</span>
<span className="p-1 md:p-3 text-[13px] md:text-[18px] bg-[#F5F6F7] rounded-full">
<HiDotsVertical/>
</span>
</div>

</div>
{/* phone NUmber */}
<div className="mt-[20px] ">
<h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px]">
Company’s Phone number
</h4>
<div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden justify-center">
   {/* {row.Sender} */}
   {phone}
</div>

</div>
{/* Voucher Amount */}
<div className="mt-[10px] ">
<h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
Payout Amount
</h4>
<div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden justify-center">
   {/* {row.Amount} */}
   {amount}
</div>

</div>
{/* Transaction Date & Time */}
<div className="mt-[10px] ">
<h4 className=" md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
Request Date
</h4>
<div className="flex items-center border text-[12px] border-[#E5E7E8] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden gap-1">
  <BsCalendar/> 
  {/* {row.Timestamp} */}
  {formattedDate}
</div>

</div>
</div>
{/* second */}
<div>
  {/* Beneficiary */}
<div className="">
<h4 className=" font-[600]">Company’s Bank</h4>
<div className=" space-x-2 flex  items-center">
<img src={logo} className=" shadow-md w-[30px] h-[30px] rounded-full" />
<span className="border pt-2 text-[#959FA3] font-[400] text-[12px] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[207px] h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
 {/* {row.name} */}
 {bank}
</span>
<span className="p-1 md:p-3 text-[13px] md:text-[18px] bg-[#F5F6F7] rounded-full">
<HiDotsVertical/>
</span>
</div>

</div>
{/* phone NUmber */}
<div className="mt-[20px] ">
<h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px]">
Company’s Account Number 
</h4>
<div className="border text-[#959FA3] font-[400] text-[12px] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden justify-center">
   {/* {row.Beneficiary} */}
   {accountNumber}
</div>

</div>
{/* Transaction*/}
{/* <div className="mt-[10px] ">
<h4 className="md:mb-[10px] text-[12px] font-[500] md:text-[14px] leading-[20px] ">
Transaction 
</h4>
<div className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden justify-center">
  
</div>

</div> */}
{/* Transaction Date & Time */}
{/* <div className="mt-[10px] ">
<h4 className=" md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
Ending Date Period
</h4>
<div className="flex items-center border text-[12px] border-[#E5E7E8] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] md:w-[292px] md:h-[40px] rounded-[4px]  px-5 pt-2 overflow-hidden gap-1">
  <BsCalendar/> 
  
</div>

</div> */}

</div>
 </div>
        <div className="mt-4 flex justify-between">
          <button onClick={closeModal}  
           className="bg-[#F5F6F7] text-[#191B1C] px-3 font-[500] md:px-[30px] py-2 rounded-full">Close</button>
          <button onClick={()=>{handProceed(amount, accountNumber)}}   className="bg-[#0A2EE2] items-center flex gap-1 font-sans text-sm  text-white px-4 py-2 rounded-full font-[500]">
          {buttonSpinner ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                <span>Proceed</span>
              )}
            
          <BsArrowRight/>
          </button>
        </div>
      </div>
    </div>
  );
} 
  
