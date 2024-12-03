import React from 'react'
 
import "../../styles/Spinner.css"
import { FaArrowRight } from 'react-icons/fa6'
            
 
const ModalTransactions = ({closeModal}) => {
  
  return (
    <div className="fixed z-[200] inset-0 bg-black bg-opacity-50 flex items-center justify-center">

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
     <div className='  m-auto text-[#1CCD9D] bg-[#DDF7F0] px-[20px] py-[10px] rounded-lg'>
    <span>Transactions Status: Sent</span>
   
   </div>
     <span className=" text-[#23303B] font-poppins font-[600] text-[17px] md:text-[36px] leading-[18px] md:leading-[54px]">GHC250.00</span>
     <div className='flex justify-center '>
  <button
  onClick={closeModal}
    className="text-[#fff] flex justify-center items-center gap-3  w-full  py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] md:text-[20px] md:leading-[30px] "
       >
         
          <span> Export (Img, PDF)</span>
          <FaArrowRight/>
        
   </button>
  </div>
    </div>
  
    
    {/* Next Button */}
   
     </div>
    </div>
  </div>
  )
}

export default ModalTransactions
