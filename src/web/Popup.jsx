import React from 'react';
import Confetti from 'react-confetti';
import { Fa500Px, FaClosedCaptioning, FaCross, FaWindowClose } from 'react-icons/fa';
import { useWindowSize } from 'react-use';

const Popup = ({ onClose }) => {
  const { width, height } = useWindowSize();
  
  return (
    <div style={styles.overlay}>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={150}
        gravity={0.2}
        colors={['#ff0', '#f0f', '#0ff', '#0f0', '#00f']}
      />
      <div id="inner_box" style={styles.popup}>
        <div>
          <img src="/images/logo.svg" style={styles.logo} alt="logoimg" />
        </div>
        <h2>Welcome to Profitology</h2>
        <button onClick={onClose} style={styles.button}><FaWindowClose style={{margin:"0px"}}/></button>
      </div>
    </div>
  );
};



const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    padding: '10px', 
  },
  popup: {
    width: '90%',
    maxWidth: '400px', 
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '4vw', 
    textTransform: 'uppercase',
    position:"relative"
  },
  logo: {
    height: '30vw', 
    maxHeight: '200px',
    mixBlendMode: 'color-burn',
  },
  button: {
    margin:'0px',
    padding: '0px',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '2vw', 
    maxWidth: '100px', 
    position:"absolute",
    right:"10px",
    top:"10px",
    background:"transparent"
  },
};

export default Popup;
