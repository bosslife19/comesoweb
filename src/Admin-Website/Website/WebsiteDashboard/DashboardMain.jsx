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
import { toast } from "react-toastify";

const DashboardMain = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);
    const [isModalOpens, setIsModalOpens] = useState(false);
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [kyc, setKyc] = useState(false);
    // const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate()
    const {userDetails, setUserDetails} = useContext(AuthContext)
    const handleRequestPaymet = ()=>{
      
      if(userDetails.kycCompleted && userDetails.approved){
        navigate('/Payments')
      }
      else if(!userDetails.approved){
        return alert('Wait for approval before requesting or collecting payments')
      }
      else{
        return alert('Complete your Registration process to collect or request payments')
      }
      
    }
    const baseUrl = import.meta.env.VITE_BASE_URL
const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const toggleVisibility = () => {
    if(isTextVisible == false){
      setOpenPasswordModal(true);
    }else{
      setIsTextVisible(!isTextVisible);
    }
   
  };

  const handleChanges = () => {
    setButtonSpinner(true);
    setTimeout(() => {
    setIsModalOpens(true);
    setButtonSpinner(false);
  }, 1000);

  };
  const [kycPercent, setKycPercent] = useState(0);
  
  const closeModals = () => {
    setIsModalOpens(false);
  };
  useEffect(()=>{
 const getUser = async ()=>{
  try {
    
    const response = await axiosClient.get('/user');
    
    setKyc(response.data.user.kycCompleted);
    if(response.data.user.kyc_count < 18){
      setKycPercent((response.data.user.kyc_count/18)*100);
    }
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
  const [pin, setPin] = useState('');
  const [error, setError] = useState('')

  const handlePinSubmit = async(e) => {
    e.preventDefault();
    
    try {
        setLoading(true)
        const res = await axiosClient.post('/user/verify-pin', {pin});
        if(res.data.status){
            setLoading(false)
            toast.success('Pin verified successfully');
            setTimeout(()=>{
                setIsTextVisible(true);
                setOpenPasswordModal(false);
            }, 2000);
        }else if(res.data.error){
            setLoading(false)
            setError(res.data.error)
            toast.error("The pin you entered is invalid");
        }
    } catch (error) {
        setLoading(false)
        console.log(error);
    }
  };

  const handleRequestPayment =  ()=>{
    if(userDetails.kycCompleted){
      navigate('/request-payment')
    }else{
      return alert('Complete your Registration process to collect or request payments')
    }
    
  }


  return (
    <div>
          <div className="flex justify-between items-center py-[20px]">
      {/* Title */}
      <h3 className="text-[#202224] font-[700] font-nunito leading-[43.65px] md:text-[32px]">
        Home
      </h3>

      {/* KYC Progress */}
      {kycPercent!=0 && (
        <div className="w-[150px] md:w-[200px]">
          <div className="flex items-center gap-2">
            {/* <p className="text-[14px] font-nunito font-[600] text-[#202224]">{Math.floor(kycPercent)}%</p> */}
            <div className="w-[200px]">
  {/* Label for clarity */}
  <div className="flex items-center justify-between mb-2">
    <p className="text-[14px] font-nunito font-[600] text-[#202224]">Registration Progress</p>
    <p className="text-[14px] font-nunito font-[600] text-[#031AED]">{Math.floor(kycPercent)}%</p>
  </div>

  {/* Progress Bar */}
  <div className="w-full h-[8px] bg-[#E5E7EB] rounded-full">
    <div
      className="h-full bg-[#031AED] rounded-full transition-all duration-300"
      style={{ width: `${kycPercent}%` }}
    ></div>
  </div>
</div>

          </div>
        </div>
      )}

      {/* KYC Button */}
      {
       !userDetails.approved && userDetails.kycCompleted?

       
       <h2 className="font-poppins font-[600] text-[12px] md:text-[13px] leading-[10px] md:leading-[24px] flex gap-2 text-[#FFC13C] items-center justify-center">
        Approval Pending
       </h2>
       :('')
       
      }
      {!kyc ? (
        <button
          disabled={buttonSpinner}
          onClick={handleChanges}
          className="bg-[#031AED] py-[11px] md:py-[14px] px-[10px] rounded-[30px] w-[104px] md:w-[204px] flex items-center justify-center text-center"
        >
          {buttonSpinner ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            <span className="font-poppins font-[600] text-[12px] md:text-[13px] leading-[10px] md:leading-[24px] flex gap-2 text-[#fff] items-center justify-center">
              <IoCheckmarkDoneSharp />
              Finish Registration
            </span>
          )}
        </button>
      ):(<button
        disabled={buttonSpinner}
        onClick={()=>navigate('/settings')}
        className="bg-[#031AED] py-[11px] md:py-[14px] px-[10px] rounded-[30px] w-[104px] md:w-[204px] flex items-center justify-center text-center"
      >
        {buttonSpinner ? (
          <ClipLoader size={20} color="#fff" />
        ) : (
          <span className="font-poppins font-[600] text-[12px] md:text-[13px] leading-[10px] md:leading-[24px] flex gap-2 text-[#fff] items-center justify-center">
            <IoCheckmarkDoneSharp />
            Contact Support
          </span>
        )}
      </button>)}
      

      {/* Modal */}
      {isModalOpens && (
        <DashboardModal isOpen={isModalOpens} closeModals={closeModals} />
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
              <button onClick={handleRequestPaymet} className="bg-[#031AED] justify-center w-full py-[12px] px-[19px] rounded-[30px] items-center font-poppins font-[600] md:text-[17px] md:leading-[30px] flex gap-2 text-[#fff]">
                Collect payment from patient
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

              <button onClick={handleRequestPayment} className="bg-[#212122] justify-center w-full py-[12px] px-[20px] rounded-[30px] items-center font-poppins font-[600] md:text-[17px] md:leading-[30px] flex gap-2 text-[#fff]">
                Request payment from COMESO
              </button>
            </div>
          </div>
        </div>
      </div>
      {openPasswordModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>Enter Your PIN</h2>
            <form onSubmit={handlePinSubmit} style={styles.form}>
              <input
                type="password"
                placeholder="Enter PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                style={styles.input}
                maxLength={4}
              />
              <button type="submit" style={styles.submitButton}>
              {loading ? (
    <ClipLoader size={20} color="#fff" />
  ) : (
    <span>Unlock</span>
  )}
              </button>
            </form>
            {error && <p style={styles.error} className="text-red-400">{error}</p>}
            <button
              style={styles.closeButton}
              onClick={() => setOpenPasswordModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardMain;

const styles = {
  openButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
  },
  modalTitle: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  submitButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "rgb(10 46 226 / var(--tw-bg-opacity, 1))",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  closeButton: {
    marginTop: "10px",
    padding: "10px 15px",
    fontSize: "14px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    
    marginTop: "10px",
    fontSize: "14px",
  },
};
