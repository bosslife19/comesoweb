import React from 'react';

interface ToggleButtonProps {
  isChecked: boolean;
  onToggle: () => void;
  onText: string;
  offText: string;
  disabled?: boolean
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isChecked, onToggle, onText, offText, disabled }) => {
  function handleToggle () {
    if (!disabled) {
        onToggle();
      }
  }

  return (
    <label htmlFor="toggle" className={`flex items-center cursor-pointer ${
        disabled ? ' cursor-not-allowed' : ''
      }` }
      
      >
      <div className="relative">
        <input
          type="checkbox"
          id="toggle"
          className="sr-only text-3xl"
          checked={isChecked}
          onChange={handleToggle}
          disabled={disabled}
        />

        <div
          className={`block  w-14 border h-8 rounded-full ${isChecked ? 'bg-secondary' : 'bg-white'} ${
            disabled ? ' cursor-not-allowed bg-gray-500' : ''
          }`}
        />
        <div
          className={`dot absolute left-1 top-1  w-6 h-6 rounded-full transition ${
            isChecked ? 'transform translate-x-6 bg-white' : 'bg-gray4'
            } ${disabled ? ' bg-gray4 cursor-not-allowed' : 'bg-gray4'}`}
        />
      </div>
      <div className={`ml-3 font-medium text-base ${disabled ? 'text-[#7B7A77]' : 'text-black'}`}>
        {isChecked ? onText : offText}
      </div>
    </label>
  );
};

export default ToggleButton;
