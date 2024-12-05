import React, { useState, useEffect } from "react";
import CustomLottiePlayer from "../../../Admin-Website/welcomLoading/MainLoading";
import DashboardMain from "../../../Admin-Website/Website/WebsiteDashboard/DashboardMain";
import DashboardList from "../../../Admin-Website/Website/WebsiteDashboard/DashboardOverview";
const Dashboard = () => {
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

export default Dashboard;
