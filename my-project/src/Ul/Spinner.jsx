import React from "react";
import { BiLoaderAlt } from "react-icons/bi";


const Spinner = () => {
    return (
        <BiLoaderAlt
            className="animate-spin flex justify-center text-3xl items-center text-blue"
            data-testid="spinner-mini"
            style={{
                animationDuration: "0.5s",
                animationTimingFunction: "linear",
                animationIterationCount: "infinite",
            }}
        />
    ); 
};

export default Spinner;
