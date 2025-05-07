import React from 'react';
import './Header.css';

export function Header({name}) {
  return (
    <header className="header">
      <h1  className="header__title">{name}</h1>
    </header>
  );
}
