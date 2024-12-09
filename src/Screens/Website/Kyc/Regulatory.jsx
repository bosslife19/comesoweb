import React from "react";
import { RxUpload } from "react-icons/rx";
import { useDropzone } from "react-dropzone";  
import axiosClient from "../../../axios-client";

const Regulatory = ({ handleNext }) => {
  
  // Handle the drop event for both upload boxes
  const { getRootProps: getRootPropsFirst, getInputProps: getInputPropsFirst } = useDropzone({
    accept: ".pdf, .jpg, .png", // Define accepted file types
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('fileType', 'proofOfReg');
      
      
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

  const { getRootProps: getRootPropsSecond, getInputProps: getInputPropsSecond } = useDropzone({
    accept: ".pdf, .jpg, .png", // Define accepted file types
    onDrop: async (acceptedFiles) => {
      const formData = new FormData();
      formData.append('file', acceptedFiles[0]);
      formData.append('fileType', 'certOfComp');
      
      try {
          const response = await axiosClient.post('/user/upload-details', formData, {
              headers: {
                  'Content-Type': 'multipart/form-data',
              },
          });

          
         
         
      } catch (error) {
          console.error('File upload failed:', error);
          setFirst(null)
          setSecond(null)
      }
  },
  });

 

  return (
    <div className="lg:mr-[30%]"> 
      {/* First Upload Box */}
      <div className="space-y-3 mb-5">
        <span className="font-poppins font-[400] text-[13px] md:text-[16px] leading-[24px] text-[#333333]">
          Proof of Registration with relevant pharmaceutical company or registration with HERFA
        </span>
        <div
          {...getRootPropsFirst()}
          className="flex justify-start gap-[30px] py-[20px] px-[20px] items-center border-[#dcdbdb] md:h-[117px] rounded-[10px] border-dotted border-[2px] cursor-pointer"
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

      {/* Second Upload Box */}
      <div className="space-y-3">
        <span className="font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]">
          Certificate and compliance with applicable health regulations (e.g., data protection, hygiene)
        </span>
        <div
          {...getRootPropsSecond()}
          className="flex justify-start gap-[30px] py-[20px] px-[20px] items-center border-[#dcdbdb] md:h-[117px] rounded-[10px] border-dotted border-[2px] cursor-pointer"
        >
          <input {...getInputPropsSecond()} />
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

      {/* Next Button */}
      <div className="flex justify-center md:justify-start mt-[20px]">
        <button
           onClick={handleNext}
          className="text-[#fff] w-[139px] md:w-[209px] py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] text-[13px] md:text-[20px] leading-[20px] md:leading-[30px] md:mt-[20%]"
        >
          Next
        </button>
      </div>
      
    </div>
  );
};


export default Regulatory;
