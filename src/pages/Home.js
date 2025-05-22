import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Medicine Verification System</h1>
      <p>Welcome to the medicine verification portal</p>
      
      <div style={{ marginTop: '30px' }}>
        <Link 
          to="/add" 
          style={{ 
            display: 'inline-block',
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Add Medicine
        </Link>
        
        <Link 
          to="/verify" 
          style={{ 
            display: 'inline-block',
            margin: '10px',
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
          }}
        >
          Verify Medicine
        </Link>
      </div>
    </div>
  );
}

export default Home;