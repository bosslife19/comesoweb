import React from "react"
 import DashboardMain from "../../components/Dashboard/DashboardMain"
import DashboardList from "../../components/Dashboard/DashboardOverview"

 
 const Dashboards = () => {
  
  
 
  
  return (
   <div className='lg:h-[100vh]  h-full mb-0 md:mb-[42%] md:pb-[40%]'>     
     <DashboardMain />  
     <DashboardList/>
      </div>
        
   )
}

export default Dashboards
