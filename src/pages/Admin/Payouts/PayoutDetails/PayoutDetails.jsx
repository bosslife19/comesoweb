import React, { useState } from 'react'
import CustomLottiePlayer from '../../../../Admin-Website/welcomLoading/MainLoading';
import DetailsPayMain from '../../../../Admin-Website/Admin/AdminPayout/PayoutDetails/DetailsHeader';
import PayoutDetai from '../../../../Admin-Website/Admin/AdminPayout/PayoutDetails/PayoutDetails';
 
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
