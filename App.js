import React, { useState } from 'react';
import Header from './components/header.js';
import NewVideoForm from './components/NewVideoForm';
import VideoList from './components/videolist.js';
import './App.css';

function App() {
  const [showNewVideoForm, setShowNewVideoForm] = useState(false);

  const handleNewVideoClick = () => {
    setShowNewVideoForm(true);
  };

  const handleCloseForm = () => {
    setShowNewVideoForm(false);
  };

  return (
    <div className="app">
      <Header onNewVideoClick={handleNewVideoClick} />
      <main className="main-content">
        <VideoList category="Front End" />
        <VideoList category="Back End" />
        <VideoList category="Innovación y Gestión" />
      </main>
      {showNewVideoForm && <NewVideoForm onClose={handleCloseForm} />}
    </div>
  );
}

export default App;
