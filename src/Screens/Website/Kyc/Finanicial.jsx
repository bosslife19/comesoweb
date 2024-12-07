import React, { useEffect, useState } from "react";
import axiosClient from "../../../axios-client";

const Financial = ({ handleNext }) => {
  const [selectedBank, setSelectedBank] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [accountNumber, setAccountNumber] = useState('');

  // List of Nigerian banks with their logos
  const banks = [
    { name: "Access Bank", logo: "https://via.placeholder.com/20?text=A" },
    { name: "First Bank", logo: "https://via.placeholder.com/20?text=F" },
    { name: "GT Bank", logo: "https://via.placeholder.com/20?text=G" },
    { name: "UBA", logo: "https://via.placeholder.com/20?text=U" },
    { name: "Zenith Bank", logo: "https://via.placeholder.com/20?text=Z" },
  ];

  const handleBankSelect = (bank) => {
    setSelectedBank(bank.name);
    setIsOpen(false);
    
    const updateBank = async ()=>{
      try {
        const res = await axiosClient.post('/user/update-profile', {bank:selectedBank});
        
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
      const res = await axiosClient.post('/user/update-profile', {accountNumber});
      console.log(res.data)
      
    } catch (error) {
      console.log(error);
    }
    
  }
  updateAccountNumber();
}, [accountNumber])
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
                  <img src={bank.logo} alt={`${bank.name} logo`} className="w-6 h-6" />
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
        placeholder="56765456"
        onChange={(e)=>{
          setAccountNumber(e.target.value);
          
          
        }}
         />
         
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
