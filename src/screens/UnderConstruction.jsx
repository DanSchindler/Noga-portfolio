import React from 'react';

const UnderConstruction = () => {
  const containerStyle = {
    display: 'flex',
    width: '85%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '0 20px',
    margin: 'auto',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    color: '#666',
    marginBottom: '2rem',
  };

  const iconStyle = {
    fontSize: '4rem',
    color: '#ffc107',
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      <i className="fas fa-tools" style={iconStyle}></i>
      <h1 style={headingStyle}>🚧 Page Under Construction 🚧</h1>
      <p style={paragraphStyle}>
        Thank you for visiting! Come back later to see my work! ✨ Stay tuned! ✨
      </p>
    </div>
  );
};

export default UnderConstruction;
