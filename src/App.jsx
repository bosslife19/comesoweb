import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeLottie from "./Admin-Website/welcomLoading/welcomLoading";
import Pagination from "./Admin-Website/Admin/AdminPagnations/Paginations";
import Login from "./Admin-Website/Auth/LoginSection/Login";
import Signup from "./Admin-Website/Auth/SignUpSection/SignUp";
import ProtectedRoute from "./Ul/Admin/Layout/ProtectedRoute";
import AppLayout from "./Ul/Admin/Layout/AppLayout";
import Dashboards from "./pages/Admin/Dashboard/Dashboards";
import Customermangement from "./pages/Admin/Inbox/Inboxmangement";
import { InboxContents } from "./Admin-Website/Admin/AdminInbox/SelectedContents/InboxContents";
import { ProductDetails } from "./Screens/Admin/InboxScreen/InboxScreen";
import { TransactionPage } from "./pages/Admin/TransactionsManagement/TransactionsManagement";
import { PayoutPage } from "./pages/Admin/Payouts/PayoutManagement";
import { PayoutDetails } from "./pages/Admin/Payouts/PayoutDetails/PayoutDetails";
import { SettingsManagement } from "./pages/Admin/Setting/SettingsManagement";
import UserManagement from "./pages/Admin/Users/UserManagement";
import UserDetailsPage from "./pages/Admin/UserDetails/UserPage";
import Facilities from "./pages/Admin/Facilities/Facilities";
import HealthDetailsPage from "./pages/Admin/HealthDetails/HealthDetailsPage";
import Teamsmanagement from "./pages/Admin/Teamsmanagement/Teamsmanagement";
import TeamsDetails from "./pages/Admin/Teamsmanagement/TeamsDetails";
import PageNotFound from "./pages/Admin/PageNotFound";


// website
import AppLayouts from "./Ul/Website/Layout/AppLayouts";
import PageTransitionin from "./Ul/Website/Layout/PageTransition";
import { InboxContent } from "./Admin-Website/Website/websiteInbox/SelectedContents/InboxContents";
import { PayoutDetail } from "./pages/Website/Payouts/PayoutDetails/PayoutDetails";
import Payments from "./Admin-Website/Website/WebsitePayment/Payment/Payments";
import { PayoutPag } from "./pages/Website/Payouts/PayoutManagement";
import { TransactionPag } from "./pages/Website/TransactionsManagement/TransactionsManagement";
import { SettingsManagemen } from "./pages/Website/Setting/SettingsManagement";
import Customermangemen from "./pages/Website/Customermangement/Customermangement";
import Successful from "./Screens/Website/Kyc/Successful";
import PageTransition from "./Ul/Admin/Layout/PageTransition";
 


 
function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
    {isLoading ? (
      <WelcomeLottie onComplete={() => setIsLoading(false)} />
    ) : (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={  <PageTransition> <Login />  </PageTransition>  } />
        <Route path="/Signup" element={<Signup />} />



{/* Starting Website Route */}

        {/* Website Route */}

        
         <Route
            path="Kyc/details"
            element={
              <Customermangemen />
            }
          />
          
           <Route
            path="Kyc/successful"
            element={
              <Successful />
            }
          />

         {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayouts  />
            </ProtectedRoute>
          }
        > */}
          
          <Route
            path="/"
            element={
              <ProtectedRoute>
              <PageTransitionin >
              {/* <Dashboards /> */}
              </PageTransitionin>
              </ProtectedRoute>
            }
          /> 
 
           <Route
            path="inbox-contents"
            element={
              <InboxContent />
            }
          />

            <Route
            path="payoutDetails"
            element={
              <PayoutDetail />
            }
          />

            <Route
            path="Payments"
            element={
              <Payments  />
            }
          />

         <Route
            path="payout"
            element={
              <PayoutPag />
            }
          />

             <Route
            path="transactions"
            element={
              <TransactionPag />
            }
          />

           <Route
            path="Settings"
            element={
              <SettingsManagemen/>
            }
          />



        {/* </Route> */}


        {/* End of website Route */}







{/* start Admin Route */}

        {/* Admin Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Default Dashboard Route */}
          <Route
            index
            element={
              <Dashboards />
            }
          />

          {/* Dashboard Route */}
          <Route
            path="dashboard"
            element={
              // <PageTransition >
              <Dashboards />
              // </PageTransition>
            }
          />

          {/* Inbox Management */}
          <Route
            path="inbox"
            element={
              <Customermangement />
            }
          />

          {/* Inbox Contents */}
          <Route
            path="inbox-contents"
            element={
              <InboxContents />
            }
          />

          {/* Product Details */}
          <Route
            path="product/:id"
            element={
              <ProductDetails />
            }
          />

          {/* Transactions */}
          <Route
            path="transactions"
            element={
              <TransactionPage />
            }
          />

          {/* Payouts */}
          <Route
            path="payout"
            element={
              <PayoutPage />
            }
          />

          {/* Payout Details */}
          <Route
            path="pays"
            element={
              <PayoutDetails />
            }
          />

          {/* Settings */}
          <Route
            path="settings"
            element={
              <SettingsManagement />
            }
          />

          {/* User Management */}
          <Route
            path="users"
            element={
              <UserManagement />
            }
          />

          {/* User Details */}
          <Route
            path="userBoard"
            element={
              <UserDetailsPage />
            }
          />

          {/* Facilities */}
          <Route
            path="/facilities"
            element={
              <Facilities />
            }
          />

          {/* Health Facility */}
          <Route
            path="healthFacility"
            element={
              <HealthDetailsPage />
            }
          />

          {/* Teams Management */}
          <Route
            path="team"
            element={
              <Teamsmanagement />
            }
          />

          {/* Team Details */}
          <Route
            path="teamUser"
            element={
              <TeamsDetails />
            }
          />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    )
}
    </>
  );
}

export default App;
