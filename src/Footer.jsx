import { Link } from "react-router-dom";
import "./footer.css"
import { FaArrowAltCircleRight, FaFacebook,FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container pt-3 border-bottom">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3 text-center">
                <img className="foot_logo" src="./images/logo.png" alt="" />
            </div>
            <div className="col-md-9 col-sm-12 footer_keys" >
              <div className="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
                <h5 className="mb-4 font-weight-bold text-uppercase">
                  Other Links
                </h5>
                <ul className="list-group">
                  <li className="list-group-item text-danger bg-transparent border-0 p-0 mb-2">
                    <Link to={"/about"}> About Us</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to={"/policy"}>Privacy / Policies</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link></Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a></a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a></a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a></a>
                  </li>
                </ul>
              </div>
             
              <div className="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
                <h5 className="mb-4 font-weight-bold text-uppercase">
                  Connect
                </h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaFacebook/> Facebook
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaYoutube/> YouTube
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaInstagram/> Instagram
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href=""
                      target="_blank"
                    >
                      <FaWhatsapp/> Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="py-4 d-flex justify-content-center align-items-center">
                <a className="mr-4" href="../privacy.html">
                  Privacy &amp; terms
                </a>
                <a href="../sitemap.xml">Sitemap</a>
              </div>
            </div> */}
          </div>
        </div>
      </footer>
    </>
  );
}
