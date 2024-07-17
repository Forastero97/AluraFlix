import React, { useState } from 'react';
import Card from './card.css'; // Corrige la ruta de importación
import EditCardModal from './EditCardmodal';
import './videolist.css'; // Corrige la ruta de importación

function VideoList({ category }) {
  const [videos, setVideos] = useState([
    // Datos de ejemplo
    { id: 1, title: 'Video 1', description: 'Descripción 1', url: '#' },
    { id: 2, title: 'Video 2', description: 'Descripción 2', url: '#' },
  ]);

  const [editCard, setEditCard] = useState(null);

  const handleEditCard = (card) => {
    setEditCard(card);
  };

  const handleCloseModal = () => {
    setEditCard(null);
  };

  return (
    <section className="video-list">
      <h2>{category}</h2>
      <div className="cards-container">
        {videos.map((video) => (
          <Card key={video.id} video={video} onEdit={() => handleEditCard(video)} />
        ))}
      </div>
      {editCard && <EditCardModal video={editCard} onClose={handleCloseModal} />}
    </section>
  );
}

export default VideoList;
