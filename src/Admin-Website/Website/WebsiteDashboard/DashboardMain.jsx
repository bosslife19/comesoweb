import { useContext, useEffect, useState } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { PiHandWavingFill } from "react-icons/pi";
import { FiArrowDownLeft } from "react-icons/fi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { ClipLoader } from 'react-spinners'; // Example spinner from react-spinners

import DashboardModal from "./Modal/DashboardModal";
import { AuthContext } from "../../../context/AuthContext";
import axiosClient from "../../../axios-client";
import { useNavigate } from "react-router-dom";

const DashboardMain = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
    const [isModalOpens, setIsModalOpens] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [kyc, setKyc] = useState(false);
    // const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate()
    const {userDetails, setUserDetails} = useContext(AuthContext)
    const handleRequestPaymet = ()=>{
      navigate('/Payments')
    }
    const baseUrl = import.meta.env.VITE_BASE_URL

  const toggleVisibility = () => {
    setIsTextVisible(!isTextVisible);
  };

  const handleChanges = () => {
    setButtonSpinner(true);
    setTimeout(() => {
    setIsModalOpens(true);
    setButtonSpinner(false);
  }, 1000);

  };
  
  const closeModals = () => {
    setIsModalOpens(false);
  };
  useEffect(()=>{
 const getUser = async ()=>{
  try {
    
    const response = await axiosClient.get('/user');
    
    setKyc(response.data.user.kycCompleted);
    setUserDetails({
      ...response.data.user
    })
    // setTransactions(response.data.transactions)
  } catch (error) {
    console.log(error);
  }
  

 }
 getUser();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center py-[20px]">
        <h3 className="text-[#202224] font-[700] font-nunito leading-[43.65px] md:text-[32px]">
          Home
        </h3>
        {
          !kyc &&<button
          disabled={buttonSpinner} 
          onClick={handleChanges} className="bg-[#031AED] py-[11px] md:py-[14px] px-[10px] rounded-[30px] w-[104px] md:w-[204px] flex items-center text-center justify-center">
             {buttonSpinner ? (
              <ClipLoader size={20} color="#fff" />
            ) : (
              <span className=" items-center text-center m-auto font-poppins font-[600] text-[12px] md:text-[18px] leading-[10px]  md:leading-[27px] flex gap-2 text-[#fff]"> <IoCheckmarkDoneSharp />
            Finish KYC </span>
          )}
          </button>
        }
        
        {isModalOpens && ( 
        <DashboardModal
        isOpen={isModalOpens}
        closeModals={closeModals}
        />
      )}
      </div>
      <div className="md:flex flex-wrap gap-[40px]">
        {/* Flex */}
        <div className="w-full md:mb-0 mb-5 md:w-[428px] rounded-[14px] bg-[#fff] cursor-pointer text-[#6B788E]">
          <div className="border py-5 border-[#6B788E1F] border-opacity-10 shadow-md rounded-md w-full">
            <div className="flex justify-between items-center gap-3 px-[20px] py-4">
              <div className="space-y-3">
                <span className="font-[600] leading-[21.82px] text-[14px] md:text-[16px] text-[#33333399] font-poppins">
                  {userDetails?.company_name||userDetails.name}
                </span>
                <p className="font-[700] flex gap-2 leading-[38.19px] text-[18px] items-center md:text-[28px] text-[#202224] font-poppins">
                  Welcome back! <PiHandWavingFill className=" text-[#FFDC5D]" />
                </p>
              </div>
            </div>
            <div className="px-[20px] pb-[5px] space-y-4">
              <span className="font-normal font-poppins text-[#33333399] flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
                What would you like us to do for you today?
              </span>
              <button onClick={handleRequestPaymet} className="bg-[#031AED] justify-center w-full py-[12px] px-[19px] rounded-[30px] items-center font-poppins font-[600] md:text-[20px] md:leading-[30px] flex gap-2 text-[#fff]">
                Request Payment
              </button>
            </div>
          </div>
        </div> 

        {/* Next Payout Card */}
        <div className="w-full md:w-[428px] ] bg-[#fff] cursor-pointer  text-[#6B788E]">
          <div className="border py-5 border-[#6B788E1F] border-opacity-10 shadow-md rounded-md w-full">
            <div className="flex relative justify-between items-center gap-3 p-4">
              <div className="space-y-3">
                <span className="font-[600] leading-[21.82px] text-[14px] md:text-[16px] text-[#202224] font-poppins">
                  NEXT PAYOUT
                </span>
                <div className="font-[700] p leading-[38.19px] text-[18px] gap-2 md:text-[28px] text-[#202224] font-poppins flex items-center md:gap-[50px]">
                   
                  {isTextVisible ? `GHC ${userDetails?.balance}.00` : "******"}
                  <button
                    onClick={toggleVisibility}
                    className="text-[#6B788E] hover:text-[#202224]"
                  >
                    {isTextVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                  </button>
                </div>
              </div>
              {/* <div className="p-2 absolute top-0 right-2 bg-[#D9F3DF] text-[#04AD29] rounded-[5px] md:text-[20px]">
                <FiArrowDownLeft />
              </div> */}
            </div>
            <div className="px-[20px] space-y-4">
              <span className="font-normal font flex gap-1 items-center text-[12px] leading-[18px] pb-3 ml-[10px]">
                {/* <FaArrowTrendUp size={20} color="#2FC271" />
                Due tomorrow, Mar 6th, 2024 */}
              </span>

              <button onClick={handleRequestPaymet} className="bg-[#212122] justify-center w-full py-[12px] px-[20px] rounded-[30px] items-center font-poppins font-[600] md:text-[20px] md:leading-[30px] flex gap-2 text-[#fff]">
                Request Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
