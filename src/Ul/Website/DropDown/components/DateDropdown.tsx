import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
// interface CustomAriaLiveProps {
//   options: { label: string; value: string }[];
//   onValueChange: (selectedValue: string | null) => void;
// }

// Define your custom styles

  
  const DateDropdown: React.FC = () => {
    return (
        <div className=" bg-[#F9FDFF] flex items-center space-x-5 px-3 py-2">
            <div className=' flex items-center justify-center ' >
                <h6>All time</h6>
            </div>
            <MdArrowDropDown size={20} />
        </div>
    );
  };
  
  export default DateDropdown;