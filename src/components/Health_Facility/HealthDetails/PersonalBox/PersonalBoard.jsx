import React from 'react';
import { CgSoftwareDownload } from 'react-icons/cg';
import { CiUser } from 'react-icons/ci';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineEmail } from 'react-icons/md';
import { TfiLocationPin } from 'react-icons/tfi';

const PersonalBoard = () => {
  return (
    <div className="md:grid grid-cols-2 gap-4 p-2 font-inter">
      {/* Top-left input */}
      <div className="flex flex-col bg-[#fff] shadow-md p-4 md:w-[498px] md:h-[487px] rounded-[12px]">
      <label htmlFor="topLeft" className="my-2 font-[500] text-[14px] leading-[20.3px] ">
          Company Name
        </label>
       <div className='flex p-2 border md:w-[470px] md:h-[56px] rounded-[8px] items-center gap-2'>
       <CiUser />
        <input
          type="text"
          id="topLeft"
          placeholder="Wyre Tech "
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px] "
        />
       </div>
         <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Phone Number/ID
        </label>

       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex items-center  gap-2'>
       <LuPhone />
        <input
          type="number"
          id="topLeft"
          placeholder="0 913 234 2345"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
        <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Email
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       <MdOutlineEmail/>
        <input
          type="email"
          id="topLeft"
          placeholder="Enterfrancis@gmail.com"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
       <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Company Address
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       <TfiLocationPin />
        <input
          type="text"
          id="topLeft"
          placeholder="No 15 Avenue roa, Behind Allianz Arena Munich"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
         <button className='bg-[#0A2EE2] w-full my-2 py-2 md:h-[55px] rounded-[8px] text-white'>Save Changes</button>
       </div>

      {/* Top-right input */}
      <div className="flex my-4 flex-col bg-[#fff] shadow-md p-4 md:w-[498px] md:h-[387px] rounded-[12px]">
      <label htmlFor="topLeft" className="my-2 font-[500] text-[14px] leading-[20.3px] ">
      Account Number
        </label>
       <div className='flex p-2 border md:w-[470px] md:h-[56px] rounded-[8px] items-center gap-2'>
        
        <input
          type="number"
          id="topLeft"
          placeholder="644345664554"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px] "
        />
       </div>
         <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Account Name
        </label>

       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex items-center  gap-2'>
        {/*  */}
        <input
          type="number"
          id="topLeft"
          placeholder="0 913 234 2345"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
        <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Bank
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       {/*  */}
        <input
          type="text"
          id="topLeft"
          placeholder="Enterfrancis@gmail.com"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
       
         <button className='bg-[#0A2EE2] w-full my-2 py-2 md:py-0 md:h-[55px] rounded-[8px] text-white'>Save Changes</button>
       </div>

      {/* Below top-left input */}
      <div className="flex my-4 flex-col bg-[#fff] shadow-md p-4 md:w-[498px] md:h-[100%] rounded-[12px]">
        <h3 className='text-[#1A1A21] font-[600] text-[20px] leading-[24px] font-inter pb-2 '>Verification Documents</h3>
        <p className='text-[#8C94A6] font-[400] text-[16px] leading-[23.2px] py-1 tracking-[0.5px]'>View & edit your verification documents</p>
      <label htmlFor="topLeft" className="my-2 font-[500] text-[14px] leading-[20.3px] ">
      HERFA Certification
        </label>
       <div className='flex p-2 border md:w-[470px] md:h-[56px] rounded-[8px] items-center gap-2'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="JPEG/PDF"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px] "
        />
       </div>
       <label htmlFor="topLeft" className="my-2 font-[500] text-[14px] leading-[20.3px] ">
       Certificate of Compliance
        </label>
       <div className='flex p-2 border md:w-[470px] md:h-[56px] rounded-[8px] items-center gap-2'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="JPEG/PDF"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px] "
        />
       </div>
         <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Pictures of Store/Facility or Google Map
        </label>

       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex items-center  gap-2'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="JPEG/PDF"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
        <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
        Registration Document
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="JPEG/PDF"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
       <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
         Company's Logo
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="Enter New Password"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
       <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
       Company’s Certification Document
        </label>
       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex gap-2 items-center'>
       <span className='p-1 text-[] border-r'>
        <CgSoftwareDownload/>
       </span>
        <input
          type="file"
          id="topLeft"
          placeholder="Enter New Password"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
       
         <button className='bg-[#0A2EE2] w-full my-2 md:py-0 py-2  md:h-[55px] rounded-[8px] text-white'>Save Changes</button>
       </div>

      {/* Below top-right input */}
      <div className="my-4 flex flex-col bg-[#fff] shadow-md p-4 md:w-[498px] md:h-[347px] rounded-[12px]">
      <h3 className='text-[#1A1A21] font-[600] text-[20px] leading-[24px] font-inter pb-2 '>Our Pharmacists & their certifications</h3>
        <p className='text-[#8C94A6] font-[400] text-[16px] leading-[23.2px] py-1 tracking-[0.5px]'>View & edit your verification documents</p>
      <label htmlFor="topLeft" className="my-2 font-[500] text-[14px] leading-[20.3px] ">
           Name
        </label>
       <div className='flex p-2 border md:w-[470px] md:h-[56px] rounded-[8px] items-center gap-2'>
       <CiUser />
        <input
          type="text"
          id="topLeft"
          placeholder="Adetan  "
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px] "
        />
       </div>
         <label htmlFor="topLeft"className="my-2 font-[500] text-[14px] leading-[20.3px] ">
        Certificate
        </label>

       <div className='p-2 border md:w-[470px] md:h-[56px] rounded-[8px] flex items-center  gap-2'>
       <LuPhone />
        <input
          type="text"
          id="topLeft"
          placeholder="JPEG/PDF"
          className=" bg-transparent w-full outline-none font-[400] text-[11px] py-1 md:text-[13px] leading-[20.3px]"
        />
       </div>
      
        <div className='justify-end flex pt-2'>
        <button className='bg-[#0A2EE2]   justify-center items-center w-[200px] flex my-2 md:py-1 py-3 md:h-[55px] rounded-[8px] text-white'>Save Changes</button>
        </div>
       </div>
    </div>
  );
};

export default PersonalBoard;
