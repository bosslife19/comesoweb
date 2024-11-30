import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboards from './pages/Dashboard/Dashboards';
import PageNotFound from './pages/PageNotFound';
import Customermangement from './pages/Inbox/Inboxmangement';
import AppLayout from './Ul/Layout/AppLayout';
import { InboxContents } from './components/Inbox/SelectedContents/InboxContents';
import { ProductDetails } from './Screens/InboxScreen/InboxScreen';
import { TransactionPage } from './pages/TransactionsManagement/TransactionsManagement';
import { PayoutPage } from './pages/Payouts/PayoutManagement';
import { PayoutDetails } from './pages/Payouts/PayoutDetails/PayoutDetails';
import { SettingsManagement } from './pages/Setting/SettingsManagement';
import UserManagement from './pages/Users/UserManagement';
 import UserDetailsPage from './pages/UserDetails/UserPage';
import HealthBord from './Screens/Modals/Facilities/BoardMain/HealthBord';
import HealthDetailsPage from './pages/HealthDetails/HealthDetailsPage';
import Teamsmanagement from './pages/Teamsmanagement/Teamsmanagement';
import TeamsDetails from './pages/Teamsmanagement/TeamsDetails';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <AppLayout />
            // </ProtectedRoute>
          }
        >
          {/* Default Dashboard Route */}
          <Route
            index
            element={
              <>
                <Dashboards />
              </>
            }
          />

          {/* Dashboard Route */}
          <Route
            path="dashboard"
            element={
              <>
                <Dashboards />
              </>
            }
          />

          {/* Inbox Management Route */}
          <Route
            path="inbox"
            element={
              <>
                <Customermangement />
              </>
            }
          />

          {/* Inbox Contents Route */}
          <Route
            path="inbox-contents"
            element={
              <>
                <InboxContents />
              </>
            }
          />

          {/* Product Details Dynamic Route */}
          <Route
            path="product/:id"
            element={
              <>
                <ProductDetails />
              </>
            }
          />

            <Route
            path="transactions"
            element={
              <>
                <TransactionPage />
              </>
            }
          />

            <Route
            path="payout"
            element={
              <>
                <PayoutPage />
              </>
            }
          />

           <Route
            path="/Pays"
            element={
              <>
                <PayoutDetails />
              </>
            }
          />
           <Route
            path="settings"
            element={
              <>
                <SettingsManagement />
              </>
            }
          />
           <Route
            path="users"
            element={
              <>
                <UserManagement />
              </>
            }
          />

       <Route
            path="userBoard"
            element={
              <>
                <UserDetailsPage />
              </>
            }
          />

            <Route
            path="/facilities"
            element={
              <>
                <HealthBord />
              </>
            }
          />

           <Route
            path="HealthFacility"
            element={
              <>
                <HealthDetailsPage />
              </>
            }
          />
          {/* Teams */}
          <Route
            path="team"
            element={
              <>
                <Teamsmanagement />
              </>
            }
          />
          {/* Teams details */}
          <Route
            path="TeamUser"
            element={
              <>
                <TeamsDetails />
              </>
            }
          />




        </Route>

        {/* Fallback for Undefined Routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
