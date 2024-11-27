import React from "react";
import { BiLoaderAlt } from "react-icons/bi";


const SpinnerMini: React.FC = () => {
    return (
        <BiLoaderAlt
            className="animate-spin flex justify-center text-3xl items-center text-white"
            data-testid="spinner-mini"
             style={{
                animationDuration: "0.5s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
            }}
        /> 
    );
};

export default SpinnerMini;
