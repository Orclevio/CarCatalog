// src/components/NavList.js
import React from 'react';
import NavItem from './NavItem';

const NavList = ({ items, className }) => {
  return (
    <ul className={`nav-list ${className}`}>
      {items.map((item, index) => (
        <NavItem key={index} href={item.href}>
          {item.text}
        </NavItem>
      ))}
    </ul>
  );
};

export default NavList;
