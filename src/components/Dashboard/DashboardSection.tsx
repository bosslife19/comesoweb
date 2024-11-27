import React from "react";
// import logo from "../../assets/name.png";
import "../../styles/overflow_hidden.css"
const DashboardTable: React.FC = () => {
  const data = [
    { _id: "1", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "2", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "3", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "4", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "5", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "6", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "7", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "8", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "9", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    { _id: "10", name: "Phoenix Baker", para: "Up $2500.00 in past week", img: logo },
    // Add more items as needed...
  ];

  return (
    <div className="border-[1px] h-[100%] border-[#EAECF0] rounded-[20px] p-[10px] ml-[10px]">
      <div className="py-[10px] border-b border-[#6B788E1F]">
        <h3 className="font-[500] text-[14px] leading-[20px] font-sans">Top SMEs</h3>
        <p className="font-[500] text-[14px] leading-[20px] font-sans text-[#2FC271]">
          Top gainers in the past week
        </p>
      </div>

      {/* Scrolling container */}
      <div className="mt-[10px] max-h-[250px] md:max-h-[450px] overflow-y-auto overflow-x-hidden scroll-container">
        {data.map((items, id) => (
          <div className="flex justify-between items-center py-[10px] w-full" key={id}>
            <div className="relative">
              <img
                className="sm:w-[32px] h-[32px] rounded-full"
                src={items.img}
                alt=""
              />
              <div className="absolute bottom-0 right-0 border border-[#FFFFFF] w-[8px] rounded-full h-[8px] bg-[#17B26A]"></div>
            </div>
            <div className="w-full">
              <h3 className="font-sans font-[500] text-[14px] leading-[20px]">{items.name}</h3>
              <p className="font-sans font-[400] text-[14px] leading-[20px]">{items.para}</p>
            </div>
            <div className="w-[8px] rounded-full h-[8px] bg-[#17B26A]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTable;
