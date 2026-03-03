import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png.jpeg";

function Header() {
  const linkClass = ({ isActive }) =>
    "hover:underline " + (isActive ? "font-bold text-green-800" : "");

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Hindupur Milk" className="w-12 h-12 rounded-full" />
        <h1 className="text-xl font-bold text-green-700">Hindupur Milk</h1>
      </div>

      {/* navigation links */}
      <ul className="flex space-x-6 text-gray-700">
        <li>
          <NavLink to="/" className={linkClass} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={linkClass}>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/location" className={linkClass}>
            Location Tracker
          </NavLink>
        </li>
        <li>
          <NavLink to="/seller" className={linkClass}>
            Seller Portal
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" className={linkClass}>
            Admin Portal
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
