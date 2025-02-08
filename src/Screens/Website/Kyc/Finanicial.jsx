import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";
import { RxUpload } from 'react-icons/rx';
import { useDropzone } from "react-dropzone";  
import first from "../../../assets/first-bank.png"
import access from "../../../assets/access.png"
import gtb from "../../../assets/GTBank_logo.svg.png"
import uba from "../../../assets/uba-logo-1CFD25002D-seeklogo.com.png"
import zenith from "../../../assets/Zenith-Bank-Logo.jpg"
import Eco from "../../../assets/ecobank.png"
import axios from "axios";

const Financial = ({ handleNext }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');
  const [accountName, setAccountName] = useState('')
  

  // List of Nigerian banks with their logos
  const[ banks, setBanks] = useState([
    { name: "Access Bank", logo: access },
    { name: "First Bank", logo: first },
    { name: "Guaranty Trust Bank", logo: gtb  },
    { name: "United Bank for Africa", logo: uba },
    { name: "Zenith Bank", logo: zenith },
    {name:'Eco Bank', logo:Eco }
  ])

  useEffect(()=>{
    const getBanks = async()=>{
      const response = await axios.get(
        `https://api.paystack.co/bank?country=ghana&perPage=200`,
        {
          headers: {
            Authorization: `Bearer ${
              import.meta.env.VITE_PAYSTACK_LIVE_SECRET
            }`,
          },
        }
      );
      setBanks(response.data.data);
    }
    getBanks();
  },[]);


  const handleBankSelect = (bank) => {
    setSelectedBank(bank.name);
    setIsOpen(false);
    
    const updateBank = async ()=>{
      try {
       
        const res = await axiosClient.post('/user/update-profile', {bank:selectedBank, accountName});
        
        
      } catch (error) {
        console.log(error);
      }
      
    }
    setTimeout(()=>{
      updateBank();
    }, 3000)
  };
useEffect(()=>{
  const updateAccountNumber = async ()=>{
    try {
      const res = await axiosClient.post('/user/update-profile', {accountNumber, bank:selectedBank});
      
      
    } catch (error) {
      console.log(error);
    }
    
  }
  updateAccountNumber();
}, [accountNumber])
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
    <div className="w-full md:w-[600px]">
      {/* Bank Account Details */}
      <div className="space-y-3 mb-5">
        <span className="font-poppins font-[400] text-[13px] md:text-[16px] leading-[24px] text-[#333333]">
          Bank Account Details And Payment Setup
        </span>
        <div className="relative">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="w-full h-[50px] px-4 pr-8 text-[#333333] font-poppins font-[500] text-[16px] leading-[24px] border border-[#f4f5fa] rounded-md shadow-md bg-white flex items-center justify-between cursor-pointer"
          >
            <span>{selectedBank || "Select a Bank"}</span>
            <span>▼</span>
          </div>
          {isOpen && (
            <ul className="absolute w-full border border-[#f4f5fa] rounded-md shadow-md bg-white z-10">
              {banks.map((bank, index) => (
                <li
                  key={index}
                  onClick={() => handleBankSelect(bank)}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {/* <img src={bank.logo} alt={`${bank.name} logo`} className="w-6 h-6 object-contain" /> */}
                  <span>{bank.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Add Another Pharmacist Profile */}
      <div className="flex items-center rounded-md bg-[#EBEBEE] border border-[#EBEBEE] p-4 mt-6 justify-between text-[#333333] font-[500] font-poppins text-[18px] leading-[27px]">
        <input  type="text"
        className="w-full h-full bg-transparent"
        placeholder="Account number"
        onChange={(e)=>{
          setAccountNumber(e.target.value);
          
          
        }}
         />
        
         
      </div>
      <div className="flex items-center rounded-md bg-[#EBEBEE] border border-[#EBEBEE] p-4 mt-6 justify-between text-[#333333] font-[500] font-poppins text-[18px] leading-[27px]">
        <input  type="text"
        className="w-full h-full bg-transparent"
        placeholder="Account name"
        onChange={(e)=>{
          setAccountName(e.target.value);
          
          
        }}
         />
        
         
      </div>
      <div className='space-y-3 pt-[10px]'>
              <span className='font-poppins font-[400] text-[12px] md:text-[16px] leading-[10px] md:leading-[24px] text-[#333333]'>
                Upload a copy of your Bank Statement
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
 
      <div className="flex justify-center md:justify-end mt-[20px]">
        <button
          onClick={handleNext}
          className="text-[#fff] w-[139px] md:w-[209px] py-2 h-[30px] md:h-[60px] rounded-[10px] bg-[#0A2EE2] font-poppins font-[600] text-[12px] md:text-[20px] leading-[10px] md:leading-[30px] md:mt-[20%]"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Financial;
