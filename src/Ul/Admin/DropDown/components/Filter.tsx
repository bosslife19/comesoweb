import React, { useState } from "react";
import Button from "../../Button/components/Button";
import { GoFilter } from "react-icons/go";
import { GoDotFill } from "react-icons/go";

interface FilterProps {
    selectedOption: string;
    options: string[];
}

const Filter: React.FC<FilterProps> = ({ selectedOption, options }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOptionValue, setSelectedOptionValue] = useState(
        selectedOption || "Filter",
    );

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const selectOption = (option: string) => {
        setSelectedOptionValue(option);
        toggleDropdown();
    };


    const optionClasses = (option: string) => {
        return {
            "text-secondary text-center": option === selectedOptionValue,
        };
    };

    return (
        <div className="relative ">
            <Button 
                onClick={toggleDropdown}
            disabled={false}
            loading={false}
            round={false}
            size="small"
            iconLeft={GoFilter}
            type="alternate" >
                Filter
            </Button>
            
            {isDropdownOpen && (
                <div className="absolute text-left mt-2 z-50   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <ul className="p-3 space-y-1 flex flex-col  justify-start items-start text-sm whitespace-nowrap">
                        {options.map((option, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => selectOption(option)}
                                    className={`flex justify-start gap-2 border-b border-b-gray border-opacity-10 items-center cursor-pointer p-5  text-md text-blue focus:outline-none ${optionClasses(
                                        option, 
                                    )}`}
                                    type="button"
                                >
                                    <GoDotFill />  {option}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Filter;
