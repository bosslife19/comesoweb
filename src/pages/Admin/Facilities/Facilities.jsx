import   { useState } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import HealthBord from "../../../Screens/Admin/Modals/Facilities/BoardMain/HealthBord";

const Facilities = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
    <div className='lg:h-[100vh] mt-[20px] h-full mb-0 md:mb-[30%] pb-[40%]'>    
      <HealthBord/>
    </div>
     )}
  </> 
  )
}

export default Facilities
