import React, { useState } from 'react';
import UsersDetails from './UsersDetails';
import PersonalManagement from '../Management/personalManagement';

const UserBottom = () => {
  // Default to 1 to make PersonalManagement the active home
  const [activeContent, setActiveContent] = useState(1);

  return (
    <div className=''>
      {/* Button 1 */}
      <button
        onClick={() => setActiveContent(activeContent === 1 ? null : 1)}  // Toggle content 1
        className={`py-[10px] px-[40px] my-[20px] border rounded-[30px] bg-[#fff] ${
          activeContent === 1 ?  'border-[#413B89] text-[#212121]' : ''
        }`}
      > 
        Personal
      </button>

      {/* Button 2 */}
      <button
        onClick={() => setActiveContent(activeContent === 2 ? null : 2)}  // Toggle content 2
        className={`py-[10px] mx-4 px-[40px] my-[20px] border rounded-[30px] bg-[#fff] ${
          activeContent === 2 ? 'border-[#413B89] text-[#212121]' : ''
        }`}
      >
        Transactions
      </button>

      {/* Content for Button 1 */}
      {activeContent === 1 && (
        <div className="mt-3">
          <PersonalManagement />
        </div>
      )}

      {/* Content for Button 2 */}
      {activeContent === 2 && (
        <div className="mt-3">
          <UsersDetails />
        </div>
      )}
    </div>
  );
};

export default UserBottom;
