import React, { useState, useEffect, useRef, FC } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
// import Avatars from "../../assets/Avatars.png";

interface Option {
  text: string;
  icon: FC<{ className?: string }>;
  color: string;
  handler: () => void;
}

const AvatarDropdown: FC<{ options: Option[] }> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const closeDropdown = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-3 cursor-pointer" ref={dropdownRef}>
      <div className="cursor-pointer" onClick={toggleDropdown}>
        {/* <img src={Avatars} alt="Avatar" className="object-cover w-10 h-10 rounded-full" /> */}
      </div>

      <div onClick={toggleDropdown}>
        {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 bg-white shadow-md rounded-md w-48 z-50">
          {options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 ${option.color}`}
              onClick={() => {
                option.handler();
                setIsOpen(false);
              }}
            >
              <option.icon className="text-lg" />
              <span>{option.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
