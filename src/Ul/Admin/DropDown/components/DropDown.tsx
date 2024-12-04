import React, { useState, useEffect, useRef } from 'react';
import { GoDotFill } from "react-icons/go";

interface DropdownProps {
  options: string[];
  placeholder?: string;
  label?: string;
  buttonSize?: string;
  onSelect?: (option: string) => void;
}


const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder,
  label,
  buttonSize,
  onSelect,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    if (onSelect) {
      onSelect(option);
    }
  };

  const tableRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {

      if (
        tableRef.current &&
        !tableRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`relative text-left `} ref={tableRef}>
      <div>
        {label && (
          <label className="text-[#ACB5BD]  text-md mb-2">{label}</label>
        )}
        <span className="rounded shadow-sm">
          <button
            type="button"
            className={`inline-flex py-1 px-[8px] justify-between rounded ${buttonSize}  bg-white text-md items-center leading-5 text-gray font-normal transition ease-in-out duration-150 `}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            {selectedOption || placeholder || 'Select an option'}
            <svg
              className="-mr-1 ml-2 text-gray h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </span>
      </div>

      {isDropdownOpen && (
        <div className="origin-top-right w-full  justify-start flex absolute mt-2 z-50 rounded-md shadow-lg bg-white">
          <div
            className=""
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                className={`flex  justify-center gap-2  items-center cursor-pointer p-3 text-blue text-md ${option === selectedOption ? 'text-black' : ''
                  }`}
                role="menuitem"
                onClick={(e) => { e?.preventDefault(); handleOptionClick(option) } }
              >
                 {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
