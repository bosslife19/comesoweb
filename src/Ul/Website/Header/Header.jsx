import { useState } from "react";
import { useNavigate } from "react-router-dom";
//  import { FaUserLarge } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import AvatarDropdown from "./AvatarDropdown";
//  import bell from "../../../assets/icon.png";
import "flag-icons/css/flag-icons.min.css"; // Import flag icons CSS
import Search from "../Input/components/Search";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null); // State to track which dropdown is open
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const navigate = useNavigate();

  const dropdownOptions = [
    // {
    //   text: "Add User",
    //   icon: FaUserLarge,
    //   color: "text-gray",
    //   handler: () => navigate("/AddUser"),
    // },
    {
      text: "Logout",
      icon: HiOutlineLogout,
      color: "text-red",
      handler: () => {
        localStorage.clear();
        navigate("/login");
      },
    },
  ];

  // List of available languages with flag-icon classes
  const languages = [
    { code: "en-GB", name: "English (UK)", flagClass: "fi-gb" },
    { code: "en-US", name: "English (US)", flagClass: "fi-us" },
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    console.log(`Language changed to: ${language}`);
    setDropdownOpen(null); // Close both dropdowns
  };

  const toggleDropdown = (dropdownType) => {
    if (dropdownOpen === dropdownType) {
      setDropdownOpen(null); // Close the dropdown if it is already open
    } else {
      setDropdownOpen(dropdownType); // Open the selected dropdown and close the other
    }
  };

  return (
    <header className="sticky top-0 flex flex-col z-[51] bg-[#FDFDFD] shadow">
      <div className="flex flex-grow items-center justify-between py-[12px] px-4 shadow-md md:px-6 2xl:px-11">
        {/* Sidebar Toggle Button */}
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
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
        <div className="hidden sm:block opacity-0">
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
          {/* Language Selector */}
          <div className="relative hidden sm:block">
            <button
              className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
              onClick={() => toggleDropdown("language")}
            >
              <span
                className={`fi ${
                  languages.find((lang) => lang.code === selectedLanguage)
                    ?.flagClass
                }`}
              ></span>
              <span>
                {
                  languages.find((lang) => lang.code === selectedLanguage)
                    ?.name
                }
              </span>
            </button>

            {dropdownOpen === "language" && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={() => handleLanguageChange(lang.code)}
                  >
                    <span className={`fi ${lang.flagClass}`}></span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Avatar Dropdown */}
          <div className="border-l-2 pl-4">
            <button onClick={() => toggleDropdown("avatar")}>
              <AvatarDropdown options={dropdownOptions} />
            </button>

            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
