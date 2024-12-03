import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import AppLayout from "./Ul/Layout/AppLayout";
 import PageNotFound from "./pages/PageNotFound";
 
import Dashboards from "./pages/Dashboard/Dashboards";
import Login from "./components/Auth/LoginSection/Login";
import PageTransition from "./Ul/Layout/PageTransition";
import Signup from "./components/Auth/SignUpSection/SignUp";
import ProtectedRoute from "./Ul/Layout/ProtectedRoute";
 import { InboxContents } from "./components/Inbox/SelectedContents/InboxContents";
import Successful from "./Screens/Kyc/Successful";
import { PayoutPage } from "./pages/Payouts/PayoutManagement";
import Payments from "./components/Payment/Payments";
import WelcomeLoading from "./components/welcomLoading/welcomLoading";
import WelcomeLottie from "./components/welcomLoading/welcomLoading";
import { PayoutDetails } from "./pages/Payouts/PayoutDetails/PayoutDetails";
import { TransactionPage } from "./pages/TransactionsManagement/TransactionsManagement";
import Customermangement from "./pages/Customermangement/Customermangement";
import { SettingsManagement } from "./pages/Setting/SettingsManagement";

function App() {
 
    const [isLoading, setIsLoading] = useState(true);

    return (
      <>
        {isLoading ? (
          <WelcomeLottie onComplete={() => setIsLoading(false)} />
        ) : (
  
    <BrowserRouter>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/login" element={
           <PageTransition >
          <Login/>
          </PageTransition>
          } />
        <Route path="/Signup" element={<Signup />} />

        {/* kyc Process */}
        <Route
            path="Kyc/details"
            element={
              <Customermangement />
            }
          />
          {/* kyc successful */}
           <Route
            path="Kyc/successful"
            element={
              <Successful />
            }
          />
          
          
        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          
          <Route
            path="dashboard"
            element={
              <PageTransition >
              <Dashboards />
              </PageTransition>
            }
          />
 
          {/* Inbox Contents */}
          <Route
            path="inbox-contents"
            element={
              <InboxContents />
            }
          />

           {/* Inbox Contents */}
           <Route
            path="payoutDetails"
            element={
              <PayoutDetails />
            }
          />

          {/* Product Details */}
          <Route
            path="Payments"
            element={
              <Payments />
            }
          />

         <Route
            path="payout"
            element={
              <PayoutPage />
            }
          />

             <Route
            path="transactions"
            element={
              <TransactionPage />
            }
          />

<Route
            path="Settings"
            element={
              <SettingsManagement />
            }
          />



        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
     )}
      </>
  );
}

export default App;
