import React, { useState } from "react";
import WebAppTab from "./WebAppTab/WebAppTab";
import ProfileT from "./Profile/ProfileT";
import ContactUs from "./Contact/ContactUs";

const SettingsBoard = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="px-[20px]  scroll-container   overflow-x-auto">
      {/* Page Title */}
      <h1 className="text-[#000] font-inter font-[600] pt-3 md:text-[24px] leading-[28.8px]">Settings</h1>
      <p className="text-[#667185] font-[400] text-[12px] leading-[20px] font-inter">
      Control your profile setup and integrations
        </p>

      {/* Tabs Section */}
      <div className="tabs-container">
        {/* Tab List */}
        <div className="tab-list flex gap-3 justify-start pt-[25px] mb-[20px] border-b">
          <button
            className={`font-[500] text-[14px] pb-2 leading-[20.3px] font-inter  tab-button cursor-pointer ${
              activeTab === "Profile" ? "text-[#1D4ED8] border-b-2 border-[#1D4ED8]" : "text-[#33333380]"
            }`}
            onClick={() => setActiveTab("Profile")}
          >
            Profile
          </button>
           
          <button
            className={`font-[500] text-[14px] pb-2 leading-[20.3px] font-inter tab-button cursor-pointer ${
              activeTab === "Web" ? "text-[#1D4ED8] border-b-2 border-[#1D4ED8]" : "text-[#33333380]"
            }`}
            onClick={() => setActiveTab("Web")}
          >
            Complaints
          </button>

          <button
            className={`font-[500] text-[14px] pb-2 leading-[20.3px] font-inter tab-button cursor-pointer ${
              activeTab === "Contact" ? "text-[#1D4ED8] border-b-2 border-[#1D4ED8]" : "text-[#33333380]"
            }`}
            onClick={() => setActiveTab("Contact")}
          >
            Contact
          </button>
        </div>

        {/* Tab Panels */}
        <div className="tab-panel">
          {activeTab === "Profile" && <ProfileT/>}
          {activeTab === "Web" && <WebAppTab />}
          {activeTab === "Contact" && <ContactUs />}
        </div>
      </div>
    </div>
  );
};

export default SettingsBoard;
