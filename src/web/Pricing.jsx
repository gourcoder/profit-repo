import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Popup from './PricingPop';
// import TopBar from './TopBar';
import Social from './Social';
import { useNavigate } from 'react-router-dom';

export default function Pricing() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate=useNavigate(null)
  useEffect(()=>{
    setShowPopup(true)
  },[])
  const closePopup = () => {
    setShowPopup(false);
    navigate("/")
  };
    return <>
        {showPopup && <Popup onClose={closePopup}/>}
        <div className="header_section">
                <NavBar />                
            <div className="header_left">
            </div>
        </div>
        <div className="services_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">Pricing</h1>
            
          </div>          
        </div>
      </div>
      <Social/>
    </div>
    </>
}