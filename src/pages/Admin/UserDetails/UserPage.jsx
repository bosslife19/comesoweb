import React, { useState} from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import UserHeader from "../../../Admin-Website/Admin/users/UserDetails/userHeader";
import UserBottom from "../../../Admin-Website/Admin/users/UserDetails/UserBottom";
 
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
