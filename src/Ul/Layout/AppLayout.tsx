import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideBarItem from './SideBarItem';
// import SubscriptionUpdate from '../SubscriptionUpdate';

const AppLayout: React.FC = () => {
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
						<div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
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
