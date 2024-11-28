import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LeftBoard from "../../components/Inbox/Leftside/LeftBoard";
import Search from "../../Ul/Input/components/Search";
import { MdKeyboardArrowLeft, MdMoveToInbox } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { FaMicrophone, FaTrash } from "react-icons/fa";
import logo from "../../assets/imglogo.png";
import { HiOutlinePaperClip } from "react-icons/hi";
import { ImFilePicture } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import { RiArrowRightSLine } from "react-icons/ri";

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
    <div className="md:flex md:justify-between">
      {/* Sidebar */}
      <div className="bg-gray-100 p-5">
        <LeftBoard onSelect={(item) => setSelectedItem(item)} />
      </div>

      {/* Content */}
      <div className="flex-1 mt-[4%] rounded-[5px] bg-[#fff] items-center justify-center">
        {/* Header */}
        <div className="pt-4 border-b pb-[20px] px-4 flex items-center justify-between mb-[10px] md:mb-[30px]">
          <div className="flex items-center gap-4">
            <span onClick={() => navigate(-1)} className="bg-[#f5f5f5] text-[20px] rounded-[10px] p-2">
              <MdKeyboardArrowLeft />
            </span>
            <h3>Mako</h3>
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

        {/* Chat Design */}
        <div className="bg-white min-h-screen p-5 rounded-lg shadow-md flex flex-col justify-between gap-4">
          <div className="overflow-y-auto max-h-full space-y-3">
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
          </div>

        

          {/* Message Input */}
          <div>
          <div className="mt-4 mb-4 flex items-center gap-2">
            <span className="text-[#9D9D9D]">
              <FaMicrophone />
            </span>
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg p-2 focus:outline-none"
              placeholder="Type a message..."
            />
            <span className="text-[#9D9D9D]">
              <HiOutlinePaperClip />
            </span>
            <span className="text-[#9D9D9D]">
              <ImFilePicture />
            </span>
            <button className="font-nunito text-[12px] leading-[16.37px] flex gap-2 items-center bg-[#0A2EE2] text-white px-5 py-3 rounded-lg">
              <FiSend />
              Send
            </button>
          </div>

            {/* Pagination */}
            <div className="flex justify-end items-center  ">
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
        </div>
      </div>
    </div>
  );
};
