import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  // Replace with your actual selector to check authentication status
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to login after a delay or immediately
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 1000);

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [isAuthenticated, navigate]);

  // Render children if authenticated
  if (isAuthenticated) {
    return <>{children}</>;
  }

  // Render null or a loading spinner while redirecting
  return null;
};

export default ProtectedRoute;
