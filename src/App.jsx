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


        </Route>

        {/* Fallback for Undefined Routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
