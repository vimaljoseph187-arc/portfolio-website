import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} Vimal Joseph. All rights reserved.</p>
        <p>Built with React.js & Vite</p>
      </div>
    </footer>
  );
};

export default Footer;