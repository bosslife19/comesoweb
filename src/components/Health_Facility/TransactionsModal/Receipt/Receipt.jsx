import React from 'react'
import { IoMdClose } from 'react-icons/io'
 import { HiOutlineArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
export const Receipts = ({closeReciptModal}) => {

const navigate = useNavigate()
  const handles = () => {
    // Use navigate to go to a page with the product or detail
    navigate("/Pays");
  };
  return (
    <div className="fixed inset-0 font-sans p-[20px] bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
    <div className="bg-white rounded-lg  md:w-1/2 " >
    <div className='flex p-2 justify-end items-center '>
       
      <span onClick={closeReciptModal} className='className="bg-[#F5F6F7] border border-[#F5F6F7] text-[#191B1C] px-3 font-[600] md:px-[13px] py-3 mb-2 rounded-full'>
        <IoMdClose/></span>
       </div>

       <div className='px-[10%]  pb-[20px] text-center flex flex-col justify-center gap-4'>
        <h3 className='font-[400] font-alata text-[#A4A9AE]  text-[20px] leading-[29.52px]'>
        Transaction ID: #234543
        </h3>

        <h2 className='font-[400] font-alata text-[#456EFE]  text-[32px] md:leading-[29.52px]'>Jamal Musiala Health Centre</h2>

        <p className='text-[#A4A9AE] font-[400] text-[20px] leading-[29.37px] md:px-[16%] '>
        09132234565
         </p>
         <p className='text-[#A4A9AE] font-[400] text-[20px] leading-[29.37px] md:px-[16%] '>
         Verizon Bank
         </p>
         <div className='border w-full'/>
         <span className='text-[#23303B] font-poppins font-[600] text-[20px] leading-[30px] text-center'>
          40
         Transactions
         </span>
         <span className='w-[290px] flex justify-center items-center m-auto   h-[49px] text-[#13C999] font-poppins text-[20px] leading-[29.3px] font-[400] bg-[#DDF7F0]'>Transactions Status: Sent</span>

         <span className='text-[#23303B] font-poppins font-[600] text-[36px] leading-[54px] '>GHC2,500.00</span>
          <button onClick={handles} className='flex gap-2 items-center rounded-[20px] text-center justify-center font-sans font-[600] leading-[40px] text-[14px] md:text-[14px] text-[#fff] bg-[#0A2EE2] md:py-[10px] '>
          Export (Img, PDF)
          <HiOutlineArrowRight/>
         </button>
       </div>
       </div>
    </div>
  )
}
