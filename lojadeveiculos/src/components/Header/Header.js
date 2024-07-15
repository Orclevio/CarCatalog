// src/components/Header.js
import React from 'react';
import './Header.css';
import NavList from './NavList';
import logo from '../../imagens/logo.png';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const leftNavItems = [
    { href: "/", text: "Início" },
    { href: "/catalogo", text: "Catálogo Completo" },
    { href: "/modelos-populares", text: "Modelos Populares" },
    { href: "/promocoes", text: "Promoções" },
  ];
  const navigate = useNavigate();
  function handleClick() {
    navigate('/login');
  }

  return (
    <header className="Home-header">
      <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <NavList items={leftNavItems} className="nav-left" />
        <div className="search-bar nav-right">
          <input type="text" placeholder="Buscar modelos, marcas..." />
          <IconButton color='primary' aria-label="Pesquisar" ><SearchIcon /></IconButton>
        </div>
        <div className="nav-right">

          <Button variant="contained"  onClick={handleClick} startIcon={<AccountCircleIcon color='white'/>} >
  Entrar
</Button>
          
          
        </div>
      </nav>
    </header>
  );
};

export default Header;
