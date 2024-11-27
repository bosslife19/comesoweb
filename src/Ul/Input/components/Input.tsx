import React, { useState, forwardRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { BiInfoCircle } from "react-icons/bi";

interface InputProps {
    label?: string;
    name: string;
    type: string;
    size?: "small" | "x-small" | "medium" | "big" | "large";
    full?: boolean;
    defaultValue?: string;
    value?: string | number;
    placeholder?: string;
    disabled?: boolean;
    iconLeft?: boolean;
    iconColor?: string;
    infoMessage?: string;
    leftIcon?: React.ComponentType;
    required?: boolean;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = forwardRef((props) => {
    const {
        label,
        name,
        type,
        size = "medium",
        full = false,
        defaultValue = "",
        value,
        placeholder,
        disabled = false,
         iconColor = "gray",
        infoMessage,
        leftIcon: LeftIcon,
        required = true,
        onChange,
    } = props;

    const [inputType, setInputType] = useState(type);
    const [isHidden, setIsHidden] = useState(type === "password");

    const styleTypes = {
        input: "w-full text-black text-md border border-[#6B788E] rounded-lg focus:outline-none hover:shadow focus:ring-[#004AAD] focus:border-[#004AAD] placeholder-[#ACB5BD] transition",
    };

    const sizes = {
        small: "p-3",
        "x-small": "p-1",
        medium: "py-3 px-3",
        big: "py-4 px-5",
        large: "py-6 px-10 text-xl sm:text-2xl",
    };

    const classed = `${sizes[size] ?? sizes["medium"]} ${styleTypes["input"]} ${
        full ? "w-full" : ""
    }`;

    const handleIconClick = () => {
        if (type !== "password") return;

        setIsHidden(!isHidden);
        setInputType(isHidden ? "text" : "password");
    };

    return (
        <div className={full ? "w-full" : ""}>
            <div className="text-left">
                {label && (
                    <label htmlFor={name} className="text-gray text-md">
                        {label}
                    </label>
                )}
                <div className="relative py-1">
                    {LeftIcon && (
                        <div className="absolute text-lg text-gray top-4 left-3">
                            <LeftIcon />
                        </div>
                    )}
                    <input
                        className={`${classed} ${
                            LeftIcon ? "pl-12" : ""
                        } inline-block w-full text-black px-2 ${
                            disabled ? "cursor-not-allowed opacity-50" : ""
                        }`}
                        type={inputType}
                        value={value}
                        id={name}
                        placeholder={placeholder}
                        onChange={(e) => onChange?.(e.target.value)}
                        disabled={disabled}
                        required={required}
                        defaultValue={defaultValue}
                    />
                    {infoMessage && (
                        <p className="text-sm font-normal mt-2 flex items-center gap-1 text-[#7B7A77]">
                            <BiInfoCircle size={20} />
                            {infoMessage}
                        </p>
                    )}
                    {type === "password" && (
                        <div
                            onClick={handleIconClick}
                            className={`absolute text-gray top-4 bottom-0 my-auto right-5 cursor-pointer`}
                        >
                            {isHidden ? (
                                <HiEyeOff size={22} color={iconColor} />
                            ) : (
                                <HiEye size={22} color={iconColor} />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
});

export default Input;
