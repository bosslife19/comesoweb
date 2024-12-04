 import { useState } from 'react';
import CustomLottiePlayer from '../../../Admin-Website/welcomLoading/MainLoading';
import PayoutBoardMain from '../../../Admin-Website/Website/WebsitePayouts/PayoutHeader';
import PayoutBoardList from '../../../Admin-Website/Website/WebsitePayouts/PayoutBoard';
// import PayoutBoardList from '../../components/Payouts/PayoutBoard';
// import PayoutBoardMain from '../../components/Payouts/PayoutHeader';
// import CustomLottiePlayer from '../../components/welcomLoading/MainLoading';
 
export const PayoutPag = () => {
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
