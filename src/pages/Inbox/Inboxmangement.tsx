import React, { useState, useEffect } from "react";
 import { Inboxcontainer } from '../../components/Inbox/inboxcontainer'
 import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

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
