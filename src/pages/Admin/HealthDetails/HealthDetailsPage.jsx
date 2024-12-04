import React, { useState } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import HealthHeader from "../../../Admin-Website/Admin/Health_Facility/HealthDetails/HealthHeader";
import HealthBottom from "../../../Admin-Website/Admin/Health_Facility/HealthDetails/HealthBottom";

 
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
