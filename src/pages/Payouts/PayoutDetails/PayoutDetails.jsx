import React, { useState, useEffect } from 'react'
import DetailsPayMain from '../../../components/Payouts/PayoutDetails/DetailsHeader'
import PayoutDetai from '../../../components/Payouts/PayoutDetails/PayoutDetails'
import CustomLottiePlayer from "../../../components/welcomLoading/MainLoading";

export const PayoutDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <div className='md:h-[100vh] md:mb-[200px]'>
        <DetailsPayMain/>
        <PayoutDetai/>
    </div>
      )}
  </> 
  )
}
