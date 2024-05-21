import React from 'react';

const UnderConstruction = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const headingStyle = {
    fontSize: '3rem',
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
    fontSize: '6rem',
    color: '#ffc107',
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      <i className="fas fa-tools" style={iconStyle}></i>
      <h1 style={headingStyle}>🚧 Site Under Construction 🚧</h1>
      <p style={paragraphStyle}>
      Thank you for visiting! Come back later to see my work! ✨
      </p>
    </div>
  );
};

export default UnderConstruction;