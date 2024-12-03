import React from "react";
import { TbDotsVertical } from "react-icons/tb";
import logo from "../../../assets/imglogo.png";
import { CgSoftwareDownload } from 'react-icons/cg';
import { BiEdit, BiUser } from "react-icons/bi";
import {  MdOutlineEmail, MdLockOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";

const ProfileT = () => {
  return (
    <>
    
   
    <div className="md:flex   justify-between gap-8 font-inter ">
      {/* Left Side Form */}
      <div className="md:w-1/2 px-[20px] border py-[20px] bg-[#FFFFFF] rounded-[12px]">
        <form className="space-y-4 ">
          <h2 className="md:text-[20px] font-[600] leading-[24px] mb-2 text-[#1A1A21]">Profile Information</h2>
          <p className="mb-4 font-[400] leading-[23.2px] md:text-[15px] text-[#8C94A6]">
            These are your personal details, they are visible to the public
          </p>

          <div className="flex gap-1 w-full justify-between items-center">
            <div className="flex gap-2">
              <div className="flex relative pr-1 ">
                <img src={logo} className="w-[40px] object-contain h-[40px] rounded-full" />
                <div className="text-[10px] absolute bottom-1 right-0 p-1 rounded-full bg-[#0A2EE2] text-[#fff]">
                  <BiEdit />
                </div>
              </div>

              <div>
                <h3 className="text-[#101928] font-[600] text-[20px] leading-[24px]">Amarachi Okoro</h3>
                <p className="text-[#475467] font-[400] text-[14px] leading-[24px]">amarachi.okoro@example.com</p>
              </div>
            </div>
            <span className="flex justify-end items-end">
              <TbDotsVertical />
            </span>
          </div>
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="w-full p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
              <BiUser />
              <input type="text" id="fullname" className="mt-1 block flex-1 outline-none" placeholder="Enter full name" />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="w-full p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
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
            <label htmlFor="adminType" className="block text-sm font-medium text-gray-700">
              Admin Type
            </label>
            <select
              id="adminType"
              className="mt-1 w-full outline-none p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md"
            >
              <option value="">Select </option>
              <option value="superAdmin">Super Admin</option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
            </select>
          </div>

          <div className="flex justify-between gap-[20px]">
            <button className="flex font-[600] text-[16px] leading-[23.2px] w-[150px] md:w-[220px] h-[33px] text-sm border-[1.5px] border-[#0A2EE2] md:text-[15px] md:h-[43px] bg-[#fff] text-[#0A2EE2] rounded-[8px] items-center gap-2 font-nunito justify-center">
              Cancel
            </button>
            <button className="flex w-[150px] md:w-[220px] h-[33px] text-sm md:text-[15px] md:h-[43px] bg-[#0A2EE2] text-[#fff] rounded-[8px] items-center gap-2 font-nunito justify-center">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* Right Side Form */}
      <div className="md:w-1/2 px-[20px] md:mt-[0px] mt-[15px] h-full border py-[20px] bg-[#FFFFFF] rounded-[12px]">
        <h2 className="text-lg font-semibold mb-4">Update Password</h2>
        <p className="text-[#8C94A6] mb-4 font-inter font-[400] text-[16px] leading-[23.3px]">Enter your current password to make update</p>
        <form className="space-y-4">
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">
              Current Password
            </label>
            <div className="w-full p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
              <MdLockOutline />
              <input
                type="password"
                id="currentPassword"
                className="mt-1 block flex-1 outline-none"
                placeholder="Enter current password"
              />
            </div>
          </div>
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">
              New Password
            </label>
            <div className="w-full p-[13px] flex items-center gap-2 border border-[#D0D5DD] rounded-md">
              <MdLockOutline />
              <input
                type="password"
                id="newPassword"
                className="mt-1 block flex-1 outline-none"
                placeholder="Enter new password"
              />
            </div>
          </div>
          <div className="flex justify-end gap-[20px]">
            
            <button className="flex w-[150px] md:w-[220px] h-[33px] text-sm md:text-[15px] md:h-[43px] bg-[#0A2EE2] text-[#fff] rounded-[8px] items-center gap-2 font-nunito justify-center">
              Update Password
            </button>
          </div>
        </form>
      </div>

      {/* Right below */}
     
    </div>

<div className="md:flex justify-between gap-8 font-inter my-[20px]">

<div className="md:w-1/2 px-[20px] h-full border py-[20px] bg-[#FFFFFF] rounded-[12px]">
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
Company’s Logo
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

{/*  */}

 {/* Right Side Form */}
 <div className="md:w-1/2 px-[20px] h-full border py-[20px] md:mt-[0px] mt-[15px] bg-[#FFFFFF] rounded-[12px]">
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
</>
  );
};

export default ProfileT;
