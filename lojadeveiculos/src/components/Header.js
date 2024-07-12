// src/components/Header.js
import React from 'react';
import './Header.css';
import NavList from './NavList';

const Header = () => {
  const leftNavItems = [
    { href: "#home", text: "Início" },
    { href: "#catalogo", text: "Catálogo" },
    { href: "#modelos-populares", text: "Modelos Populares" },
    { href: "#promocoes", text: "Promoções" },
  ];

  const rightNavItems = [
    { href: "#sobre-nos", text: "Sobre Nós" },
    { href: "#contato", text: "Contato" },
    { href: "#login", text: "Login/Registrar" },
  ];

  return (
    <header className="Home-header">
      <nav className="navbar">
        <NavList items={leftNavItems} className="nav-left" />
        <NavList items={rightNavItems} className="nav-right" />
      </nav>
    </header>
  );
};

export default Header;
