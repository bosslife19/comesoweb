import React, { useState } from "react";
 import { RxUpload } from "react-icons/rx";
import { useDropzone } from "react-dropzone";
import "../../../styles/Website/overflow_hidden.css"; // Assuming the CSS file for truncation is imported

const Operational = ({ handleNext }) => {
  // Sample messages array (you can replace this with actual data)
  const messages = [
    { id: 1, text: "Delivery Service offering (Optional but Advantageous)" },
    { id: 2, text: "Transparent Price List for Services and Medication" },
  ];

  const [checkedStates, setCheckedStates] = useState(
    messages.reduce((acc, message) => {
      acc[message.id] = false; // Initialize all as unchecked
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const { getRootProps: getRootPropsFirst, getInputProps: getInputPropsFirst } =
    useDropzone({
      accept: ".pdf, .jpg, .png", // Define accepted file types
      onDrop: async (acceptedFiles) => {
        const formData = new FormData();
        formData.append('file', acceptedFiles[0]);
        formData.append('fileType', 'proofOfLoc');
        
        
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
    <div className="lg:mr-[30%]">
      {messages.map((message) => (
        <div
          key={message.id}
          className="flex items-center rounded-md shadow-md border border-[#f4f5fa] p-2 md:p-5 mt-6 justify-between text-[#333333] font-[500] font-poppins text-[12px] md:text-[18px] leading-[27px]"
        >
          <span className="flex items-center gap-[20px] md:gap-[15px]">
            <input
              type="checkbox"
              id={`checkbox-${message.id}`}
              className="custom-checkbox-inputs"
              checked={checkedStates[message.id]}
              onChange={() => handleCheckboxChange(message.id)}
            />
            <label
              htmlFor={`checkbox-${message.id}`}
              className="custom-checkbox-labels"
            ></label>
            {message.text}
          </span>
        </div>
      ))}

      {/* Certificate and compliance */}
      <div className="space-y-3 pt-[30px]">
        <span className="font-poppins font-[400] text-[12px] md:text-[16px] leading-[24px] text-[#333333]">
          Proof of Physical Location (Photo, video, or Google Maps Verification)
        </span>
        <div
          {...getRootPropsFirst()}
          className="flex justify-start gap-[30px] md:py-[20px] px-[20px] items-center border-[#dcdbdb] h-[80px] md:h-[117px] rounded-[10px] border-dotted border-[2px] cursor-pointer"
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

      {/* Next Button */}
      <div className="flex justify-center md:justify-end">
        <button
          onClick={handleNext}
          className="text-[#fff] w-[139px] md:w-[209px] py-2 md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] text-[12px] md:text-[20px]   md:leading-[30px] mt-[30px] md:mt-[20%]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Operational;
