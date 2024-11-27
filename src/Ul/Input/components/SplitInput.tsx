import React, { useEffect, useRef, useState } from 'react';

interface SplitInputProps {
  length: number;
  value: string;
  onChange: (newValue: string) => void;
  hasError?: boolean;
  errorText?: string;
  errorTimeout?: number;
}

const SplitInput: React.FC<SplitInputProps> = ({
  length,
  value,
  onChange,
  hasError = false,
  errorText,
  errorTimeout = 3000,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));
  const [showError, setShowError] = useState<boolean>(hasError);

  const handleChange = (index: number, newValue: string) => {
    const updatedValue = value.slice(0, index) + newValue + value.slice(index + 1);
    onChange(updatedValue);
    setShowError(false);
  };

  const handleKeyPress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (/^[0-9]$/.test(e.key)) {
      handleChange(index, e.key);

      if (index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    } else if (e.key === 'Backspace') {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        handleChange(index - 1, '');
      } else {
        handleChange(index, '');
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (hasError) {
      const timeoutId = setTimeout(() => {
        setShowError(false);
      }, errorTimeout);

      return () => clearTimeout(timeoutId);
    }
  }, [hasError, errorTimeout]);

  return (
    <div className="flex flex-col">
      <div className="flex">
        {Array.from({ length }, (_, index) => (
          <input
            data-testid={`input-${index}`}
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            className={`border border-[#ACB5BD] focus:outline-none focus:ring-1 focus:ring-[#B99745] focus:border-[#B99745] rounded text-xl text-center w-12 h-12 mr-2 ${showError ? 'border-red' : 'border border-[#ACB5BD]'} `}
            maxLength={1}
            value={value[index] || ''}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyPress(index, e)}
            onPaste={(e) => e.preventDefault()}
            onFocus={() => setShowError(false)}
          />
        ))}
      </div>
      {hasError && showError && <p className="text-red mt-1">{errorText || 'Invalid input'}</p>}
    </div>
  );
};

export default SplitInput;
