import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function PaymentsProtection({ children }) {
  const { userDetails } = useContext(AuthContext);
  const navigate = useNavigate();

  if (userDetails.kycCompleted) {
    return <>{children}</>;
  } else {
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h2 style={styles.title}>Complete Your KYC</h2>
          <p style={styles.description}>
            You need to complete your KYC (Know Your Customer) process before you can access this page. This helps us ensure your account's security.
          </p>
          <button
            style={styles.button}
            onClick={() => navigate("/Kyc/details")}
          >
            Complete KYC
          </button>
        </div>
      </div>
    );
  }
}

export default PaymentsProtection;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px 30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "400px",
    width: "90%",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
    lineHeight: "1.5",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};
