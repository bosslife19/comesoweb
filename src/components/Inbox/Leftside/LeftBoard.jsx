import { useState } from "react";
import { BiPlus, BiTrash } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { GoPencil } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbMessageCircleCog } from "react-icons/tb";
import { TiWarningOutline } from "react-icons/ti";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const LeftBoard = ({ onSelect }) => {
  const [selected, setSelected] = useState("Inbox");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the mobile menu

  const menuItems = [
    { icon: MdOutlineEmail, label: "Inbox", count: 1253 },
    { icon: CiStar, label: "Starred", count: 3938 },
    { icon: FiSend, label: "Sent", count: 1253 },
    { icon: GoPencil, label: "Draft", count: 8 },
    { icon: TiWarningOutline, label: "Spam", count: 8 },
    { icon: TbMessageCircleCog, label: "Important", count: 8 },
    { icon: BiTrash, label: "Bin", count: 8 },
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
    setSelected(item);
    onSelect(item);
  };

  return (
    <div className="bg-white md:w-[296px] h-full my-[20px] p-5 rounded-[20px] border-[0.3px] border-[#EBEBEC] shadow-md">
      {/* Compose Button */}
      <div className=" flex justify-center">
        <button className=" flex w-[150px] md:w-[238px] h-[33px] text-sm md:text-[15px] md:h-[43px] bg-[#0A2EE2] text-[#fff] rounded-[8px] items-center gap-2 font-nunito justify-center">
          <BiPlus />
          Compose
        </button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="block md:hidden mt-1">
        <motion.button
          variants={containerVariants}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-full  text-[#202224] py-2 px-4 rounded-md"
        >
          {isMenuOpen ? <IoMdClose />: <RxHamburgerMenu />          }
        </motion.button>
        {isMenuOpen && (
          <div className="mt-3 bg-white border rounded-md shadow-sm">
            {menuItems.map((item) => {
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
                  <span>{item.count}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <h3 className="py-[10px] md:py-[20px] text-[#202224] font-nunito leading-[21.82px] text-[16px] font-[600] tracking-[0.06px]">
          My Email
        </h3>
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
                <span>{item.count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftBoard;
