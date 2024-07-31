import { Link, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default function About() {
  return (
    <>
      {/* Top Bar */}
      <TopBar />
      {/* Header Section */}
      <div className="header_section">
        <div className="header_left">
          <NavBar />
        </div>
      </div>
      <div className="services_section layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="services_taital">WELCOME TO PROFITOLOGY</h1>
              <p className="services_text">
                PROFITOLOGY is a sophisticated algotrading platform, uniquely
                integrated with TradingView and custom strategies, offering a
                seamless API connection to your broker. Tailored for retail
                traders and investors, our platform is dedicated to elevating
                wealth management practices. While we strive to ensure flawless
                operation, we recommend consulting a financial advisor before
                trading or investing through our platform. Please be aware that
                PROFITOLOGY cannot be held accountable for any losses resulting
                from market volatility or any platform-related issues.{" "}
              </p>
              
              <div className="moremore_bt">
                <Link to="/readmore">Read More </Link>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <img src="images/img-1.png" className="image_1" alt="img-1.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
