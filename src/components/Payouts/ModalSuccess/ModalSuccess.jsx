import React from 'react'
import { IoMdClose } from 'react-icons/io'
import logo from "../../../assets/successful.png"
import { HiOutlineArrowRight } from 'react-icons/hi'
export const ModalSuccess = ({closeLastModal}) => {
  return (
    <div className="fixed inset-0 font-sans p-[20px] bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
    <div className="bg-white rounded-lg  md:w-1/2">
    <div className='flex p-3 justify-between items-center pb-2 border-b'>
      <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-2">
      Confirm Payout
      </h2>
      <span onClick={closeLastModal} className='className="bg-[#F5F6F7] border border-[#F5F6F7] text-[#191B1C] px-3 font-[600] md:px-[13px] py-3 mb-2 rounded-full'>
        <IoMdClose/></span>
       </div>

       <div className='px-[10%] py-[30px] text-center flex flex-col justify-center'>
        <h3 className='font-[400] font-alata text-[#456EFE]  text-[32px] leading-[39.52px]'>Payout Successful</h3>

        <p className='text-[#A4A9AE] font-[400] text-[18px] leading-[26.37px] md:px-[16%] mt-2'>
          You have successfully approved payout for the month of November fo Gloria Niiquaye Health Centre</p>
         <img src={logo}  className=' object-contain h-[100px] md:h-[200px]' />
         <button className='flex gap-2 items-center rounded-[20px] text-center justify-center font-sans font-[600] leading-[40px] text-[12px] md:text-[14px] text-[#fff] bg-[#0A2EE2] md:py-[10px] '>
          View Receipt
          <HiOutlineArrowRight/>
         </button>
       </div>
       </div>
    </div>
  )
}
