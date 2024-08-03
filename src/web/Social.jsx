// SocialLinks.js
import React from 'react';
import { FaFacebook,FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <div className="social-links">
        <a href="https://www.facebook.com/profile.php?id=61551056345056&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://wa.me/919664143801" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a>
        <a href="https://www.instagram.com/profitologywebeliveinprofit?igsh=emxlaTl1ZjVlYnMz" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://youtube.com/@theprofitology?si=w0YA7qZOc_m-y0a2" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
      </div>
    </div>
  );
};

export default SocialLinks;
