import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "../Input/components/Search";
import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import AvatarDropdown from "./AvatarDropdown";
import { BiBell } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
 
  const dropdownOptions = [
    {
      text: "Add User",
      icon: FaUserLarge,
      color: "text-gray",
      handler: () => navigate("/AddUser"),
    },
    {
      text: "Logout",
      icon: HiOutlineLogout,
      color: "text-red",
      handler: () => {
        console.log("User logged out");
        navigate("/");
      },
    },
  ];

  return (
    <header className="sticky top-0 flex flex-col z-[51] bg-[#FDFDFD] shadow">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-md md:px-6 2xl:px-11">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="block rounded-sm bg-white p-1.5 shadow-sm"
          >
            <svg
              className="h-10 w-10 fill-current p-2 border rounded-full text-blue"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Search Bar */}
        <div className="hidden sm:block">
          <Search
            id="search"
            placeholder="Search"
            name="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Header Actions */}
        <div className="flex items-center gap-5">
          {/* Settings Icon */}
 
          {/* Notifications Icon */}
          <BiBell className="text-[#6C737F] text-[20px] cursor-pointer" />

          {/* Avatar Dropdown */}
          <div className="border-l-2 pl-4">
            <AvatarDropdown options={dropdownOptions} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
