import React, { useState, useEffect } from "react";
 import Transactions from '../../components/Transactions/Transactions';
 import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

export const TransactionPage = () => {
  const [isLoading, setIsLoading] = useState(true);

      
  return (
   <>
    
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <Transactions/>
  )}
   
   </>
  )
}
