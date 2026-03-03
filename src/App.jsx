import { BrowserRouter, Navigate, NavLink, Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import AdminPortal from "./pages/AdminPortal";
import AdminReports from "./pages/AdminReports";
import AdminUsers from "./pages/AdminUsers";
import LocationTracker from "./pages/LocationTracker";
import Orders from "./pages/Orders";
import SellerInventory from "./pages/SellerInventory";
import SellerOrders from "./pages/SellerOrders";
import SellerPortal from "./pages/SellerPortal";

function CustomerLayout() {
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

function SellerLayout() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-white text-green-800" : "text-green-50 hover:bg-green-700"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-green-800 text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-xl font-bold">Seller Portal</h1>
          <nav className="flex gap-2">
            <NavLink end to="/seller" className={linkClass}>
              Overview
            </NavLink>
            <NavLink to="/seller/orders" className={linkClass}>
              Orders
            </NavLink>
            <NavLink to="/seller/inventory" className={linkClass}>
              Inventory
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

function AdminLayout() {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-white text-indigo-900" : "text-indigo-50 hover:bg-indigo-700"
    }`;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-indigo-900 text-white px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-xl font-bold">Admin Portal</h1>
          <nav className="flex gap-2">
            <NavLink end to="/admin" className={linkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/admin/users" className={linkClass}>
              Users
            </NavLink>
            <NavLink to="/admin/reports" className={linkClass}>
              Reports
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerLayout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="location" element={<LocationTracker />} />
        </Route>

        <Route path="/seller" element={<SellerLayout />}>
          <Route index element={<SellerPortal />} />
          <Route path="orders" element={<SellerOrders />} />
          <Route path="inventory" element={<SellerInventory />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPortal />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="reports" element={<AdminReports />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
