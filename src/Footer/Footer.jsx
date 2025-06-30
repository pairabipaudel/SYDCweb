import React from 'react';
import facebook_icon from '../Assets/facebook_icon.png';

const Footer = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <div>
        <p>Contact Us:</p>
        <a 
          href="https://www.facebook.com/profile.php?id=61577156979683&sk=followers" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src={facebook_icon} 
            alt="Facebook" 
            style={{ width: '34px', height: '34px', cursor: 'pointer',border:'none' }} 
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
