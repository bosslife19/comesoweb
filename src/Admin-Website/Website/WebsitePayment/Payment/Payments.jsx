import React, { useContext, useEffect, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { ClipLoader } from "react-spinners";
import ModalPayment from "./Modal/modalPayment";
import Failed from "./Modal/PaymentFailed";
import { Modal } from "./Modal/ModalDetails1";
import { ModalSuccess } from "./Modal/ModalSuccess";
import { AuthContext } from "../../../../context/AuthContext";
import axiosClient from "../../../../axios-client";
import { useNavigate } from "react-router-dom";

const Payments = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
   const [amount, setAmount] = useState();

  // Modal States
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isLastModalOpen, setIsLastModalOpen] = useState(false);
  const [numError, setNumError] = useState("")
  const [userDets, setUserDets] = useState(null);
  const [buttonSpinner, setButtonSpinner] = useState(false);
  const [buttonSpinners, setButtonSpinners] = useState(false);
  const {userDetails} = useContext(AuthContext);

 

  const navigate = useNavigate()
 
  const [token, setToken] = useState(null);
  function generateTokens(count) {
    const tokens = [];
    for (let i = 0; i < count; i++) {
      const token = Math.floor(100000 + Math.random() * 900000).toString();
      tokens.push(token);
    }
    return tokens;
  }

  useEffect(() => {
    if (token == null) {
      const genToken = generateTokens(6);
      setToken(genToken);
    }
  }, []);

  const handleVerifyNumber = async(e)=>{
    e.preventDefault();
    setNumError('')
    try {
      setButtonSpinners(true)
      console.log('heress');
      const response = await axiosClient.post('/user/verify-number', {phone:phoneNumber})
      
      if(response.data.error){
        setButtonSpinners(false)
        return setNumError(response.data.error)
      }
      setButtonSpinners(false)
      setUserDets(response.data.user);
     

    } catch (error) {
      if(error.response.data){
        setButtonSpinners(false)
        setNumError(error.response?.data?.message)
      }
     else{
      setButtonSpinners(false)
      setNumError('Some error occured')
     }
      
    }
  }

  const handleChanges = async (e) => {
    e.preventDefault();
    setButtonSpinner(true);
    try {
      if(!amount||!phoneNumber){
        setButtonSpinner(false);
        return alert('All fields are required')
      }

      if(amount > userDetails.balance){
        
        setButtonSpinner(false)
        return alert('You do not have sufficient funds to request');
      }
    
      const res = await axiosClient.post('/user/create-payment-request',{
        token: token[0],amount,phone:phoneNumber
      })
      setButtonSpinner(false)
      if(res.data.status){
        setIsModalOpens(true); 
      }
    } catch (error) {
      console.log(error);
      setButtonSpinner(false);
      setIsSecondModalOpen(true);
    }
    // setTimeout(() => {
    //  
    //   setButtonSpinner(false);
    // }, 1000);
  };

  const handProceed = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      navigate('/dashboard')
      setButtonSpinner(false)
    }, 1000);
    // setIsModalOpens(false); // Close the first modal
    // setIsSecondModalOpen(true); // Open the second modal
   
    
  };

  const handProceedSecond = () => {
    setIsSecondModalOpen(false); // Close the second modal
    setIsThirdModalOpen(true); // Open the third modal
  };

  const handProceedThird = () => {
    setIsThirdModalOpen(false); // Close the third modal
    setIsLastModalOpen(true); // Open the last modal
  };

  const closeModals = () => setIsModalOpens(false);
  const closeSecondModal = () => setIsSecondModalOpen(false);
  const closeThirdModal = () => setIsThirdModalOpen(false);
  const closeLastModal = () => setIsLastModalOpen(false);

  return (
    <div className="font-poppins space-y-1">
      <div className="flex justify-between py-[20px] flex-wrap gap-4">
        <h3 className="text-[#202224] font-[500] md:text-[20px] leading-[30px]">
          Payout
        </h3>
      </div>

      {/* Main Flex Section */}
      <div className="md:flex justify-start flex-wrap gap-[10px] md:gap-[30px]">
        {/* Payment Info Form */}
        <div className="w-full md:w-[550px] border py-[20px] px-[20px] border-[#6B788E1F] border-opacity-10 rounded-[20px] bg-[#fff] cursor-pointer shadow-sm text-[#6B788E]">
          <form className="space-y-4 mt-2">
            <h2 className="font-[500] font-poppins text-[20px] leading-[30px] h-fit">
              PAYMENT INFORMATION
            </h2>
            <div>
              {numError&& <p className="text-red-400 text-center font-bold">{numError}</p>}
              <label className="block text-[#666666] text-sm font-medium">
                Phone Number
              </label>
              <div className="flex items-center gap-5">
                <PhoneInput
                  className="w-full h-[56px] rounded-[12px] p-2 border border[#0A2EE2] mt-2"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  defaultCountry="US"
                  international
                  required
                />
                <button  disabled={buttonSpinners} onClick={handleVerifyNumber} className="px-[30px] rounded-[12px] h-full py-[16px] mt-2 bg-[#0A2EE2] text-[#fff] font-[500]">
                {buttonSpinners ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                <span>Verify</span>
              )}
                  
                </button>
              </div>
            </div>
            <div>
              <label className="block text-[#666666] text-sm font-medium">
                Amount
              </label>
              <input
                type="number"
                className="w-full h-[56px] rounded-[12px] p-2 border border[#F1F2F3] mt-2 bg-[#F1F2F3]"
                placeholder="e.g GHC300"
                onChange={e=>setAmount(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-[#666666] text-sm font-medium">
                Generated Token
              </label>
              <input
                type="text"
                className="w-full h-[56px] rounded-[12px] p-2 border border[#F1F2F3] mt-2 bg-[#F1F2F3]"
                placeholder="e.g GHC300"
                value={token && token[0]}
                // num.toString().slice(0, 6)
              />
            </div>
            <p className="font-[400] text-[18px] font-poppins leading-[27px]">
              Generated Tokens expire after 5 minutes
            </p>
          </form>
        </div>

        {/* Payment Summary */}
        <div className="w-full md:w-[450px] border py-[20px] px-[20px] border-[#6B788E1F] border-opacity-10 rounded-[20px] bg-[#fff] cursor-pointer shadow-sm text-[#6B788E]">
          <form className="space-y-4 mt-2">
            <h2 className="font-[500] font-poppins text-[20px] leading-[30px]">
              PAYMENT SUMMARY
            </h2>

            <div className="bg-[#D6ECFC] px-[20px] py-[13px] rounded-[10px]">
              <span className="text-[#3B7BAA]">
                The account name will be shown below once the phone number has
                undergone verification.
              </span>
            </div>
            <h3 className="font-[600] font-nunito text-[16px] leading-[21.82px] text-[#606060]">
              Account Name
            </h3>
            <p className="font-[#33333] font-[600] md:text-[24px] md:leading-[36px] text-[#333333]">
              {userDets && userDets.name}
            </p>
            <span className="text-[#606060] font-nunito text-[16px] leading-[21.82px]">
              Transaction Amount
            </span>
            <p className="text-[#333333] font-[600] md:text-[24px] md:leading-[36px]">
              GHC{amount}
            </p>
            <button
              onClick={handleChanges}
              disabled={buttonSpinner}
              className="w-full rounded-[30px] h-full py-[13px] mt-2 bg-[#0A2EE2] text-[#fff] font-[600] md:text-[20px] md:leading-[30px]"
            >
              {buttonSpinner ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                <span>Request Payment</span>
              )}
            </button>
          </form>
        </div>

        {/* Modals */}
        {isModalOpens && (
          <ModalPayment
            isOpen={isModalOpens}
            closeModal={closeModals}
            handProceed={handProceed}
            buttonSpinner={buttonSpinner}
          />
        )}
        {isSecondModalOpen && (
          <Failed
            isOpen={isSecondModalOpen}
            closeSecondModal={closeSecondModal}
            handProceedSecond={handProceedSecond}
          />
        )}
        {isThirdModalOpen && (
          <Modal
            isOpen={isThirdModalOpen}
            closeModal={closeThirdModal}
            handProceedThird={handProceedThird}
          />
        )}
        {isLastModalOpen && (
          <ModalSuccess
            isOpen={isLastModalOpen}
            closeLastModal={closeLastModal}
          />
        )}
      </div>
    </div>
  );
};

export default Payments;
