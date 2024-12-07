import React, { useEffect, useState } from 'react';
import { TbArrowDownCircle, TbChevronDown, TbChevronUp, TbDotsVertical, TbUserPlus } from "react-icons/tb";
import { RxUpload } from 'react-icons/rx';
import { useDropzone } from "react-dropzone";  
import axiosClient from '../../../axios-client';

const Technical = ({ handleNext }) => {
  const [profiles, setProfiles] = useState([{}]); // Initial profile is empty to begin with.
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/close state
  const [selectedValue, setSelectedValue] = useState(''); // Track selected value
  const [name, setName] = useState('')
  const [jobTitle, setJobTitle] = useState("")
 

  // Function to handle adding a new profile at the top, ensuring there are at least three profiles
  const addNewProfile = () => {
    if (profiles.length < 3) {
      setProfiles([{ name: '', jobTitle: '' }, ...profiles]); // Add a new empty profile to the top
    }
  };

  // Function to handle the change in the selected option
  const handleSelection = (value) => {
    setSelectedValue(value); // Update selected value
    setIsOpen(false); // Close dropdown after selection
  };
 useEffect(()=>{
  const updateJobTitle = async ()=>{
    try {
      const res = await axiosClient.post('/user/update-profile', {jobTitle});
      
    } catch (error) {
      console.log(error);
    }
    
  }
  updateJobTitle();
 }, [jobTitle]);
  
useEffect(()=>{
  const updateName = async ()=>{
    try {
      const res = await axiosClient.post('/user/update-profile', {name});
      
    } catch (error) {
      console.log(error);
    }
    
  }
  updateName();
}, [name])

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { getRootProps: getRootPropsFirst, getInputProps: getInputPropsFirst } = useDropzone({
    accept: ".pdf, .jpg, .png", // Define accepted file types
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('fileType', 'healthComp');
      
      
      try {
          const response = await axiosClient.post('/user/upload-details', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });
         
      } catch (error) {
          console.error('File upload failed:', error);
          
      }
  },
  });

 
  return (
    <div className='lg:mr-[30%] '>
      <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]'>
        Availability of licensed pharmacist or qualified medical professional
      </span>
      <div className='px-[20px] py-[20px] shadow-md rounded-[10px]'>
        {profiles.map((profile, index) => (
          <div key={index} className='mt-2'>
            {/* Pharmacist Profile Section */}
            <div className='flex items-center justify-between text-[#333333] font-[500] font-poppins text-[18px] leading-[27px]'>
              <span className='flex items-center gap-[10px]'>
                <TbUserPlus />
                Pharmacist Profile
              </span>
              <span className='bg-[#F3F3F3] rounded-full p-3'><TbDotsVertical /></span>
            </div>

            {/* Dynamic Profile Form */}
            <div className='flex flex-col space-y-2 mt-2'>
              <label className='font-[400] text-[#333333] font-poppins text-[16px] leading-[24px]'>
                Practitioner’s name
              </label>
              <input
                type='text'
                name='name'
                value={name}
                 className='pl-6 font-poppins font-[400]  text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[49px]'
                placeholder='Type here'
                onChange={(e)=>{
                  setName(e.target.value);
                  
                }}
              />

              <label className='font-[400] text-[#333333] font-poppins  text-[12px] md:text-[16px] leading-[10px] md:leading-[24px]'>
                Job Title
              </label>
              <input
                type='text'
                name='jobTitle'
                value={jobTitle}
                 className='pl-6 font-poppins font-[400]  text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] border text-[#33333380] rounded-[5px] h-[49px]'
                placeholder='Type here'
                onChange={(e)=>{
                  setJobTitle(e.target.value);
                  
                }}
              />

              
            </div>

            {/* Certificate and compliance */}
            <div className='space-y-3 pt-[10px]'>
              <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] text-[#333333]'>
                Certificate and compliance with applicable health regulations (e.g, data protection, hygiene)
              </span>
              <div
          {...getRootPropsFirst()}
          className="flex justify-start gap-[30px] py-[10px] md:py-[20px] px-[20px] items-center border-[#dcdbdb] md:h-[117px] rounded-[10px] border-dotted border-[2px] cursor-pointer"
        >
          <input {...getInputPropsFirst()} />
          <RxUpload className="text-[#33333399] text-[11px] md:text-[24px]" />
          <div className="m-auto">
            <span className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px]">
              Drag and drop here or Click to upload
            </span>
            <p className="text-[#33333399] font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px]">
              (PDF/JPG/PNG)
            </p>
          </div>
        </div>
            </div>
          </div>
        ))}
      </div>

      {/* Button to Add Another Profile */}
      <div
        className='flex items-center rounded-md shadow-md border border-[#f4f5fa] p-3 mt-6 justify-between text-[#333333] font-[500] font-poppins text-[18px] leading-[27px]'
        onClick={addNewProfile} // Add new profile on click
        style={{ cursor: profiles.length < 3 ? 'pointer' : 'not-allowed', opacity: profiles.length >= 3 ? 0.5 : 1 }} // Disable button if there are 3 profiles
      >
        <span className='flex items-center gap-[10px] text-[12px] md:text-[17px]'>
          <TbUserPlus />
          Add Another Pharmacist Profile
        </span>
      </div>

      {/* Additional Information Section */}
      <div  >
       
      
      <div className="relative w-full mb-[32%] md:mb-[0px]">
      {/* Custom Dropdown */}
      <div
        className="w-full flex items-center shadow-md gap-[10px] border-[#f4f5fa] appearance-none p-3 mt-6 font-poppins text-[18px] leading-[27px] text-[#33333380] rounded-[5px] h-[49px] border cursor-pointer"
        onClick={toggleDropdown} // Open/close the dropdown on click
      >
        <span className="flex-grow flex gap-5 items-center text-[#212121] text-[12px] md:text-[17px]">
        <TbUserPlus />  {selectedValue || 'Minimum Inventory of Medical Supplies'} {/* Display selected value */}
        </span>

        {/* Arrow Icon */}
        <div className="text-[#33333380] text-[12px] md:text-[20px]">
          {isOpen ? <TbChevronUp /> : <TbChevronDown />} {/* Toggle arrow */}
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute flex flex-col py-2 top-[calc(100%+2px)] left-0 w-full bg-white shadow-lg rounded-[5px] border">
          {/* Selectable Menu Items */}
          <div
            className="px-3 py-2 text-[12px] md:text-[16px] text-[#333333] cursor-pointer hover:bg-[#f4f5fa]"
            onClick={() => handleSelection('Low')}
          >
            Low
          </div>
          <div
            className="px-3 py-2 text-[12px] md:text-[16px] text-[#333333] cursor-pointer hover:bg-[#f4f5fa]"
            onClick={() => handleSelection('Medium')}
          >
            Medium
          </div>
          <div
            className="px-3 py-2 text-[12px] md:text-[16px] text-[#333333] cursor-pointer hover:bg-[#f4f5fa]"
            onClick={() => handleSelection('High')}
          >
            High
          </div>
        </div>
      )}
    </div>
    </div>

      {/* Next Button */}
      <div className='flex justify-center md:justify-end mt-4'>
        <button
                  // disabled={profiles.length < 3}  
        onClick={handleNext}
          className='text-[#fff] w-[139px] md:w-[209px] py-2 h-[40px] md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] text-[12px] md:text-[20px] leading-[10px] md:leading-[30px] md:mt-[20%]'
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Technical;
