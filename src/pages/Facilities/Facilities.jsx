import React, { useState, useEffect } from "react";
import HealthBord from '../../Screens/Modals/Facilities/BoardMain/HealthBord'
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

const Facilities = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[30%] pb-[40%]'>    
      <HealthBord/>
    </div>
     )}
  </> 
  )
}

export default Facilities
