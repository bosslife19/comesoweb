import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";  
import LeftBoard from "../../../Admin-Website/Admin/AdminInbox/Leftside/LeftBoard";
 import { MdKeyboardArrowLeft } from "react-icons/md";
 import { FaMicrophone, FaTrash } from "react-icons/fa";
import logo from "../../../assets/imglogo.png";
import { HiOutlinePaperClip } from "react-icons/hi";
import { ImFilePicture, ImPrinter } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";

export const ProductDetails = () => {
  const { id } = useParams(); // Access the dynamic id
  const [selectedItem, setSelectedItem] = useState("Inbox");

  const messages = [
    { sender: "You", text: "Hello! How can I help you today?", time: "10:30 AM", image: logo },
    { sender: "John Doe", text: "I need more details about the product.", time: "10:32 AM", image: logo },
    { sender: "You", text: "Sure, let me provide you with the information.", time: "10:35 AM", image: logo },
    { sender: "John Doe", text: "Thanks, waiting for the details.", time: "10:36 AM", image: logo },
    { sender: "You", text: "Here are the details you requested.", time: "10:38 AM", image: logo },
    { sender: "John Doe", text: "This is helpful, thank you!", time: "10:40 AM", image: logo },
    { sender: "You", text: "You're welcome!", time: "10:42 AM", image: logo },
    { sender: "You", text: "Let me know if you have any other questions.", time: "10:45 AM", image: logo },
    { sender: "John Doe", text: "This is helpful, thank you!", time: "10:40 AM", image: logo },
  ];

  const navigate = useNavigate();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 6;

  const indexOfLastMessage = currentPage * messagesPerPage;
  const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className=" flex flex-col lg:flex-row  md:justify-between flex-wrap">
      {/* Sidebar */}
      <div className=" md:p-5">
        <LeftBoard onSelect={(item) => setSelectedItem(item)} />
      </div>

      {/* Content */}
      <div className="flex-1   shadow-md mt-[4%] flex-wrap md:h-screen  items-center justify-center">
        {/* Header */}
        <div className="bg-[#fff] shadow-md  rounded-t-[10px]  border -b py-[20px] px-4 flex items-center justify-between   ">
          <div className="flex items-center gap-4">
            <span onClick={() => navigate(-1)} className="bg-[#f5f5f5] text-[20px] rounded-[10px] p-2">
              <MdKeyboardArrowLeft />
            </span>
            <h3 className=" font-[600]">Mako</h3>
          </div>
          <div className="flex  bg-[#FAFBFD]">
            <span className="border-[0.6px] rounded-l-[10px] border-[#D5D5D5] py-2 px-2 text-[17px]">
              <ImPrinter />
            </span>
            <span className="border-[0.6px] border-[#D5D5D5] py-2 px-2 text-[17px]">
              <IoIosWarning />
            </span>
            <span className="border-[0.6px] rounded-r-[10px] border-[#D5D5D5] py-2 px-2 text-[17px]">
              <FaTrash />
            </span>
          </div>
        </div>

        {/* Chat Design */}
        <div className="bg-white px-4  overflow-y-auto min-h-full py-3  rounded-lg flex flex-col justify-between gap-4">
             {currentMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "You" ? "justify-end" : "justify-start"
                } items-center`}
              >
                {message.sender !== "You" && (
                  <img
                    src={message.image}
                    alt={message.sender}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                )}
                <div
                  className={`${
                    message.sender === "You"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  } px-4 py-2 rounded-lg max-w-xs`}
                >
                  <p className="text-sm">{message.text}</p>
                  <span className="text-xs block mt-1 text-right text-gray-300">
                    {message.time}
                  </span>
                </div>
                {message.sender === "You" && (
                  <img
                    src={message.image}
                    alt={message.sender}
                    className="w-10 h-10 rounded-full ml-3"
                  />
                )}
              </div>
            ))}
 
        

          {/* Message Input */}
        
        </div>
        <div>
          <div className=" shadow-md border pb-2 mb-4  pt-[15px] px-[10px] rounded-b-[10px] flex items-center gap-2">
            <span className="text-[#9D9D9D]">
              <FaMicrophone />
            </span>
            <input
              type="text"
              className=" w-full  border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Type a message..."
            />
            <span className="text-[#9D9D9D]">
              <HiOutlinePaperClip />
            </span>
            <span className="text-[#9D9D9D]">
              <ImFilePicture />
            </span>
            <button className="font-nunito text-[11px] md:text-[12px] leading-[16.37px] flex gap-2 items-center bg-[#0A2EE2] text-white px-2 md:px-5 py-3 rounded-lg">
              <FiSend />
              Send
            </button>
          </div>

           
          </div>
          <div className="flex  justify-end items-center  ">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-l-[4px] ${
                currentPage === 1 ? "border bg-[#D5D5D5] text-[#202224]" : "border bg-[#D5D5D5] text-[#202224]"
              }`}
            >
              <MdKeyboardArrowLeft />
            </button>
            {/* <span className="text-gray-500">
              Page {currentPage} of {totalPages}
            </span> */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-r-[4px]  ${
                currentPage === totalPages ? "border bg-[#D5D5D5] text-[#202224]" : "border bg-[#e9e6e6] text-[#202224]"
              }`}
            >
             <RiArrowRightSLine />
            </button>
        </div>
      </div>
       {/* Pagination */}
      
    </div>
  );
};
