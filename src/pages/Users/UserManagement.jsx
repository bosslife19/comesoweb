import React, { useState, useEffect } from "react";
import UserBoard from '../../components/Users/UserBoard'
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

const UserManagement = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
<div className='lg:h-[100vh] md:mb-[200px]'>      
  <UserBoard/>
    </div>
    )}
  </> 
  )
}

export default UserManagement
