import {   FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
  import logo   from "../../../../assets/imglogo.png"
import { useState } from 'react';
import { GoPencil } from "react-icons/go";

 import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
const TeamHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const [isVisibleT, setIsVisibleT] = useState(false);

  const toggleVisibilities = () => {
    setIsVisibleT(!isVisibleT);
  };
 
  const navigate = useNavigate()
  const goBack = () => {
    navigate("/admin/team")
  };

  return (
    <div >
        <div  onClick={goBack} className='flex w-[50px]   cursor-pointer items-center py-[20px] flex-wrap gap-1 text-[#333333]'>
        <SlArrowLeft className='  text-[12px]' /><span className='font-[400] md:text-[16px] leading-[24px]'>Back</span>
        </div>
     {/* flex */}
     <div className='flex md:flex-row flex-wrap gap-4 items-center md:justify-start justify-center'>
     <div className=" h-[168px]  border-[#6B788E1F] border-opacity-10 rounded-md border w-full md:w-[315px]   bg-[#fff]   shadow-sm  text-[#6B788E]">
        <div className=" py-2  px-2 font-poppins">
          <div className="flex justify-between items-center gap-3 p-2">
            <div className="space-y-3 relative">
              <div className='relative' >
              <img src={logo} className=' w-[40px] h-[40px] rounded-full' />
              </div>  
              <div className='text-[10px] absolute bottom-[-3px] right-[-5px] p-1 rounded-full bg-[#1671D9] text-[#fff]'>
                <GoPencil/>
                </div>         
            </div>
            <div className="p-1 border border-[#FF2B2B] text-[#FF2B2B] rounded-[5px] md:text-[15px]">
           Deactived
            </div>
          </div>
          <h3 className='text-[#0A2EE2]  font-poppins font-[500] text-[12px] md:text-[16px] leading-[24px]'>Gloria Niiquaye Health Centre</h3>
          <span className='text-[#333333]  font-[400] text-[12px] md:text-[16px] leading-[24px]'>Chief Operating Officer</span>
          <span className="font-normal  font flex gap-1 items-center text-[12px] leading-[18px] pt-3  ">
              
             User since 05-06-2023
          </span>
        </div>
      </div>


{/*  */}
     
      </div>
      
    </div>
  )
}

export default TeamHeader
