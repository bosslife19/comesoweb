// import React from 'react'
 import OTPMain from './OTPMain';

const SignMessage = () => {
    return (
      <div className=" flex bg-[#FDFDFD] flex-col justify-center h-screen  relative overflow-hidden  ">
        <div className="w-[350px] h-[350px] md:w-[542px] md:h-[542px] absolute top-[-193px] right-[-190px] rounded-full bg-[#F8F9F9]"></div>          
    
          {/* Title and Instructions */}
          <div className='flex justify-center flex-col items-center space-y-4' >
            <h1 className=' font-inter font-[600] text-[17px] md:text-[30px] md:leading-[40px]' >Verify Your Phone Number</h1>
            <p  className=' font-nunito text-center  font-[400] text-[11px] md:text-[17px] leading-[20px] text-[#333] px-[40px] md:w-[500px]' >
              We sent a 4-digit code to  +23480123456789 . Please enter it below to verify your account.
            </p>
            <div >
          <OTPMain/>
          </div>
          </div>
    
          {/* OTP Input Section */}
          
          {/* Help Section */}
          <div className="w-[350px] h-[350px] md:w-[542px] md:h-[542px] absolute bottom-[-193px] left-[-190px] rounded-full bg-[#F8F9F9]"></div>          
          </div>
      );
    }
    

export default SignMessage