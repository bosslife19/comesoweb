import React, { useState, useEffect } from "react";

 import UserBottom from '../../components/Users/UserDetails/UserBottom'
 import UserHeader from '../../components/Users/UserDetails/userHeader'
 import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";

const UserDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
<div className='lg:h-[100vh] md:mb-[200px]'>    
  <UserHeader/>
      <UserBottom/>
    </div>
    )}
  </> 
  )
}

export default UserDetailsPage
