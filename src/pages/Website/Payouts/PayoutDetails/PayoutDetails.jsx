import { useState } from 'react';
 import CustomLottiePlayer from '../../../../Admin-Website/welcomLoading/MainLoading';
import PayoutHeaders from '../../../../Screens/Website/PayoutHistory/PayoutHeaders';
import PayoutDetailsList from '../../../../Screens/Website/PayoutHistory/PayoutBottoms';

export const PayoutDetail = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : (
    <div className='md:h-[100vh] md:mb-[440px]'>
      <PayoutHeaders/>
      <PayoutDetailsList/>
    </div>
    )}
    </>
  )
}
