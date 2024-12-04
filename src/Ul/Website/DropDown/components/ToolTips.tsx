import React, { ReactNode, useState } from 'react';

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: 'top' | 'bottom';
}

const ToolTips: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div
      className="relative whitespace-nowrap inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div
          className={`absolute bg-gray-800 text-white p-2 rounded ${
            position === 'bottom'
              ? 'top-full left-1/2 transform -translate-x-1/2'
              : 'bottom-full left-1/2 transform -translate-x-1/2'
          }`}
        >
          {position === 'bottom' && (
            <div className="absolute w-2 h-2 bg-black top-[-2px] left-1/2 transform -translate-x-1/2 rotate-45"></div>
          )}
          {position === 'top' && (
            <div className="absolute w-2 h-2 bg-black mb-32  left-1/2 transform -translate-x-1/2 rotate-45"></div>
          )}
          {content}
        </div>
      )}
    </div>
  );
};

export default ToolTips;
