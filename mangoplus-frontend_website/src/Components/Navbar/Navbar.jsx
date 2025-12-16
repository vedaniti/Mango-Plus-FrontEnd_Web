import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-logo">Mango Plus</h2>
        
        <div className="navbar-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/download" className="nav-link">Download</Link>
        </div>
        
        {/* <div className="navbar-actions">
          <button className="nav-button">Login</button>
          <button className="nav-button primary">Sign Up</button>
        </div> */}
      </div>
    </nav>
  );
}

export default Navbar;