import React from 'react';
import './header.css'; // Corrige la ruta de importación

function Header({ onNewVideoClick }) {
  return (
    <header className="header">
      <h1>Aluraflix</h1>
      <button className="new-video-button" onClick={onNewVideoClick}>
        Nuevo Video
      </button>
    </header>
  );
}

export default Header;
