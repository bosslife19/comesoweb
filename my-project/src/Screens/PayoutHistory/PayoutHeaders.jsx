import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { BsCalendar2, BsCalendar2Check, BsCalendar2Date } from 'react-icons/bs';
import { FaArrowTrendUp } from 'react-icons/fa6';

const PayoutHeaders = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isTextVisible2, setIsTextVisible2] = useState(true);

  const toggleVisibilities = () => {
    setIsTextVisible2(!isTextVisible2);
  };
  const toggleVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };


  return (
    <div >
        <div className='flex justify-between py-[20px] flex-wrap gap-4'>
            <h3 className=' text-[#202224] font-[700] text-[22px] md:text-[32px] leading-[43.65px]'>Payout</h3>
          
        </div>
     {/* flex */}
     <div className='flex justify-start md:flex-row flex-wrap gap-4'>
     <div className="w-full md:w-[328px]  bg-[#fff] cursor-pointer  text-[#6B788E]">
          <div className="border py-5 border-[#6B788E1F] border-opacity-10 shadow-md rounded-md w-full">
            <div className="flex relative justify-between items-center gap-3 p-4">
              <div className="space-y-3">
                <span className="font-[600] leading-[21.82px] text-[14px] md:text-[16px] text-[#202224] font-poppins">
                ALL PAYOUTS
                </span>
                <div className="font-[700] p leading-[38.19px] text-[18px] gap-2 md:text-[28px] text-[#202224] font-poppins flex items-center md:gap-[50px]">
                 GHC  
                  {isTextVisible2 ? " 15,200.00" : "********"}
                  <button
                    onClick={toggleVisibilities}
                    className="text-[#6B788E] hover:text-[#202224] relative right-0"
                  >
                    {isTextVisible2 ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
              
            </div>
            <div className="px-[20px] space-y-4">
              <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
                <FaArrowTrendUp size={20} color="#2FC271" />
                Since 8th October, 2022
              </span>

               
            </div>
          </div>
        </div>

        <div className="w-full md:w-[328px]  bg-[#fff] cursor-pointer  text-[#6B788E]">
          <div className="border py-5 border-[#6B788E1F] border-opacity-10 shadow-md rounded-md w-full">
            <div className="flex relative justify-between items-center gap-3 p-4">
              <div className="space-y-3">
                <span className="font-[600] leading-[21.82px] text-[14px] md:text-[16px] text-[#202224] font-poppins">
                PAYMENT REQUESTS
                </span>
                <div className="font-[700] p leading-[38.19px] text-[18px]   md:text-[28px] text-[#202224] font-poppins flex items-center md:gap-[50px]">
               
                  {isTextVisible ? " 40 Requests" : "******"}
                  <button
                    onClick={toggleVisibility}
                    className="text-[#6B788E] hover:text-[#202224]"
                  >
                    {isTextVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
             
            </div>
            <div className="px-[20px] space-y-4">
              <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
                <FaArrowTrendUp size={20} color="#2FC271" />
                Due tomorrow, Mar 6th, 2024
              </span>

             
            </div>
          </div>
        </div>

         
     
      </div>
      <div className='flex justify-between pl-2 pt-[15px] items-center'>
        <h2 className='text-[#23303B] font-poppins font-[500] text-[15px] md:text-[24px] md:leading-[35.16px]'>Payout Details</h2>
       <span className='flex gap-2 text-[#23303B] px-4 py-2 rounded-[30px] border items-center'>
        <BsCalendar2/>
        This Year
       </span>
      </div>
    </div>
  )
}
export default PayoutHeaders
