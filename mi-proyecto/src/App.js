import React from 'react';
import UserProfileCard from './UserProfileCard';

const App = () => {
  // Estilo para el contenedor principal
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '40px',
    backgroundColor: '#f6f8fa' // Fondo gris suave estilo GitHub
  };

  return (
    <div style={containerStyle}>
      <UserProfileCard 
        name="Ana García" 
        role="Senior Frontend Dev" 
        avatarUrl="https://i.pravatar.cc/300?img=5" 
      />

      <UserProfileCard 
        name="Carlos Méndez" 
        role="Product Designer" 
        avatarUrl="https://i.pravatar.cc/300?img=11" 
      />
      
      <UserProfileCard 
        name="Sofia Chen" 
        role="Tech Lead" 
        avatarUrl="https://i.pravatar.cc/300?img=32" 
      />
    </div>
  );
};

export default App;
