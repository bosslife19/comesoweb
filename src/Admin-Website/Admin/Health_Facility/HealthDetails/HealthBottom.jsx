import  { useState } from 'react';
import HealthDetai from './HealthDetailss';
import PersonalBoard from './PersonalBox/PersonalBoard';
 
const HealthBottom = () => {
  // Default to 1 to make PersonalManagement the active home
  const [activeContent, setActiveContent] = useState(1);

  return (
    <div className=' py-[20px]'>
      {/* Button 1 */}
      <button
        onClick={() => setActiveContent(activeContent === 1 ? null : 1)}  // Toggle content 1
        className={`py-[5px] md:py-[10px] px-[20px] md:px-[40px] mb-[20px] border rounded-[15px] md:rounded-[30px] text-[12px] md:text-[17px] ${
          activeContent === 1 ? 'border border-[#413B89] text-[#222222E5]' : ''
        }`}
      >
        Personal
      </button> 
 
      {/* Button 2 */}
      <button
        onClick={() => setActiveContent(activeContent === 2 ? null : 2)}  // Toggle content 2
        className={`py-[5px] md:py-[10px] px-[20px] md:px-[40px] mb-[20px] border rounded-[15px] md:rounded-[30px] text-[12px] md:text-[17px] ${
          activeContent === 2 ? 'border border-[#413B89] text-[#222222E5]' : ''
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
