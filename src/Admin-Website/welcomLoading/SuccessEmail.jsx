import   { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const SucessEmail = () => {
  // State to track if the animation is still showing
  const [showAnimation, setShowAnimation] = useState(true);
  
  // Hook for navigation
  const navigate = useNavigate();

  // Set timeout to hide the animation after 5 seconds and navigate to dashboard
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false); // Hide animation after 5 seconds
      navigate("/dashboard");  
    }, 7000);

    // Cleanup the timer when the component unmounts or after the animation is hidden
    return () => clearTimeout(timer);
  }, [navigate]); // Ensure navigate is included in the dependency array

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'transparent' }}>
      {showAnimation && (
        <DotLottieReact
          src="https://lottie.host/5c88bef2-fefe-44e4-ab85-1879021c9f68/CixRvbwa4m.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
};

export default SucessEmail;
