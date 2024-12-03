import React, { useState, useEffect } from "react";

import HealthBottom from '../../components/Health_Facility/HealthDetails/HealthBottom'
import HealthHeader from '../../components/Health_Facility/HealthDetails/HealthHeader'
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

const HealthDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[90%] md:pb-[63%]'>    
    <HealthHeader/>
      <HealthBottom/>
    </div>
      )}
  </> 
  )
}

export default HealthDetailsPage
