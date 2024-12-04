import React, { useEffect } from "react";

const WelcomeLottie = ({ onComplete }) => {
  useEffect(() => {
    // Set timeout for 3 seconds to simulate loading
    const timer = setTimeout(() => {
      onComplete(); // Notify the parent to switch screens
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [onComplete]);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      {/* Lottie Player */}
      <lottie-player
        src="https://lottie.host/9f031685-fc05-4252-8414-50ccb56280d5/DyDv8VNnhC.json"
        background="#ffffff"
        speed="1"
        style={{ width: "300px", height: "300px" }}
        loop
        autoplay
        direction="1"
        mode="normal"
      />
     </div>
  );
};

export default WelcomeLottie;
