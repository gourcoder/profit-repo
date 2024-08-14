import { Link } from "react-router-dom";
import "./footer.css"
import { FaArrowAltCircleUP, FaFacebook,FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container pt-3 border-bottom">
          <div className="row d-flex justify-content-between">
            <div className="col-md-3 col-sm-12 mb-3 text-center">
                <img  src={"/images/logo.svg"} alt="" className="foot_logo"/>
            </div>
            <div className="col-md-9 col-sm-12 footer_keys" >
              <div className="col-md-3 col-sm-6 col-6 pt-2 float-left ">
                <h5 className="mb-2 font-weight-bold text-uppercase">
                  Other Links
                </h5>
                <ul className="list-group">
                  <li className="list-group-item text-danger bg-transparent border-0 p-0 mb-2">
                    <Link to={"/about"}> About Us</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to={"/policy"}>Privacy / Policies</Link>
                  </li>
                </ul>
              </div>
             
              <div className="col-md-3 col-sm-6 col-6 pt-2 float-left">
                <h5 className="mb-2 font-weight-bold text-uppercase">
                  CONNECT
                </h5>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href="https://www.facebook.com/profile.php?id=61551056345056&mibextid=ZbWKwL"
                      target="_blank"
                      className="p-2"
                      style={{marginLeft:"-50px"}}
                    >
                      <FaFacebook/> Facebook
                    </a>
                    <a
                      href="https://youtube.com/@theprofitology?si=w0YA7qZOc_m-y0a2"
                      target="_blank"
                      className="p-2"
                    >
                      <FaYoutube/> YouTube
                    </a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <a
                      href="https://www.instagram.com/profitologywebeliveinprofit?igsh=emxlaTl1ZjVlYnMz"
                      target="_blank"
                      className="p-2"
                      style={{marginLeft:"-50px"}}
                    >
                      <FaInstagram/> Instagram
                    </a>
                    <a
                      href="https://wa.me/919664143801"
                      target="_blank"
                      className="p-2"
                    >
                      <FaWhatsapp/> Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-sm-6 col-6 pt-2 float-left">
                <h5 className="mb-2 font-weight-bold text-uppercase">
                  CONTACT
                </h5>
                <ul className="list-group d-flex ">
                  <li className="list-group-item bg-transparent border-0 p-0 " style={{marginLeft:"-50px"}}>
                    <a className="p-2 mt-1"> +91 9664143801</a>  <a className="p-2">+91 7665533911</a>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-2 " style={{marginLeft:"-50px"}}>
                      Registered office - Udaipur, Rajasthan
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
