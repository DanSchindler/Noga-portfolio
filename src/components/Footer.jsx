import React from "react";
import '../App.css';
import facebookLogo from '/public/assets/icons/facebookLogo.svg';
import instagramLogo from '/public/assets/icons/instagramLogo.svg';

const Footer = () => {
  
  return (
    <div className="footer-container" style={styles.footerContainer}>
      <div style={styles.footerList}>
        <a href="https://www.instagram.com/nogarosner/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src={instagramLogo} alt="Instagram" style={styles.icon} />
        </a>
        <p style={styles.element}>nogarosner@gmail.com</p>
      </div>
    </div>
  );
};

const styles = {
    footerContainer: {
        width: '85%',
        padding: '20px 0',
        backgroundColor: '#fdfdfd',
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        padding: 0,
        backgroundColor: 'transparent', 
        marginBottom: '80px',
        marginTop: '50px',
    },
    footerList: {
        display: 'flex',
        justifyContent: 'center',
        width: '85%',
        margin: 'auto',
        gap: '20px',
        fontSize: '20px',
        fontWeight: 300,
        background: '#fdfdfd',
        borderRadius: '10px 10px 0 0',
        backgroundColor: 'transparent', 
        padding: '0',
        flexWrap: 'wrap',
    },
    element: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '16px',
        fontWeight: 300,
        display: 'block',
        paddingBottom: '0',
        margin: '0'
    },
    elementPhone: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '12px',
        fontWeight: 300,
        alignSelf: 'center',
        display: 'block',
        paddingBottom: '0',
        margin: '0'
    },
    icon: {
        width: '24px',
        height: '24px',
    },
    iconLink: {
        display: 'flex',
        alignItems: 'center',
    }
};

export default Footer;
