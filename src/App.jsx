import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './Ul/Layout/AppLayout'
import Dashboards from './pages/Dashboard/Dashboards'
import PageNotFound from './pages/PageNotFound'

function App() {
 
  return (
    <BrowserRouter>
    
    <Routes>
      <Route
       path="/"
        element={
          // <ProtectedRoute>
            <AppLayout />
          //  </ProtectedRoute>
        }
        // element={<AppLayout />}
      >
         
        <Route
        index
          path="/"
          element={
            <>
             <Dashboards />
            </>
            // <PageTransition >
              
            // </PageTransition>
          }
        />
        <Route
        index
          path="dashboard"
          element={
            // <PageTransition >
              <Dashboards />
            // </PageTransition>
          }
        />
         {/* <Route
          path="sale/invoice"
          element={
            <PageTransition >
              <SalesPage />
            </PageTransition>
          }
        />
          <Route
          path="sale/customer"
          element={
            <PageTransition >
              <Customermangement />
            </PageTransition>
          }
        /> */}
        {/* <Route
        path="/AddUser"
        element={
          <>
             <AddUser />
          </>
        }
      /> */}


        </Route>
        <Route path="*" element={<PageNotFound />} />     
    </Routes>
  {/* </Suspense> */}  
</BrowserRouter>
  )  
} 

export default App
