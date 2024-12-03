import React, { useState, useEffect } from "react";
import DashboardMain from "../../components/Dashboard/DashboardMain";
import DashboardList from "../../components/Dashboard/DashboardOverview";
import CustomLottiePlayer from "../../components/welcomLoading/MainLoading";
 
const Dashboards = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
        <CustomLottiePlayer onComplete={() => setIsLoading(false)} />
      ) : ( 
        <div className="lg:h-[100vh] h-full mb-0 md:mb-[42%] md:pb-[40%]">
      <DashboardMain />
      <DashboardList />
    </div>
      )}
    </> 
    
  );
};

export default Dashboards;
