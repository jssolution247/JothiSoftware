import heroImage from "../../assets/jsol.jpg";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <NavLink to="/" className="navbar-logo">
          <img
            src={heroImage} style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            alt="Jothi Software Solutions"
            className="logo-mark-img"
          />
          <span className="logo-text">
            <b>Jothi</b> Software Solutions
          </span>
        </NavLink>

        {/* NAVIGATION */}
        <nav className="navbar-menu">

          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>

          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>

          <NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Services
          </NavLink>

          <NavLink to="/product" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Product
          </NavLink>

          <NavLink to="/price" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Price
          </NavLink>

          <NavLink to="/team" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Team
          </NavLink>

          <NavLink to="/career" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Career
          </NavLink>

          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>

        </nav>

        {/* GET STARTED */}
        <NavLink to="/contact" className="navbar-button">
          Get Started
        </NavLink>

      </div>

    </header>
  );
}

export default Navbar;