import React, { useState, useEffect } from "react";

 import PayoutBoardMain from '../../components/Payouts/PayoutHeader';
import PayoutBoardList from '../../components/Payouts/PayoutBoard';
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

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
