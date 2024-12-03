import React, { useState } from "react";

const WebAppTab = () => {
  const [toggles, setToggles] = useState([
    false, // State for first toggle
    false, // State for second toggle
    false, // State for third toggle
  ]);

  const handleToggle = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  const options = [
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    {
      label: "Approve Users",
      description: "Get involved in our beta testing program or participate in paid product user research",
    },
    
  ];

  return (
    <div className="md:p-6 md:w-[459px]">
       <div className="space-y-4 mb-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4  rounded-lg  gap-2 shadow-sm"
          >
            <div>
              <h3 className="text-base font-medium text-gray-800">
                {option.label}
              </h3>
              <p className="text-sm text-gray-600">{option.description}</p>
            </div>
            <button
              onClick={() => handleToggle(index)}
              className={`w-12 h-6 flex items-center rounded-full p-1 ${
                toggles[index] ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transform duration-200 ${
                  toggles[index] ? "translate-x-6" : ""
                }`}
              ></div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebAppTab;
