import React from 'react';
import CreatableSelect from 'react-select/creatable';

interface CustomAriaLiveProps {
  label: string;
  options: { label: string; value: string }[];
  onValueChange: (selectedValue: string | null) => void;
  placeholder: string | undefined | null;
}

const customStyles = {
  // You can customize the styles for different parts of the select
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: (provided: any) => ({
    ...provided,
    // Add your styles here
    cursor: 'pointer',
    color: '#FF9002',

    // Example: To add padding
    padding: '1px',
  }),
  // Add more custom styles if needed
};

const SelectDropdown: React.FC<CustomAriaLiveProps> = ({
  label,
  options,
  onValueChange,
  placeholder,
}) => {
  // ... rest of your component

  const handleChange = (
    selectedOption: { label: string; value: string } | null
  ) => {
    if (selectedOption) {
      onValueChange(selectedOption.value);
    } else {
      onValueChange(null);
    }
  };

  return (
    <div>
      <label htmlFor="aria-example-input">{label}</label>
      <CreatableSelect
        inputId="aria-example-input"
        name="aria-live-color"
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
        styles={customStyles}
        // You can also use classNamePrefix to add a prefix to all of react-select's classes
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SelectDropdown;
