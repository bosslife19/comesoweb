import React, { useState } from 'react'
import success from "../../../assets/successful.png"
import { useNavigate } from 'react-router-dom';
import "../../../styles/Website/Spinner.css"
import { ClipLoader } from 'react-spinners'; // Example spinner from react-spinners

const Successful = () => {
    const [buttonSpinner, setButtonSpinner] = useState(false);
    const navigate = useNavigate()
    
    const handleSuccess = () => {
      setButtonSpinner(true);
      setTimeout(() => {
        navigate('/dashboard');
        setButtonSpinner(false);
      }, 1000);
    };
  return (
    <div className="w-full px-[20px] md:px-[0px] md:w-[439px] py-[20px] m-auto flex flex-col text-center items-center"> 
    {/* First Upload Box */}
    <div className="space-y-3 mb-5">
      <h2 className="font-alata font-[400] text-[20px] md:text-[40px] leading-[49.4px] text-[#456EFE]">
      Congratulations!
      </h2>
     <p className=' font-alata font-[400] text-[12px] md:text-[20px] leading-[29.3px] text-[#A4A9AE]'>
        You have successfully concluded your verification process. We'll verify and approve your account within 24 hours.
     </p>
     <div className='px-[10px]'>
     <img src={success} className='w-full'/>
     </div>
    </div>

    
    {/* Next Button */}
    <button
          onClick={handleSuccess}
          className="text-[#fff] w-[139px] md:w-[209px] py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] md:text-[20px] md:leading-[30px] "
          disabled={buttonSpinner} // Disable button when spinner is active
        >
          {buttonSpinner ? (
            <ClipLoader size={20} color="#fff" />
          ) : (
            <span> back to Home</span>
          )}
     </button>
     
  </div>
  )
}

export default Successful
