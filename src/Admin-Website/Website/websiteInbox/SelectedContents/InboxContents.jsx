 import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdMoveToInbox } from "react-icons/md";
 import { CiStar } from "react-icons/ci";   
import "../../../../styles/Website/overflow_hidden.css"; // Assuming the CSS file for truncation is imported
import Search from "../../../../Ul/Website/Input/components/Search";

export const InboxContent = () => {
  const messages = [
    { id: 1, name: "John Doe", time: "10:30 AM", label: "Primary", paragraph: "Our Bachelor of Commerce program is ACBSP-accredited." },
    { id: 2, name: "Jane Smith", time: "11:00 AM", label: "Work", paragraph: "Get Best Advertiser In Your Side Pocket" },
    { id: 3, name: "Alice Johnson", time: "12:15 PM", label: "Friends", paragraph: "Vacation Home" },
    { id: 4, name: "Bob Williams", time: "1:45 PM", paragraph: "Some text here that will be truncated." },
  ];
 
  
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
            className={`md:flex items-center p-3 shadow-sm border-b border-[#f3f3f3]  
            }`}
          >
            <div className="flex items-center gap-1 md:gap-3 md:w-full">
              
             
              <Link  className="flex justify-between items-center w-full">
                <div className="flex items-center  gap-3">
                  <span className="text-[#202224] font-medium font-nunito text-[14px]">{message.name}</span>
                  <div className="flex justify-center items-center">
                  {message.label && (
                    <div className=' text-[12px] leading-[16.37px]  md:mx-3 items-center  py-2 font-nunito font-[600'>
                      {message.label}
                    </div>
                  )}
                  </div>
                 <p className=" text-[#202224] text-[14px] font-nunito leading-[19.1px] whitespace-nowrap overflow-hidden text-ellipsis max-w-[80px] md:max-w-[200px]">
                    {message.paragraph}</p>
                </div>
                
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
