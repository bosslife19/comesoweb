import React from "react";
import Dropdown from "react-dropdown";
 import "react-dropdown/style.css";

interface ResItem {
  firstName: string;
  lastName: string;
  businessName: string;
}

const currencyOptions = ["NGN", "USD", "EUR"]; // Example currencies
const timeOptions = [
  { value: "last_7_days", label: "Last 7 Days" },
  { value: "last_30_days", label: "Last 30 Days" },
  { value: "last_90_days", label: "Last 90 Days" },
];

const CustomerboardTitle: React.FC<{ resList: ResItem[] }> = ({ resList }) => {
  return (
    <div className="w-full">
      {resList.map((res, index) => (
        <div key={index} className=" flex justify-start items-center mb-5 gap-3">
          <div className=" w-full flex flex-col font-sans">
            <span className="text-[#101b28] leading-normal text-[20px] md:text-[30px] font-[600]">
              {res.businessName}
            </span>
            <div className="flex md:items-center justify-between">
              <div className="flex items-center">
              <span className="text-[#6B788E] leading-normal tracking-wide text-lg font-normal">
                Welcome back, {res.firstName} 
              </span>
              <p className="text-[#6B788E] leading-normal tracking-wide text-lg font-normal">{res.lastName}</p>
              </div>
              <div className=" md:flex gap-4">
                {/* Currency Dropdown */}
                <div className="md:w-[87px]   ">
                  <Dropdown
                     className=" md:text-[16px] p-1 text-[#6B788E] leading-[18px] font-[350]"

                     options={currencyOptions}
                    onChange={(e) => console.log("Currency Selected:", e.value)}
                    value={currencyOptions[0]} // Default value: "NGN"
                    placeholder="Select Currency"
                  />
                </div>

                {/* Time Dropdown */}
                <div className=" ">
                  <Dropdown
                  className=" md:text-[16px] p-1 text-[#6B788E] leading-[18px] font-[350]"
                     options={timeOptions}
                     placeholder="last_7_days"
                    // options={timeOptions[2]} // Default: "Last 90 Days"
                    onChange={(selectedOption) =>
                      console.log("Time Period Selected:", selectedOption?.value)
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> 
  );
};

export default CustomerboardTitle;
