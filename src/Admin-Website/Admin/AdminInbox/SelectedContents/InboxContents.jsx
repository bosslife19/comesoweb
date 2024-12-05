import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMoveToInbox, MdStar } from "react-icons/md";
 import { CiStar } from "react-icons/ci";
import "../../../../styles/Admin/overflow_hidden.css"; // Assuming the CSS file for truncation is imported
import Search from "../../../../Ul/Admin/Input/components/Search";

export const InboxContents = () => {
  const messages = [
    { id: 1, name: "John Doe", time: "10:30 AM", label: "Primary", paragraph: "Our Bachelor of Commerce program is ACBSP-accredited." },
    { id: 2, name: "Jane Smith", time: "11:00 AM", label: "Work", paragraph: "Get Best Advertiser In Your Side Pocket" },
    { id: 3, name: "Alice Johnson", time: "12:15 PM", label: "Friends", paragraph: "Vacation Home" },
    { id: 4, name: "Bob Williams", time: "1:45 PM", paragraph: "Some text here that will be truncated." },
  ];

  const [checkedStates, setCheckedStates] = useState(
    messages.reduce((acc, message) => {
      acc[message.id] = false; // Initialize all as unchecked
      return acc;
    }, {})
  );

  const [starredStates, setStarredStates] = useState(
    messages.reduce((acc, message) => {
      acc[message.id] = false; // Initialize all as unstarred
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const handleStarClick = (id) => {
    setStarredStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  const getLabelStyle = (label) => {
    switch (label) {
      case "Primary":
        return "text-[#00B69B] bg-[#C3EAEB] rounded-[5px] text-center px-3 py-1 text-sm";
      case "Work":
        return "text-[#FD9A56] bg-[#F6E4DD] rounded-[5px] text-center px-3 py-1 text-sm";
      case "Friends":
        return "text-[#D456FD] bg-[#F6DDFF] rounded-[5px] text-center px-3 py-1 text-sm";
      default:
        return "text-gray-700";
    }
  };

  return (
    <div className="  " >
      <div className="pt-4 px-4 flex items-center justify-between mb-[10px] md:mb-[30px]">
        <div className="md:w-[332px] ">
          <Search id="search" placeholder="Search" name="search" />
        </div>
        <div className="flex border bg-[#FAFBFD]">
          <span className="border-r-[0.6px] border-[#D5D5D5] py-2 px-2 text-[17px]">
            <MdMoveToInbox />
          </span>
          <span className="border-r-[0.6px] border-[#D5D5D5] py-2 px-2 text-[17px]">
            <CiStar />
          </span>
          <span className="border-r-[0.6px] border-[#D5D5D5] py-2 px-2 text-[17px]">
            <FaTrash />
          </span>
        </div>
      </div>
      <ul className="py-3">
        {messages.map((message) => (
          <li
            key={message.id}
            className={`md:flex items-center p-3 shadow-sm border-b border-[#f3f3f3] ${
              checkedStates[message.id] ? "bg-[#F4F7FF]" : "bg-[#fff]"
            }`}
          >
            <div className="flex items-center gap-1 md:gap-3 md:w-full">
              <input
                type="checkbox"
                id={`checkbox-${message.id}`}
                className="custom-checkbox-input"
                checked={checkedStates[message.id]}
                onChange={() => handleCheckboxChange(message.id)}
              /> 
              <label htmlFor={`checkbox-${message.id}`} className="custom-checkbox-label"></label>
              <MdStar
                onClick={() => handleStarClick(message.id)}
                className={`text-xl md:text-3xl cursor-pointer rounded-full ${
                  starredStates[message.id] ? "text-yellow-400" : "text-gray-400"
                } p-1`}
              />
              <Link to={`/product/${message.id}`} className="flex justify-between items-center w-full">
                <div className="flex items-center  gap-3">
                  <span className="text-[#202224] font-medium font-nunito text-[14px]">{message.name}</span>
                  <div className="flex justify-center items-center">
                  {message.label && (
                    <div className={` text-[12px] leading-[16.37px]  md:mx-3 items-center  py-2 font-nunito font-[600]  ${getLabelStyle(message.label)}`}>
                      {message.label}
                    </div>
                  )}
                  </div>
                 <p className=" text-[#202224] text-[14px] font-nunito leading-[19.1px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] md:max-w-[200px]">
                    {message.paragraph}</p>
                </div>
                <p className="text-gray-500 text-sm font-nunito">
                  {message.time}
                  </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
