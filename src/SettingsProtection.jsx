import React, { useState } from "react";
import axiosClient from "./axios-client";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

function SettingsProtection({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePinSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const res = await axiosClient.post('/user/verify-pin', {pin});
        if(res.data.status){
            setLoading(false)
            toast.success('Pin verified successfully');
            setTimeout(()=>{
                setAuthenticated(true);
            }, 2000);
        }else if(res.data.error){
            setLoading(false)
            setError(res.data.error)
            toast.error("The pin you entered is invalid");
        }
    } catch (error) {
        setLoading(false)
        console.log(error);
    }
    
    
  };

  if (authenticated) {
    return <>{children}</>;
  } else {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Enter Your Data Restriction PIN</h2>
          <form onSubmit={handlePinSubmit} style={styles.form}>
            <input
              type="password"
              placeholder="Enter PIN"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              style={styles.input}
              maxLength={4} // Limit to 4 digits
            />
            <button type="submit" style={styles.button}>
            {loading ? (
    <ClipLoader size={20} color="#fff" />
  ) : (
    <span>Unlock</span>
  )}
            </button>
          </form>
          {error && <p style={styles.error} className="text-red-400">{error}</p>}
        </div>
      </div>
    );
  }
  
}

export default SettingsProtection;

// Styles for the component
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
    padding: "20px",
  },
  card: {
    textAlign: "center",
    background: "white",
    padding: "30px 20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  title: {
    marginBottom: "20px",
    fontSize: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    background: "rgb(10 46 226 / var(--tw-bg-opacity, 1))",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    
    marginTop: "10px",
    fontSize: "14px",
  },
};
