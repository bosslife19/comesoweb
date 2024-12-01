import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
 import AppLayout from "./Ul/Layout/AppLayout";
 import PageNotFound from "./pages/PageNotFound";
import Customermangement from "./pages/Inbox/Inboxmangement";
import { InboxContents } from "./components/Inbox/SelectedContents/InboxContents";
import { ProductDetails } from "./Screens/InboxScreen/InboxScreen";
import { TransactionPage } from "./pages/TransactionsManagement/TransactionsManagement";
import { PayoutPage } from "./pages/Payouts/PayoutManagement";
import { PayoutDetails } from "./pages/Payouts/PayoutDetails/PayoutDetails";
import { SettingsManagement } from "./pages/Setting/SettingsManagement";
import UserManagement from "./pages/Users/UserManagement";
import UserDetailsPage from "./pages/UserDetails/UserPage";
 import HealthDetailsPage from "./pages/HealthDetails/HealthDetailsPage";
import Teamsmanagement from "./pages/Teamsmanagement/Teamsmanagement";
import TeamsDetails from "./pages/Teamsmanagement/TeamsDetails";
import Facilities from "./pages/Facilities/Facilities";
import ProtectedRoute from "./Ul/Layout/ProtectedRoute";
import Login from "./components/Auth/LoginSection/Login";
import Signup from "./components/Auth/SignUpSection/SignUp";
import PageTransition from "./Ul/Layout/PageTransition";
import Dashboards from "./pages/Dashboard/Dashboards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route: Login */}
        <Route path="/login" element={
           <PageTransition >
          <Login />
          </PageTransition>
          } />
        <Route path="/Signup" element={<Signup />} />
        {/* Protected Routes */}
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
              <PageTransition >
              <Dashboards />
              </PageTransition>
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
  );
}

export default App;
