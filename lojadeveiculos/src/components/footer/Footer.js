// src/components/Footer.js
import React from 'react';
import FooterLinks from './FooterLinks';
import './Footer.css';
{/*import FooterContact from './FooterContacts';
import FooterSocial from './FooterSocial';*/}


const Footer = () => {
  return (
    <footer className="footer">
      <FooterLinks />
      {/* <FooterContact /> 
      <FooterSocial />*/}
    </footer>
  );
};

export default Footer;
