import React, { useState } from 'react';

const UserProfileCard = ({ name, role, avatarUrl }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const styles = {
    card: {
      border: '1px solid #e1e4e8',
      borderRadius: '12px',
      padding: '24px',
      width: '280px',
      textAlign: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      boxShadow: '0 8px 24px rgba(149, 157, 165, 0.2)',
      backgroundColor: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.2s ease',
    },
    avatar: {
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginBottom: '16px',
      border: '4px solid #f0f6fc'
    },
    name: {
      margin: '0 0 4px',
      fontSize: '1.25rem',
      color: '#24292f'
    },
    role: {
      margin: '0 0 20px',
      color: '#57606a',
      fontSize: '0.9rem',
      fontWeight: '500'
    },
    button: {
      padding: '8px 16px',
      border: '1px solid rgba(27, 31, 36, 0.15)',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: '600',
      fontSize: '14px',
      width: '100%',
      backgroundColor: isFollowing ? '#f6f8fa' : '#2da44e',
      color: isFollowing ? '#24292f' : '#ffffff',
      transition: 'all 0.2s cubic-bezier(0.3, 0, 0.5, 1)'
    }
  };

  return (
    <div style={styles.card}>
      <img src={avatarUrl} alt={`Avatar de ${name}`} style={styles.avatar} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.role}>{role}</p>
      
      <button onClick={toggleFollow} style={styles.button}>
        {isFollowing ? 'Dejar de seguir' : 'Seguir'}
      </button>
    </div>
  );
};

export default UserProfileCard;