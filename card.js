import React from 'react';
import './card.css';

function Card() {
  return (
    <div className="card">
      <img src="ruta/a/la/imagen.jpg" alt="Descripción" />
      <div className="card-content">
        <h3>Título del Video</h3>
        <p>Descripción breve...</p>
        <button className="edit-button">Editar</button>
      </div>
    </div>
  );
}

export default Card;
