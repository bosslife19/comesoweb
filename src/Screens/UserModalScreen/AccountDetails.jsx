import React from 'react'
import { BsCalendar } from 'react-icons/bs'
import { HiDotsVertical } from 'react-icons/hi'
import logo from '../../assets/imglogo.png'

const AccountDetails = ({closeModal}) => {
  return (
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
               {/* {selectedRow.name} */}
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
                 {/* {selectedRow.Sender} */}
              </div>
            
           </div>
            {/* Voucher Amount */}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Voucher Amount
              </h4>
              <div className="border text-[12px] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.Amount} */}
              </div>
            
           </div>
            {/* Transaction Date & Time */}
            <div className="mt-[10px] ">
             <h4 className=" md:mb-[10px] font-[500] text-[12px] md:text-[14px] leading-[20px] ">
             Transaction Date & Time
              </h4>
              <div className="flex items-center border text-[12px] border-[#E5E7E8] text-[#959FA3] font-[400] md:text-[14px] leading-[20px] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden gap-1">
                <BsCalendar/> 
                {/* {selectedRow.Timestamp} */}
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
               {/* {selectedRow.name} */}
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
                 {/* {selectedRow.Beneficiary} */}
              </div>
            
           </div>
            {/* Transaction*/}
            <div className="mt-[10px] ">
             <h4 className="md:mb-[10px] text-[12px] font-[500] md:text-[14px] leading-[20px] ">
             Transaction Type
              </h4>
              <div className="border text-[#959FA3] font-[400] md:text-[14px] leading-[20px] border-[#E5E7E8] md:w-[292px] md:h-[40px] rounded-[4px]  px-5  overflow-hidden justify-center">
                 {/* {selectedRow.type} */}
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
  )
}

export default AccountDetails
