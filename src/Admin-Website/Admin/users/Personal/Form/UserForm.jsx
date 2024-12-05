import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';
import { MdOutlineMail } from 'react-icons/md';

const UserForm = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  // Handle input changes
  const handleChange = (e) => {
     console.log("data");
     
  };

  // Handle form submission
  const handleSubmit = (e) => {
    console.log("data");
  };

  return (
    <div className="w-full bg-[#fff] md:w-[342px] font-inter p-5 border rounded-lg shadow">
       <form onSubmit={handleSubmit} className="space-y-7">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
          </label>
          <div className='flex items-center w-full   px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'>
            <FaRegUser className=''/>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full outline-none ml-2 h-[40px] bg-transparent"
            required
          />
          </div>
        </div>
         {/* Phone Number Input */}
        <div>
          <label htmlFor="phone" className="mb-1   block text-sm font-medium text-gray-700">
          Phone Number/ID
          </label>

         <div className='flex items-center w-full   px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'>
         <LuPhone/>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="w-full outline-none ml-2 h-[40px]"
            required
          />
         </div>
        </div>
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="mb-1  block text-sm font-medium text-gray-700">
            Email
          </label>

          <div className='flex items-center w-full    px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300'>
          <MdOutlineMail/>
         
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full outline-none ml-2 h-[40px]"
            required
          />
           </div>
        </div>

       

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full px-4 py-3 bg-[#0A2EE2] text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Save Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
