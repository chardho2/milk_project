import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AdminPortal from "./pages/AdminPortal";
import LocationTracker from "./pages/LocationTracker";
import Orders from "./pages/Orders";
import SellerPortal from "./pages/SellerPortal";

function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-green-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="location" element={<LocationTracker />} />
          <Route path="seller" element={<SellerPortal />} />
          <Route path="admin" element={<AdminPortal />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
