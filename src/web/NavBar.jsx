import { Link } from "react-router-dom";
import './nav.css';
export default function Header()
{
    return <>
        <nav className="navbar navbar-expand-lg  bg-light">
          <div className="logo"><Link to="/"><img src="/images/logo.png" alt="logoimg"/></Link></div>
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
              <div className="dropdown">
                    <Link 
                        data-mdb-button-init data-mdb-ripple-init data-mdb-dropdown-init
                        className="nav-link"
                        id="dropdownMenuButton"
                        type="button"
                        data-mdb-toggle="dropdown">
                          products
                      </Link>
                      <ul className="dropdown-menu" id="dropdata-mdb-ripple-init data-mdb-dropdown-init">
                        <li><Link className="dropdown-item">EQUITY</Link></li>
                        <li><Link className="dropdown-item">COMMODITY</Link></li>
                        <li><Link className="dropdown-item">MUTUAL FUND</Link></li>
                        <li><Link className="dropdown-item">LOAN</Link></li>
                        <li><Link className="dropdown-item">INSURANCE</Link></li>
                        <li><Link className="dropdown-item">STOCK MARKET TRAINING</Link></li>
                      </ul>
                    </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" id="login-link-btn" to="/user/login">Login</Link>
              </li>
              <li className="nav-item ">
                <a href="https://cutt.ly/VezcJoaa" className="nav-link" id="demat-link-btn" to="">Open Demat</a>
              </li>
            </ul>
          </div>
        </nav>
  
    </>
}