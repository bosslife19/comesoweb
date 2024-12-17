import { FaArrowTrendDown, FaArrowTrendUp, FaClockRotateLeft } from 'react-icons/fa6'
import {  HiUsers } from "react-icons/hi2";
import { BiLineChart } from 'react-icons/bi'
import ButtonsWithPopup from './SideButtons/ButtonWithProps';
import { useEffect, useState } from 'react';
import axiosClient from '../../../axios-client';

const PayoutBoardMain = () => {
  const [pendingPayout, setPendingPayout] = useState(0);
  const [facilities, setFacilities] = useState(0);
  const [transactions, setTransactions] = useState(0)
  useEffect(()=>{
    const getPendingPayout = async ()=>{
      const res = await axiosClient.get('/pending');
      setPendingPayout(res.data.requests.length);
      const resp = await axiosClient.get("/user/all");
      setFacilities(resp.data.facilities.length);
      const response = await axiosClient.get('/transaction/all');
      setTransactions(response.data.transactions);
      

    }
    getPendingPayout()
  },[])
  return (
    <div >
        <div className='flex justify-between py-[20px] flex-wrap gap-4'>
            <h3 className=' text-[#202224] font-[700] text-[22px] md:text-[32px] leading-[43.65px]'>Payment Request</h3>
            <ButtonsWithPopup/>
        </div>
     {/* flex */} 
     <div className='flex md:flex-row flex-wrap gap-4'>
     <div className="w-full border-[#6B788E1F] border-opacity-10 rounded-md border md:w-[247px]  bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className=" py-2  w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <h3 className="font-[600] leading-[21.82px] text-[14px] text-[#777779] font-poppins ">
            Pending Payout
            </h3>
            <p className='font-[500] leading-[38.19px] md:text-[28px] text-[#202224] font-nunito '>
              {pendingPayout}
            </p>
            </div>
            <div className="p-3 bg-[#ffded1] text-[#FF9066] rounded-full md:text-[30px]">
            <FaClockRotateLeft />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            {/* <FaArrowTrendUp size={20} color="#2FC271" />
             
            <span className="text-[#2FC271]">8.5% </span>
            Up from Last Month */}
          </span>
        </div>
      </div>

      <div className="w-full md:w-[247px] border py-2 border-[#6B788E1F] border-opacity-10 rounded-md  bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <span className="font-[500] leading-[21.82px] md:text-[15px] text-[#777779] font-nunito  ">
            Beneficial Companies
            </span>
            <p className='font-[500] leading-[38.19px] text-[28px] text-[#202224] font-nunito '>{facilities}</p>
            </div>
            <div className="p-3 bg-[#e5e4ff] text-[#8280FF] rounded-full md:text-[30px]">
            <HiUsers />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            {/* <FaArrowTrendUp  size={20} color="#2FC271" />
             
            <span className="text-[#2FC271]">8.5% </span>
            Up from Last Month */}
          </span>
        </div>
      </div>
      
     
      <div className="w-full border py-2 border-[#6B788E1F] border-opacity-10 rounded-md md:w-[247px]  bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className=" w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
            <h4 className="font-[600] leading-[21.82px] text-[14px] text-[#777779] font-nunito  ">
              No of Transactions
            </h4>
            <p className='font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins'>
            {transactions}
            </p>
            </div>
            <div className="p-3 bg-[#d9f7e8] text-[#4AD991] rounded-full md:text-[30px]">
            <BiLineChart />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            {/* <FaArrowTrendDown size={20} color="#F93C65" />
             
            <span className="text-[#F93C65]">8.5% </span>
            Up from Last Month */}
          </span>
        </div>
      </div>

     
      </div>
    </div>
  )
}

export default PayoutBoardMain
