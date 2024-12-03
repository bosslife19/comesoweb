import React, { useState, useEffect } from "react";
import SettingsBoard from '../../components/Settings/SettingsBoard'
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

export const SettingsManagement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
   
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <SettingsBoard/>
  )}
    </>
  )
}
