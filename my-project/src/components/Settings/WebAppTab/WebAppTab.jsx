import React  from "react";
import { BiEdit, BiUser } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { TbDotsVertical } from "react-icons/tb";
import logo from "../../../assets/imglogo.png";

const WebAppTab = () => {
 
 
  return (
    <div className="lg:flex md:justify-between  gap-[20px] h-screen  max-2xl:h-ful  ">

    <div className=" md:max-w-[600px] flex-wrap w-full h-[560px] px-[20px] border py-[20px] bg-[#FFFFFF] rounded-[12px]">
        <form className="space-y-4 ">
          <h2 className="md:text-[20px] text-[16px] font-[600] md:leading-[24px] mb-2 text-[#1A1A21]">Contact Us</h2>
          <p className="mb-4 font-[400] md:leading-[23.2px] text-[12px] md:text-[15px] text-[#8C94A6]">
          These are the avenues you can reach out to us
          </p>

          
          <div>
            <label htmlFor="fullname" className="block text-[12px] py-1 md:text-[14px] font-medium text-gray-700">
            Company Name
            </label>
            <div className="w-full  p-[5px] md:p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
              <BiUser />
              <input type="text" id="fullname" className="mt-1 block flex-1 outline-none" placeholder="Enter full name" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-[12px] py-1 md:text-[14px] font-medium text-gray-700">
              Email
            </label>
            <div className="w-full  p-[5px] md:p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
              <MdOutlineEmail />
              <input
                type="email"
                id="email"
                className="mt-1 block flex-1 outline-none"
                placeholder="Enter email address"
              />
            </div>
          </div>
         <div>
         <label className="block text-[12px] py-1 md:text-[14px] font-medium text-gray-700">Enter Your Complain</label>
          <textarea placeholder="Type your message here"  className="border w-full h-[120px] resize-none p-2">

          </textarea>
         </div>

          <div className="flex justify-between gap-[20px]">
            <button className="flex font-[600] md:text-[15px] text-[12px] md:leading-[23.2px] w-[150px] md:w-[220px] h-[33px] border-[1.5px] border-[#0A2EE2]  md:h-[43px] bg-[#fff] text-[#0A2EE2] rounded-[8px] items-center gap-2 font-nunito justify-center">
              Cancel
            </button>
            <button className="flex  w-full h-[33px] text-[12px]   md:text-[15px] md:h-[43px] bg-[#0A2EE2] text-[#fff] rounded-[8px] items-center gap-2 font-nunito justify-center">
              Save Changes
            </button>
          </div>
        </form>
      </div>
      </div>
  );
};

export default WebAppTab;
