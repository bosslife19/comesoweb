import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
 
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication status from localStorage
    const isAuthenticated = localStorage.getItem('ACCESS_TOKEN')
    if (!isAuthenticated) {
      // Redirect to login after a delay
      const timer = setTimeout(() => {
        navigate("/login"); // Redirect to the login page
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer
    }
    const isAdmin = localStorage.getItem('isAdmin');
  if(isAdmin){
    return navigate('/admin/dashboard')
  }
  }, []);

  // Render children if authenticated
  const isAuthenticated = localStorage.getItem('ACCESS_TOKEN')
  
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Render null or a loading spinner while redirecting
  return null;
}

export default ProtectedRoute;
