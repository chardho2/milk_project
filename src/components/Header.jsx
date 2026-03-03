import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png.jpeg";

function Header() {
  const linkClass = ({ isActive }) =>
    "hover:underline " + (isActive ? "font-bold text-green-800" : "");

  return (
    <nav className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Hindupur Milk" className="w-12 h-12 rounded-full" />
        <h1 className="text-xl font-bold text-green-700">Hindupur Milk</h1>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 text-gray-700">
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
      </ul>

      <div className="flex gap-2">
        <NavLink
          to="/seller"
          className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-green-700 hover:bg-green-800"
        >
          Seller Portal
        </NavLink>
        <NavLink
          to="/admin"
          className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-800 hover:bg-indigo-900"
        >
          Admin Portal
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
