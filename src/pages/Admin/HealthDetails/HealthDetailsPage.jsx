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
    <div className=''>    
    <HealthHeader/>
      <HealthBottom/>
    </div>
      )}
  </> 
  )
}

export default HealthDetailsPage
