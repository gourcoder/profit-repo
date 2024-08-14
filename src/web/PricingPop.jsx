import React from 'react';
import Confetti from 'react-confetti';
import { FaWindowClose } from 'react-icons/fa';
import { useWindowSize } from 'react-use';

const PricePopup = ({ onClose }) => {
  const { width, height } = useWindowSize();
  
  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h1>COMING SOON</h1>
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
    position:"relative",
    border: `calc(0.08 * var(--m)) solid transparent`,
    borderTop: "none",
    letterSpacing: "2px",
    fontFamily: "Segoe UI Regular",
    background:"linear-gradient(#faa35cf2, #7112ee), linear-gradient(#121213 50%, rgba(18, 18, 19, 0.6) 80%, rgba(17, 17, 233, 0)),  linear-gradient(90deg, var(--orange), var(--yellow), var(--green), var(--blue), var(--purple), var(--pink), var(--red))",
    backgroundOrigin:"border-box",
    backgroundClip: "padding-box, border-box, border-box",
    backgroundSize: "200%",
    animation: "animate 2s infinite linear"
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




export default PricePopup;
