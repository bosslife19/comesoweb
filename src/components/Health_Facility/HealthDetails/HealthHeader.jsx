import {   FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
 import { BiEdit } from 'react-icons/bi'
 import logo   from "../../../assets/imglogo.png"
import { useState } from 'react';
 import { SlArrowLeft } from 'react-icons/sl';
const HealthHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isVisibleT, setIsVisibleT] = useState(false);

  const toggleVisibilities = () => {
    setIsVisibleT(!isVisibleT);
  };

  const goBack = () => {
    window.history.back(); // Goes back to the previous page
  };

  return (
    <div >
        <div  onClick={goBack} className='flex  cursor-pointer items-center py-[20px] flex-wrap gap-1 text-[#333333]'>
        <SlArrowLeft className='  text-[12px]' /><span className='font-[400] md:text-[16px] leading-[24px]'>Back</span>
        </div>
     {/* flex */}
     <div className='flex md:flex-row flex-wrap gap-4 items-center md:justify-start justify-center'>
     <div className=" h-[168px]  border-[#6B788E1F] border-opacity-10 rounded-md border w-full md:w-[315px]   bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className=" py-2  px-2 font-poppins">
          <div className="flex justify-between items-center gap-3 p-2">
            <div className="space-y-3 relative">
              <div className='relative' >
              <img src={logo} className=' w-[40px] h-[40px] rounded-full' />
              </div>  
              <div className='text-[10px] absolute bottom-0 right-0 p-1 rounded-full bg-[#000]'>
                <BiEdit/>
                </div>         
            </div>
            <div className="p-1 border border-[#FF2B2B] text-[#FF2B2B] rounded-[5px] md:text-[15px]">
           Deactived
            </div>
          </div>
          <h3 className='text-[#0A2EE2]  font-poppins font-[500] text-[12px] md:text-[16px] leading-[24px]'>Gloria Niiquaye Health Centre</h3>
          <span className='text-[#333333]  font-[400] text-[12px] md:text-[16px] leading-[24px]'>#123980</span>
          <span className="font-normal  font flex gap-1 items-center text-[12px] leading-[18px] pt-3  ">
              
             User since 05-06-2023
          </span>
        </div>
      </div>


{/*  */}
      <div className=" w-full h-[168px] shadow-md shadow-[#3592FF75] md:w-[247px] border py-2 border-[#6B788E1F] border-opacity-10 rounded-md bg-[#fff] cursor-pointer text-[#6B788E]">
         <div className="flex  justify-between items-center gap-3 p-4">
          <div className="space-y-3 w-full">
            <div className=' flex items-center justify-between gap-[15px]'>
           <div>
           <h3 className="font-[500] leading-[21.82px] text-[12px] md:text-[15px] text-[#333333] font-nunito">
              Total Credit Balance
            </h3>
           </div>
            <div
            className=" flex  text-[#333333] rounded-full md:text-[17px] cursor-pointer"
            onClick={toggleVisibility}
          >
            {isVisible ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
            </div>
            {isVisible ? (
              <p className="font-[600] leading-[24px] md:text-[24px] text-[#3592FF] font-poppins">
                $40,689
              </p>
            ) : (
              <p className="font-[600] leading-[24px] md:text-[24px] text-[#bbb] font-poppins">
                ******
              </p>
            )}
          </div>
          
        </div>
        <span className="font-normal text-[#333333] flex gap-1 items-center text-[12px] leading-[18px] pb-3 px-4">
          Account Number
        </span>
       <div>
       {isVisible ? (
          <span className="font-normal text-[#333333] flex gap-1 items-center text-[12px] leading-[18px] pb-3 px-4">
            8132243434
          </span>
        ) : (
          <span className="font-normal flex gap-1 items-center text-[12px] leading-[18px] pb-3 px-4 text-[#bbb]">
            **********
          </span>
        )}
       </div>
     </div>
      
     
      {/*  */}
      <div className=" font-poppins w-full shadow-md shadow-[#FF404066] md:w-[247px] h-[168px] border py-2 border-[#6B788E1F] border-opacity-10 rounded-md bg-[#fff] cursor-pointer text-[#6B788E]">
         <div className="flex justify-between items-center gap-3 py-2 px-[14px]">
          <div className="space-y-3 w-full">
            <div className=' flex items-center justify-between gap-[15px]'>
           <div>
           <h3 className="font-[500] leading-[24px] text-[12px] md:text-[14px] text-[#333333] font-poppins ">
           Transactions completed
            </h3>
           </div>
            <div
            className=" flex  text-[#333333] rounded-full md:text-[17px] cursor-pointer"
            onClick={toggleVisibilities}
          >
            {isVisibleT ? <FaRegEyeSlash /> : <FaRegEye />}
          </div>
            </div>
            {isVisibleT ? (
              <p className="font-[600] leading-[24px] md:text-[24px] text-[#FF4040] font-poppins">
                40
              </p>
            ) : (
              <p className="font-[600] leading-[24px] md:text-[24px] text-[#bbb] font-poppins">
                ******
              </p>
            )}
          </div>
          
        </div>
        <span className="font-normal flex gap-1 items-center text-[12px] leading-[18px] pb-3 px-4">
        Last transaction date
        </span>
       <div>
        
          <span className="font-normal flex gap-1 items-center text-[12px] leading-[18px] pb-3 px-4">
            08-06-2023  05:30PM
          </span>
         
       </div>
     </div>
     
      </div>
      
    </div>
  )
}

export default HealthHeader
