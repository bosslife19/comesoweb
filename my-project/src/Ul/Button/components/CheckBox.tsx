import React from 'react';

interface CheckBoxProps {
  label: string;
  checked: boolean;
  disabled: boolean;
  className?: string
  onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange, disabled, className }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  const checkboxClasses = `
    h-5 w-5  cursor-pointer 
    ${disabled ? ' cursor-not-allowed bg-gray5' : ''}
    ${checked ? 'accent-[#091E42]   focus:accent-[#091E42]' : 'border-[#091E42]'}
  `;


  return (
    <div className={`flex items-center ${
        disabled ? '  cursor-not-allowed' : ''
      }`}>
      <input
        type="checkbox"
        disabled={disabled}
        role="checkbox"
        className={checkboxClasses}
        checked={checked}
        onChange={handleChange}
      />
      <label className={`ml-3 whitespace-nowrap ${className} text-base ${disabled ? 'text-gray' : 'text-black'}`}>{label}</label>
    </div>
  );
};

export default CheckBox;
