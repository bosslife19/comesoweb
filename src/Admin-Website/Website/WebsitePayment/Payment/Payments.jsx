import React, { useState } from "react";
import "react-phone-number-input/style.css";  
import PhoneInput from "react-phone-number-input";
import { ClipLoader } from "react-spinners";
import ModalPayment from "./Modal/modalPayment";
import Failed from "./Modal/PaymentFailed";
import { Modal } from "./Modal/ModalDetails1";
import { ModalSuccess } from "./Modal/ModalSuccess";
 
const Payments = () => { 
  const [phoneNumber, setPhoneNumber] = useState("");
  const [buttonSpinner, setButtonSpinner] = useState(false);

  // Modal States
  const [isModalOpens, setIsModalOpens] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isLastModalOpen, setIsLastModalOpen] = useState(false);

  const handleChanges = () => {
    setButtonSpinner(true);
    setTimeout(() => {
      setIsModalOpens(true); // Open the first modal
      setButtonSpinner(false);
    }, 1000);
  };

  const handProceed = () => {
    setIsModalOpens(false); // Close the first modal
    setIsSecondModalOpen(true); // Open the second modal
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
            <h2 className="font-[500] font-poppins text-[20px] leading-[30px]">
              PAYMENT INFORMATION
            </h2>
            <div>
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
                <button className="px-[30px] rounded-[12px] h-full py-[16px] mt-2 bg-[#0A2EE2] text-[#fff] font-[500]">
                  Verify
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
              />
            </div>
            <div>
              <label className="block text-[#666666] text-sm font-medium">
                Generate Tokens
              </label>
              <input
                type="text"
                className="w-full h-[56px] rounded-[12px] p-2 border border[#F1F2F3] mt-2 bg-[#F1F2F3]"
                placeholder="e.g GHC300"
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
              Marc Andre Ter Stegen
            </p>
            <span className="text-[#606060] font-nunito text-[16px] leading-[21.82px]">
              Transaction Amount
            </span>
            <p className="text-[#333333] font-[600] md:text-[24px] md:leading-[36px]">
              GHC500
            </p>
            <button
              onClick={handleChanges}
              disabled={buttonSpinner}
              className="w-full rounded-[30px] h-full py-[13px] mt-2 bg-[#0A2EE2] text-[#fff] font-[600] md:text-[20px] md:leading-[30px]"
            >
              {buttonSpinner ? (
                <ClipLoader size={20} color="#fff" />
              ) : (
                <span>Process Payment</span>
              )}
            </button>
          </form>
        </div>

        {/* Modals */}
        {isModalOpens && (
          <ModalPayment isOpen={isModalOpens} closeModal={closeModals} handProceed={handProceed} />
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
          <ModalSuccess isOpen={isLastModalOpen} closeLastModal={closeLastModal} />
        )}
      </div>
    </div>
  );
};

export default Payments;
