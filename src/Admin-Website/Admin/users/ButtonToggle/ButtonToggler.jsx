import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ButtonToggle = () => {
     
    return (
      <div>
        {/* Button 1 */}
        <button
          onClick={() => navigate("/admin/userBoard")}
          className={`py-[10px] px-[40px] mb-[20px] border rounded-[30px] bg-[#fff] ${
            location.pathname === "/admin/userBoard" ? "border-[#413B89]" : "border-gray-300"
          }`}
        >
          Sent
        </button>
  
        {/* Button 2 */}
        <button
          onClick={() => navigate("/admin/Received")}
          className={`py-[10px] px-[40px] mb-[20px] border rounded-[30px] bg-[#fff] mx-4 ${
            location.pathname === "/admin/Received" ? "border-[#413B89]" : "border-gray-300"
          }`}
        >
          Received
        </button>
      </div>
  );
};

export default ButtonToggle;
