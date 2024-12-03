import React from 'react'
import { IoMdClose } from 'react-icons/io'
import logo from "../../../assets/successful.png"
import { HiOutlineArrowRight } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa6'
export const ModalSuccess = ({closeLastModal}) => {

const navigate = useNavigate()
  const handles = () => {
    // Use navigate to go to a page with the product or detail
    navigate("/");
  };
  return ( 
    <div className="fixed inset-0 font-sans bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
    <div className="bg-white rounded-lg w-full    lg:w-1/2 mx-[30px] my-[20px]">
     <div className="w-full  flex justify-center text-center flex-col md:px-[40px] md:py-[30px] space-y-[10px] md:space-y-[30px]">
     <p className=' font-alata font-[400] pt-3 text-[12px] md:text-[20px] leading-[29.3px] text-[#A4A9AE]'>
     Transaction ID: #234543
     </p>
      <h2 className="font-alata font-[400] text-[20px] md:text-[40px] leading-[49.4px] text-[#456EFE]">
      Jamal Musiala
      </h2>
     <p className=' font-alata font-[400] text-[12px] md:text-[20px] leading-[29.3px] text-[#A4A9AE]'>
     09132234565
     </p>
     <div className="border-[0.5px] w-full"/>
     <div className='  m-auto text-[#FF0000] bg-[#FFD9D9] px-[20px] py-[10px] rounded-lg'>
      <span>Transactions Status: Failed</span>
     
     </div>
     <span className=" text-[#23303B] font-poppins font-[600] text-[17px] md:text-[36px] leading-[18px] md:leading-[54px]">GHC250.00</span>
     <div className='flex justify-center gap-[30px] md:gap-[80px] '>
    <button
       className="text-[#000] mx-[10px] my-[20px] border  text-[12px] md:text-[20px] border-[#EBEBEE] flex justify-center items-center gap-3  w-full  py-2 md:h-[60px] rounded-[10px] bg-[#fff] font-poppins font-[600] md:leading-[30px] "
         >
           
            <span>Make Complaint</span>
           
     </button>
     <button
    onClick={closeLastModal}
      className="text-[#fff]  mx-[10px] my-[20px] text-[12px] flex justify-center items-center gap-3  w-full  py-2 md:h-[60px] rounded-[30px] bg-[#0A2EE2] font-poppins font-[600] md:text-[20px] md:leading-[30px] "
         >
           
            <span>Resend</span>
            <FaArrowRight/>
          
     </button>
    </div>
    </div>
  
    
    {/* Next Button */}
   
     </div>
    </div>
  )
}
