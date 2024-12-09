import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaClockRotateLeft,
} from "react-icons/fa6";
import { HiMiniCube, HiUsers } from "react-icons/hi2";
import { BiLineChart } from "react-icons/bi";
import { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";

const DashboardMain = () => {
  const [users, setUsers] = useState([]);
  const [facilities, setFacilities] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [todayTrans, setTodayTrans] = useState([]);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [todayTransNo, setTodayTransNo] = useState(0)

  
  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axiosClient.get("/user/all");
        setUsers(res.data.users);
        setFacilities(res.data.facilities);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getTransactions = async () => {
      try {
        const response = await axiosClient.get("/transaction/all");
  
        // Set transactions and calculate total directly from the response data
        setTransactions(response.data.transactions);
        const totalAmount = response.data.transactions.reduce(
          (sum, transaction) => sum + transaction.amount,
          0
        );
        setTotalTransactions(totalAmount);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getTodayTrans = async () => {
      try {
        const res = await axiosClient.get('/transaction/today');
  
        // Set today transactions and calculate the total directly from the response data
        setTodayTrans(res.data.transactions);
        const totalAmount = res.data.transactions.reduce(
          (sum, transaction) => sum + transaction.amount,
          0
        );
        setTodayTransNo(totalAmount);
      } catch (error) {
        console.log(error);
      }
    };
  
    getUsers();
    getTransactions();
    getTodayTrans();
  }, []);
  
  return (
    <div className="md:flex flex-wrap gap-4">
      {/* flex */}
      <div className="w-full md:w-[247px] rounded-[14px] bg-[#fff]  cursor-pointer shadow-sm  text-[#6B788E]">
        <div className="border py-2 border-[#6B788E1F] border-opacity-10 rounded-md w-full">
          <div className="flex justify-between items-center gap-3 p-4">
            <div className="space-y-3">
              <span className="font-[600] leading-[21.82px] text-[16px] text-[#202224] font-poppins ">
                Total Users
              </span>
              <p className="font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins">
                {users?.length}
              </p>
            </div>
            <div className="p-3 bg-[#e5e4ff] text-[#8280FF] rounded-full md:text-[30px]">
              <HiUsers />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendUp size={20} color="#2FC271" />
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
              <p className="font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins">
                {facilities?.length}
              </p>
            </div>
            <div className="p-3 bg-[#fff3d6] text-[#FEC53D] rounded-full md:text-[30px]">
              <HiMiniCube />
            </div>
          </div>
          <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
            <FaArrowTrendUp size={20} color="#2FC271" />
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
                Total Transactions
              </h4>
              <p className="font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins">
                E{totalTransactions}
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
              <p className="font-[700] leading-[38.19px] text-[28px] text-[#202224] font-poppins">
                E{todayTransNo}
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
  );
};

export default DashboardMain;
