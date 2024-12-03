 import { useState } from 'react';
import PayoutBoardList from '../../components/Payouts/PayoutBoard';
import PayoutBoardMain from '../../components/Payouts/PayoutHeader';
import CustomLottiePlayer from '../../components/welcomLoading/MainLoading';
 
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
