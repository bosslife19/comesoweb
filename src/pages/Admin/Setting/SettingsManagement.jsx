import React, { useState } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import SettingsBoard from "../../../Admin-Website/Admin/AdminSettings/SettingsBoard";
 
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
