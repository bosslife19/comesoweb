/* eslint-disable react/prop-types */
 
// import logo from "../../../assets/imglogo.png"
import { useRef, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
 
export const ModalOtpPage  = ({  closeThirdModal,handProceedThird }) => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.match(/^[0-9]*$/)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // const clearAll = () => {
  //   setOtp(["", "", "", ""]);
  //   inputRefs.current[0].focus();
  // };

  return (
    <div className="fixed inset-0 font-sans p-3 bg-[#333] bg-opacity-[0.2] flex items-center justify-center z-[200]">
          <div className="bg-white rounded-lg  md:w-1/2">
          <div className='flex p-3 justify-between items-center pb-2 border-b'>
            <h2 className="text-xl font-[600] text-[14px] leading-[24px] md:text-[18px] mb-2">
            Confirm Payout
            </h2>
            <span onClick={closeThirdModal} className='className="bg-[#F5F6F7] border border-[#F5F6F7] text-[#191B1C] px-3 font-[600] md:px-[13px] py-3 mb-2 rounded-full'><IoMdClose/></span>
             </div>

            <h3 className='px-4 py-4 font-[500] text-[18px] leading-[24px]'>Input Your 4-digit Passcode</h3>
            <div className="flex justify-center gap-4 my-6 px-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              value={value}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength={1}
              className="w-12 h-12 text-xl text-center border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-200"
            />
          ))}
        </div>
             {/* Footer Buttons */}
            <div className="mt-4 flex justify-between py-3 px-4 mb-3">
              <button
                className="bg-[#F5F6F7] text-[#191B1C] px-3 font-[500] md:px-[30px] py-2 rounded-full text-[11px] md:text-[14px]"
                onClick={closeThirdModal}
              >
                Cancel
              </button>
              <button
               onClick={handProceedThird}  
               className="bg-[#0A2EE2] items-center  justify-between flex gap-1 font-sans text-[11px] md:text-[14px]  text-white px-2 md:px-4 md:py-2 rounded-full font-[500]">
                Pay 
               <span> <BsArrowRight className='mt-1 '/></span>
              </button>
            </div>
          </div>
        </div>
  )
}
