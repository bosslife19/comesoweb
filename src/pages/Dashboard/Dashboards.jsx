import React, { useState, useEffect } from "react";
import DashboardMain from "../../components/Dashboard/DashboardMain";
import DashboardList from "../../components/Dashboard/DashboardOverview";

const Dashboards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading time
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12"></div>
      </div>
    );
  }

  return (
    <div className="lg:h-[100vh] h-full mb-0 md:mb-[42%] md:pb-[40%]">
      <DashboardMain />
      <DashboardList />
    </div>
  );
};

export default Dashboards;
