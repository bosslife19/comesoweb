import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";
import axiosClient from "../../../axios-client";

function ProtectedRoute({ children }) {
 
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false)
  const isAdmin = localStorage.getItem('isAdmin');
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
  axiosClient.get('/user').then(res=>{
    if(!res.data.user.email_verified_at){
      console.log(res.data.user.email)
      const userEmail = res.data.user.email;
      axios.post(`${import.meta.env.VITE_BASE_URL}/api/send-otp`,{email:res.data.user.email}).then(res=>{
        return navigate('/OTPSignUp', {state:userEmail});
      });
      
    }else{
      setVerified(true);
    }
  });
    
    
  if(isAdmin){
    return navigate('/admin/dashboard')
  }
  }, []);

  // Render children if authenticated
  const isAuthenticated = localStorage.getItem('ACCESS_TOKEN')
  
  if (isAuthenticated && verified && !isAdmin) {
    return <>{children}</>;
  }else{
    return navigate('/login');
  }

  // Render null or a loading spinner while redirecting
  return null;
}

export default ProtectedRoute;
