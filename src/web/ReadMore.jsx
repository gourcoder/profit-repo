// import { Link } from "react-router-dom";
// import TopBar from "./TopBar";
import Social from './Social';

import NavBar from './NavBar';
import { FaWindowClose } from 'react-icons/fa';
export default function Read({setRead}) {
  return <>
    <div style={styles.overlay}>
      <div className='container'>
        <div className="row justify-content-center bg-transparent p-3" style={{position:"relative"}}>
          <div className="col-xl-10 col-lg-12 col-md-9">
          <FaWindowClose onClick={()=>setRead(false)} style={{fontSize:"30px",position:"absolute",top:"0px",right:"-3%",zIndex:"3",cursor:"pointer",color:"white"}}/>
            <div className="card o-hidden border-0 shadow-lg">
              <p>
              Profitology ,provide AI based technology for support automate
              trading, execute numbers of orders although within properly
              risk management.Algorithmic trading software, often referred to as algo trading
                software, represents a pivotal advancement in financial markets.
                It leverages sophisticated algorithms to execute trades at
                speeds and frequencies impossible for human traders, offering
                efficiency and precision in market operations. By automating
                decision-making based on predefined strategies, algo trading
                software enables rapid analysis of vast amounts of market data,
                facilitating timely execution of trades across various asset
                classes. This technology not only enhances trading efficiency
                but also reduces human error and emotional bias, making it a
                cornerstone of modern financial strategies.
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
    
  </>
}
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
