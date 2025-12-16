import './Footer.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-logo">Mango Plus</h3>
          <p>Bringing India's finest mangoes to your doorstep since 2020.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/about" className="footer-link">About Us</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📧 support@mangoplus.com</p>
          <p>📞 --</p>
          <p>📍 Pune, Maharashtra</p>
        </div>
        
         {/* SOCIAL MEDIA */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
            </a>

            <a href="#" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
            </a>

            <a href="#" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
            </a>

            <a href="#" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2025 Mango Plus. All rights reserved. | Made with ❤️ in India</p>
        <p>Developed by Vedaniti Technologies PVT LTD</p>
      </div>
    </footer>
  );
};

export default Footer;