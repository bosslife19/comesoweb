import React, { useState, useEffect } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import { Inboxcontainer } from "../../../Admin-Website/Admin/AdminInbox/inboxcontainer";
  
const Customermangement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    
     <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
      <Inboxcontainer/>
    )}
  </> 
  )
}

export default Customermangement
