import React, { useEffect, useState } from "react";

const CustomLottiePlayer = ({ onComplete }) => {
 
  useEffect(() => {
    // Set timeout for 3 seconds to simulate loading
    const timer = setTimeout(() => {
      onComplete(); // Notify the parent to switch screens
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onComplete]); 
 

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%" }}>     
        <lottie-player
          src="https://lottie.host/46c75b6b-fe9d-4cd6-8336-de119079d8b9/pTZ1gKQb8t.json"
          speed="1"
          style={{ width: '100%', height: '500px' }}
          loop
           autoplay
          direction="1"
          mode="normal"
         />
       
    </div>
  );
};

export default CustomLottiePlayer;
