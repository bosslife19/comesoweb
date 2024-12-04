import React, { useState } from 'react';
import HealthDetai from './HealthDetailss';
import PersonalBoard from './PersonalBox/PersonalBoard';
 
const HealthBottom = () => {
  // Default to 1 to make PersonalManagement the active home
  const [activeContent, setActiveContent] = useState(1);

  return (
    <div className=''>
      {/* Button 1 */}
      <button
        onClick={() => setActiveContent(activeContent === 1 ? null : 1)}  // Toggle content 1
        className={`py-[10px] px-[40px] my-[20px] border rounded-[30px] ${
          activeContent === 1 ? 'bg-blue-500 text-white' : ''
        }`}
      >
        Personal
      </button> 
 
      {/* Button 2 */}
      <button
        onClick={() => setActiveContent(activeContent === 2 ? null : 2)}  // Toggle content 2
        className={`py-[10px] mx-4 px-[40px] my-[20px] border rounded-[30px] ${
          activeContent === 2 ? 'border border-blue-500 text-[#000]' : ''
        }`}
      >
        Transactions
      </button>

      {/* Content for Button 1 */}
      {activeContent === 1 && (
        <div className="mt-3">
          <PersonalBoard />
        </div>
      )}

      {/* Content for Button 2 */}
      {activeContent === 2 && (
        <div className="mt-3">
          <HealthDetai />
        </div>
      )}
    </div>
  );
};

export default HealthBottom;
