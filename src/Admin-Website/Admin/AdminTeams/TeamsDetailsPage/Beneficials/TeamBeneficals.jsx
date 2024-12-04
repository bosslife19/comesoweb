import React, { useState } from "react";
// import logo from "../../../../assets/imglogo.png";
import "../../../../../styles/Admin/overflow_hidden.css";

const TeamBeneficals = () => {
  const Benefits = [
    {
      id: 1,
       heads: "Health Facility Payouts",
    },
    {
      id: 2,
      heads: "Mailing & Messaging",
     },
    {
      id: 3,
      heads: "Deactivating & Creating Accounts",
     },
     {
        id: 4,
        heads: "Other Functions",
       },
       {
        id: 5,
        heads: "Show private information",
       },
       {
        id: 6,
        heads: "Contact information",
       },
       {
        id: 7,
        heads: "Social media link",
       },
  ];

  const [checkedStates, setCheckedStates] = useState(
    Benefits.reduce((acc, benefit) => {
      acc[benefit.id] = false; // Initialize all as unchecked
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="w-full md:w-[330px] shadow-md scroll-container border overflow-y-auto h-[440px] rounded-[10px] font-sans">
      <h3 className="py-3 px-3   text-[#191B1C] font-[500] text-[16px] leading-[24px]">
        Functions
      </h3>
      <div className="p-3 ">
        {Benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="flex items-center gap-3 py-2 "
          >
            <input
              type="checkbox"
              id={`checkbox-${benefit.id}`}
              className="w-4 h-4 accent-blue-500 cursor-pointer"
              checked={checkedStates[benefit.id]}
              onChange={() => handleCheckboxChange(benefit.id)}
            />
            <label
              htmlFor={`checkbox-${benefit.id}`}
              className="cursor-pointer text-[#191B1C] font-[400] text-[14px] leading-[20px]"
            >
              {benefit.heads}
            </label>
          </div>
        ))}
        <button className="bg-[#0A2EE2] font-[600] text-[14px] leading-[40px] rounded-[20px] text-center justify-center flex text-white mt-4 py-[5px] px-[24px]">
            Save Changes
        </button>
      </div>
    </div>
  );
};

export default TeamBeneficals;
