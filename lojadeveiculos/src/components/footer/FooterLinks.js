// src/components/FooterLinks.js
import React from 'react';
import './FooterLinks.css';

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <ul>
        <li><a href="/">Início</a></li>
        <li><a href="/catalogo">Catálogo</a></li>
        <li><a href="/modelos-populares">Modelos Populares</a></li>
        <li><a href="/promocoes">Promoções</a></li>        
        <li><a href="#sobre-nos">Sobre Nós</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </div>
  );
};

export default FooterLinks;
