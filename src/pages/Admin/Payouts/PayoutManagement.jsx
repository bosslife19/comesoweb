import React, { useState } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import PayoutBoardMain from "../../../Admin-Website/Admin/AdminPayout/PayoutHeader";
import PayoutBoardList from "../../../Admin-Website/Admin/AdminPayout/PayoutBoard";

 
export const PayoutPage = () => {
    const [isLoading, setIsLoading] = useState(true);

      
 return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
  <div className='md:mb-[85px]'>
   <PayoutBoardMain/>
   <PayoutBoardList/>
  </div>
     )}
  </> 
 )
}
