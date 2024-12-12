import React from 'react'
 
import { useNavigate } from 'react-router-dom'
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import logo from "../../../../assets/charm_tic.png"
const DashboardModal = ({closeModals,}) => {
    const router = useNavigate()
    const handles =()=>{
        router("/Kyc/details")
    }
  return (
    <div className="fixed inset-0 font-sans p-[20px] bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
    <div className="bg-white rounded-lg  md:w-1/2">
    <div className='flex p-3 justify-between items-center pb-2 border-b'>
      <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-2">
      KYC Verification Process
      </h2>
      <span onClick={closeModals} className='className="bg-[#F5F6F7] border border-[#F5F6F7] text-[#191B1C] px-3 font-[600] md:px-[13px] py-3 mb-2 rounded-full'>
        <IoMdClose/></span>
       </div>

       <div className='px-[10%] py-[30px] text-center flex flex-col justify-center'>
        <h3 className='font-[400] font-alata text-[#456EFE]  text-[32px] leading-[39.52px]'>KYC Verification</h3>

        <p className='text-[#A4A9AE] font-[400] text-[18px] leading-[26.37px] md:px-[16%] mt-2'>
        Proceed to complete your KYC verification Process in order to enjoy the full benefits and features of our platform
        </p>
         <img src={logo}  className=' object-contain h-[100px] md:h-[200px]' />
         <button onClick={handles} className='flex gap-2 items-center rounded-[20px] text-center justify-center font-sans font-[600] leading-[40px] text-[12px] md:text-[14px] text-[#fff] bg-[#0A2EE2] md:py-[10px] '>
         Proceed
          <HiOutlineArrowRight/>
         </button>
       </div>
       </div>
    </div>
  )
}

export default DashboardModal
