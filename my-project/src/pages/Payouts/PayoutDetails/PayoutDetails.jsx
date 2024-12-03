import { useState } from 'react';
import CustomLottiePlayer from '../../../components/welcomLoading/MainLoading'
import PayoutDetailsList from '../../../Screens/PayoutHistory/PayoutBottoms'
import PayoutHeaders from '../../../Screens/PayoutHistory/PayoutHeaders'

export const PayoutDetails = () => {
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
