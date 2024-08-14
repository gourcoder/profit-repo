import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          style={styles.scrollToTopBtn}
          className="scroll-to-top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;


const styles = {
    scrollToTopBtn: {
      position: 'fixed',
      bottom: '20px',
      right: '70px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      transition: 'opacity 0.3s, transform 0.3s',
      zIndex: 1000,
    }
  };
  