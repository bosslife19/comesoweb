import React from 'react'
 import DashboardTable from './DashboardSection'
import { IoMdArrowDropup } from 'react-icons/io'
import { FaUsers } from 'react-icons/fa'
import { FaArrowTrendDown, FaArrowTrendUp, FaClockRotateLeft } from 'react-icons/fa6'
import { HiMiniCube, HiUsers } from "react-icons/hi2";
import { BiLineChart } from 'react-icons/bi'

const DashboardMain = () => {
  return (
    <div className='md:flex flex-wrap gap-4'>
     {/* flex */}
      <div className="w-full md:w-[247px] rounded-[14px] bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="border py-2 border-[#6B788E1F] border-opacity-10 rounded-md w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <span className="font-[600] leading-[21.82px] text-[16px] text-[#202224] font-poppins ">
            Total User
            </span>
            <p className='font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins'>40,689</p>
            </div>
            <div className="p-3 bg-[#e5e4ff] text-[#8280FF] rounded-full md:text-[30px]">
            <HiUsers />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendUp  size={20} color="#2FC271" />
             
            <span className="text-[#2FC271]">8.5% </span>
            Up from yesterday
          </span>
        </div>
      </div>
      
      <div className="w-full md:w-[247px] rounded-[14px] bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="border py-2 border-[#6B788E1F] border-opacity-10 rounded-md w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className=" space-y-3">
            <span className="font-[600] leading-[21.82px] text-[16px] text-[#202224] font-poppins ">
            Total Facilities
            </span>
            <p className='font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins'>1,293</p>
            </div>
            <div className="p-3 bg-[#fff3d6] text-[#FEC53D] rounded-full md:text-[30px]">
            <HiMiniCube />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendUp  size={20} color="#2FC271" />
             
            <span className="text-[#2FC271]">1.5% </span>
            Up from yesterday
          </span>
        </div>
      </div>
      <div className="w-full md:w-[247px] rounded-[14px] bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="border py-2 border-[#6B788E1F] border-opacity-10 rounded-md w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <h4 className="font-[600] leading-[21.82px] text-[14px] text-[#202224] font-nunito  ">
            Today’s Transaction
            </h4>
            <p className='font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins'>
            E89,000
            </p>
            </div>
            <div className="p-3 bg-[#d9f7e8] text-[#4AD991] rounded-full md:text-[30px]">
            <BiLineChart />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendDown size={20} color="#F93C65" />
             
            <span className="text-[#F93C65]">8.5% </span>
            Up from yesterday
          </span>
        </div>
      </div>

      <div className="w-full md:w-[247px] rounded-[14px] bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="border py-2 border-[#6B788E1F] border-opacity-10 rounded-md w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <h3 className="font-[600] leading-[21.82px] text-[14px] text-[#202224] font-poppins ">
            Today’s Transaction
            </h3>
            <p className='font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins'>
            E89,000
            </p>
            </div>
            <div className="p-3 bg-[#ffded1] text-[#FF9066] rounded-full md:text-[30px]">
            <FaClockRotateLeft />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendDown size={20} color="#2FC271" />
             
            <span className="text-[#2FC271]">8.5% </span>
            Up from yesterday
          </span>
        </div>
      </div>
       
    </div>
  )
}

export default DashboardMain
