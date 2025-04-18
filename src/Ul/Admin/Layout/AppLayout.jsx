import   { useState } from 'react';
import { Outlet } from 'react-router-dom';
 import SideBarItem from './SideBarItem';
import Header from '../Header/Header';
 // import SubscriptionUpdate from '../SubscriptionUpdate';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return ( 
		<div className="bg-[#FDFDFD]">
			{/* <!-- ===== Page Wrapper Start ===== --> */}
			<div className="flex h-screen  overflow-hidden">
				{/* <!-- ===== Sidebar Start ===== --> */}
				<SideBarItem
					sidebarOpen={sidebarOpen}
					setSidebarOpen={setSidebarOpen}
				/> 
				{/* <!-- ===== Sidebar End ===== --> */}

				{/* <!-- ===== Content Area Start ===== --> */}
				<div className=" flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
					{/* <!-- ===== Header Start ===== --> */}
					<Header
						sidebarOpen={sidebarOpen}
						setSidebarOpen={setSidebarOpen}
					/>
					{/* <!-- ===== Header End ===== --> */}

					{/* <!-- ===== Main Content Start ===== --> */}
					<main>
						<div className=" bg-[#F5F6FA]   p-4 md:p-6 2xl:p-10">
							<Outlet />
						</div>
					</main>
					{/* <!-- ===== Main Content End ===== --> */}
				</div>
				{/* <!-- ===== Content Area End ===== --> */}
			</div>
			{/* <!-- ===== Page Wrapper End ===== --> */}
		</div>
	);
};

export default AppLayout;
