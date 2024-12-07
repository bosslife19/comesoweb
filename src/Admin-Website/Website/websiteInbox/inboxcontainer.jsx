import { useState } from "react";
import LeftBoard from "./Leftside/LeftBoard";
import Rightside from "./Rightside/Rightside";
import { SlArrowLeft } from "react-icons/sl";

export const Inboxcontainer = () => {
  const [selectedItem, setSelectedItem] = useState("Regulatory Requirements"); // Set default value here
  const [progress, setProgress] = useState(0);

  const menuItems = [
    "Regulatory Requirements",
    "Technical Requirements", 
    "Operational Requirements",
    "Financial Requirements",
    "Business Documentation",
  ];

  const handleSelect = (item) => {
    const selectedIndex = menuItems.indexOf(item);
    if (selectedIndex >= 0) {
      setProgress(((selectedIndex + 1) / menuItems.length) * 100);
    }
    setSelectedItem(item);
  };

  const handleNext = (first, second) => {
    // Get the index of the current item
    const currentIndex = menuItems.indexOf(selectedItem);
    if (currentIndex < menuItems.length - 1) {
      // Go to the next item
      setSelectedItem(menuItems[currentIndex + 1]);
    }
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="w-full   mb-[10%] bg-[#fff]">
      <div
        onClick={goBack}
        className="flex px-[20px] font-[600] cursor-pointer items-center py-[20px] flex-wrap gap-1 text-[#333333]"
      >
        <SlArrowLeft className="text-[12px]" />
        <span className="font-[400] md:text-[16px] leading-[24px]">Back</span>
      </div>
      <div className="relative w-full  h-[8px] bg-[#E0E0E0] rounded-full mb-5 overflow-hidden">
        <div
          className="absolute h-full bg-[#0A2EE2] transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="lg:flex flex-wrap">
        <div className="md:w-[300px]">
          <LeftBoard onSelect={handleSelect} selected={selectedItem} />
        </div>
        <div className="flex-1">
          <Rightside
            selectedItem={selectedItem}
            menuItems={menuItems}
            handleNext={handleNext} // Pass the handleNext function to Rightside
          />
        </div>
      </div>
    </div>
  );
};
