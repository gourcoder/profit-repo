import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './nav.css';
const Header=({sectionRef})=>{
    const navigate=useNavigate()
    const scrollTosection=()=>{
      if(sectionRef===undefined){
        navigate("/",{state:{scroll:"our_products"}});
      }
      else
        sectionRef.current.scrollIntoView({behavior:"smooth"});
      }

    return <div className="site-header header header-transparent webNavBar navbar-fixed-top">
        <nav className="navbar navbar-expand-lg">
          <div className="logo"><Link to="/"><img src="/images/logo.svg" alt="logoimg"/></Link></div>
          <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <div className="dropdown" >
                    <button style={{background:"transparent",fontWeight:"600"}}
                      dropdata-mdb-ripple-init data-mdb-dropdown-init
                        className="nav-link"
                        id="dropdownMenuButton"
                        type="button"
                        data-mdb-toggle="dropdown" onClick={scrollTosection}>
                          products
                      </button>
                    </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item ">
                <div className="nav_btn_animate">
                <Link className="nav-link" id="login-link-btn" to="/user/login">Login</Link>
                </div>
              </li>
              <li className="nav-item ">
                <div className="nav_btn_animate">
                <a href="https://cutt.ly/VezcJoaa" target="_blank" className="nav-link" id="demat-link-btn" to="">Open Demat</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
  
    </div>
}




export default Header