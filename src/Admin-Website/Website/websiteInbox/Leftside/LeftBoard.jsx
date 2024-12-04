import { useState } from "react";
import { RiFolderWarningLine } from "react-icons/ri";
import { TbUserCheck } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
 import { TiDocumentText } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { PiBatteryWarningVerticalLight } from "react-icons/pi";

const LeftBoard = ({ onSelect, selected }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: PiBatteryWarningVerticalLight, label: "Regulatory Requirements" },
    { icon: TbUserCheck , label: "Technical Requirements" },
    { icon: RiFolderWarningLine , label: "Operational Requirements" },
    { icon: BsBank , label: "Financial Requirements" },
    { icon: TiDocumentText , label: "Business Documentation" },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, type: "spring", stiffness: 300 },
    }),
  };

  const handleSelect = (item) => {
    onSelect(item);
  };

  const currentIndex = menuItems.findIndex(item => item.label === selected) + 1;


  return (
    <div className="bg-white md:w-[296px] my-[20px] p-5 ">
      {/* Mobile Hamburger Menu */}
      <div className="block md:hidden mt-1">
        <motion.button
          variants={containerVariants}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full text-[#202224] py-2 px-4 rounded-md"
        >
          {isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}
        </motion.button>
        {isMenuOpen && (
          <div className="mt-3 bg-white border rounded-md ">
            {menuItems.map((item, index) => {
              const isActive = selected === item.label;
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`flex justify-between py-3 px-4 items-center rounded-md cursor-pointer ${
                    isActive ? "bg-[#DFE3FB] text-[#0A2EE2]" : "text-[#202224]"
                  }`}
                  onClick={() => handleSelect(item.label)}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`${
                        isActive ? "text-[#0A2EE2] text-[20px]" : "text-[#202224]"
                      }`}
                    />
                    <span className="font-nunito font-[700] text-[14px] leading-[19.1px]">
                      {item.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
         {/* Step Counter */}
         <div className="mb-4 text-[#33333399] text-[24px] font-nunito font-[600]">
          <span className="text-[#0A2EE2] "> {currentIndex}</span>
          /{menuItems.length}
        </div>
        <div>
          {menuItems.map((item) => {
            const isActive = selected === item.label;
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`flex justify-between py-4 px-3 items-center rounded-md cursor-pointer ${
                  isActive ? "bg-[#DFE3FB] text-[#0A2EE2]" : "text-[#202224]"
                }`}
                onClick={() => handleSelect(item.label)}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`${
                      isActive ? "text-[#0A2EE2] text-[20px]" : "text-[#202224]"
                    }`}
                  />
                  <span className="font-nunito font-[700] text-[14px] leading-[19.1px]">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftBoard;
