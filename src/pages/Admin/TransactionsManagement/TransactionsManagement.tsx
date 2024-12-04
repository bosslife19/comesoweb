import React, { useState, useEffect } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import Transactions from "../../../Admin-Website/Admin/AdminTransactions/Transactions";
 
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
