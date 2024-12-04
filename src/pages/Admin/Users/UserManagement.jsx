import React, { useState} from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import UserBoard from "../../../Admin-Website/Admin/users/UserBoard";
 
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
