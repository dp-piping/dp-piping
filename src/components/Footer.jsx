
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        {/* Company & trust */}
        <div className="footer-top">
          <h3>D.P. Piping</h3>
          <p>Proudly serving all of Rhode Island</p>
          <p>📞 (401)-425-1778 | ✉️ derek@dppiping.com</p>
          <p>Licensed & Insured</p>
        </div>

        {/* Quick navigation links */}
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>


        <div className="footer-social">
          <a href="https://www.facebook.com/dppiping" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/dppiping" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; 2026 D.P. Piping
        </p>
      </div>
    </footer>
  );
}
