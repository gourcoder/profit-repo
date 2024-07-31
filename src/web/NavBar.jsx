import { Link } from "react-router-dom";

export default function Header()
{
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo"><Link to="/"><img src="/images/logo.png" alt="logo"/></Link></div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/algo">Algo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item alert-success">
                <Link className="nav-link btn btn-primary" to="/user/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
  
    </>
}