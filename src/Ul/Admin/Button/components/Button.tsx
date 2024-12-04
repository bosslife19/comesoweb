/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useState, useEffect, useRef, ReactNode } from "react";
import SpinnerMini from "../../SpinnerMini";

interface ButtonProps {
    children: ReactNode;
    type: "alternate" | "primary" | "secondary" | "red";
    size: "small" | "medium" | "big";
    loading?: boolean; 
    round?: boolean;
    full?: boolean;
    disabled?: boolean;
    icon?: React.ComponentType;
    iconOnly?: boolean;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    iconLeft?: React.ComponentType; // New prop for left icon
    iconRight?: React.ComponentType;
}

const Button: React.FC<ButtonProps> = props => {
    const [base] = useState("rounded-lg");

    const sizes = {
        small: "py-2 px-4",
        medium: "py-3 px-10",
        big: "py-4 px-5",
    };

    const types = {
        alternate: {
            __class:
                "border border-blue text-md rounded-lg bg-white text-blue font-normal",
            text: "#000",
        },
        red: {
            __class:
                "border border-red text-md rounded-lg bg-white text-red font-normal",
            text: "#000",
        },
        primary: {
            __class: "bg-blue text-white text-md rounded-lg font-normal",
            text: "#fff",
        },
        secondary: {
            __class: "bg-red text-white text-md rounded-lg font-normal",
            text: "#fff",
        },
    };

    const buttonRef = useRef(null);

    useEffect(() => {
        if (props.loading) {
            buttonRef?.current;
        }
    }, [props.loading]);

    const renderIcon = () => {
        if (props.icon || props.loading) {
            const IconComponent = props.loading ? SpinnerMini : props.icon;

            if (IconComponent) {
                return (
                    <IconComponent
                    // className={`${!props.iconOnly ? 'mr-2' : ''} my-auto`}
                    // size="20"
                    // color={types[props.type]?.text}
                    />
                );
            }

            return null;
        }
    };
    const renderLeftIcon = () => {
        return props.iconLeft ? <props.iconLeft /> : undefined;
    };
    const renderRightIcon = () => {
        return props.iconRight ? <props.iconRight /> : undefined;
    };


    const __class = (() => {
        let __base =
            ((types[props.type] && types[props.type].__class) ||
                types["primary"].__class) +
            " " +
            (sizes[props.size] || sizes["medium"]);
        if (props.round)
            __base += " rounded-full h-12 w-12 max-w-12 text-center";
        else __base += " " + base;

        if (props.full) __base += " w-full";
        if (props.disabled) __base += " opacity-40 cursor-not-allowed";

        return __base;
    })();

    return (
        <button
            data-testid="disabled-button"
            onClick={(e) => props.onClick?.(e)}
            ref={buttonRef}
            className={`${__class} ${props.disabled ? "disabled-button" : ""}`}
            style={{ whiteSpace: "nowrap" }}
            disabled={props.disabled}
        >
            <div className="flex justify-center gap-2 text items-center">
                
                {renderIcon() ? (
                    renderIcon() // Render the icon when renderIcon() is true
                    ) : (
                        <span
                        className={`my-auto flex items-center gap-3 ${!props.icon && !props.loading
                            ? props.round
                            ? " mt-1 ml-1 z-50"
                            : "m-auto"
                            : ""
                        } ${props.disabled ? "disabled-button" : ""}`}
                        >
                        {renderLeftIcon()}
                        {props.children} {/* Render children */}
                        
                        {renderRightIcon()}
                    </span>
                    
                )}
            </div>
        </button>
    );



};

export default Button;
