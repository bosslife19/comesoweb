import React from 'react'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    const handleLogout = () => {
        localStorage.removeItem("isAuthenticated");
        Navigate("/login");
      };
      
  return (
    <div>
      
    </div>
  )
}

export default Logout
