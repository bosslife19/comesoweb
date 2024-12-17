import   { useState } from "react";
import { BiCalendar } from "react-icons/bi";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const ButtonsWithPopup = () => {
  const [openPopup, setOpenPopup] = useState(null);

  // Options for the dropdown
  const dropdownOptions = ["Beneficiary 1", "Beneficiary 2", "Beneficiary 3"];

  // Selected dropdown value
  const [selectedOption, setSelectedOption] = useState("");

  const togglePopup = (popupType) => {
    setOpenPopup((prev) => (prev === popupType ? null : popupType));
  };

  const handleDropdownChange = (option) => {
    setSelectedOption(option.value);
    setOpenPopup(null); // Close dropdown after selection
  };

  return (
    <div className=" flex-wrap flex gap-4 md:space-y-3 items-center px-2">
      {/* Calendar Button */}
      <div className="relative">
        {/* <button
          className="border items-center flex gap-1 w-[118px] h-[42px] rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] justify-center text-[14px] leading-[21.42px]"
          onClick={() => togglePopup("calendar")}
        >
          <BiCalendar />
          This Month
        </button> */}
        {openPopup === "calendar" && (
          <div className="absolute top-full mt-2 bg-white shadow-lg border rounded-lg p-4 z-10">
            <div className="text-center text-gray-700">
              <p>Select Date Range</p>
              <input
                type="date"
                className="mt-2 border p-2 rounded w-full"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
        )}
      </div>

      {/* Dropdown Button */}
      <div>
        <Dropdown
          options={dropdownOptions}
          onChange={handleDropdownChange}
          value={selectedOption}
          placeholder="To Beneficiaries"
          className="w-full h-[42px] rounded-[30px] border-[#EBEBEE] bg-[#FFFFFF] text-[#222222E5] font-[500] text-[14px] leading-[21.42px]"
          controlClassName="border border-[#EBEBEE] rounded-[30px] px-4 py-2 cursor-pointer"
          menuClassName="bg-white border border-[#EBEBEE] shadow-lg rounded-lg"
          onFocus={() => togglePopup("dropdown")}
        />
      </div>
    </div>
  );
};

export default ButtonsWithPopup;
