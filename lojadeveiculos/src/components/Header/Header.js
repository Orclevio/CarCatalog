// src/components/Header.js
import React from 'react';
import './Header.css';
import NavList from './NavList';
import logo from '../../imagens/logo.png';

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
      <img src={logo} alt="logo" className='logo'/>
        <NavList items={leftNavItems} className="nav-left" />
        <div className="search-bar nav-right">
        <input type="text" placeholder="Buscar modelos, marcas..." />
        <button>Buscar</button>
      </div>
        <NavList items={rightNavItems} className="nav-right" />
        
      </nav>
    </header>
  );
};

export default Header;
