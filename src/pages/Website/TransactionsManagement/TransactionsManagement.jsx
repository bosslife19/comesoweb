 import React, { useState } from 'react';
import CustomLottiePlayer from '../../../Admin-Website/welcomLoading/MainLoading';
import Transactions from '../../../Admin-Website/Website/websiteTransactions/Transactions';
//  import Transactions from '../../components/Transactions/Transactions';
//  import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

export const TransactionPag = () => {
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
