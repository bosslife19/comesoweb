import React from 'react';

interface RadioButtonProps {
  label: string;
  value: string;
  checked: boolean;
  disabled: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, value, checked, onChange, disabled }) => {
  const handleChange = () => {
    onChange(value);
  };

  

  return (
    <div className={`flex items-center ${
        disabled ? ' cursor-not-allowed' : ''
      }`}>
      <input
        type="radio"
        disabled={disabled}
        className={`h-5 form-radio text-white cursor-pointer w-5 ${disabled ? 'cursor-not-allowed bg-gray ' : 'accent-[#091E42] focus:accent-[#091E42]'
          }`}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      <label className="ml-2 text-[#7B7A77]">{label}</label>
    </div>
  );
};

export default RadioButton;
