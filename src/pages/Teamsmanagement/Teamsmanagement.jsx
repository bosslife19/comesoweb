import React, { useState, useEffect } from "react";
import TeamBoard from '../../components/Teams/TeamBoard'
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

const Teamsmanagement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
   
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[30%] md:pb-[40%]'>    

      <div>
    <TeamBoard/>
    </div>
    </div>
      )}
  </> 
  )
}

export default Teamsmanagement
