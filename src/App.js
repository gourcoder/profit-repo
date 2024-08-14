import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./web/Home";
import About from "./web/About";
import Algo from "./web/Algo";
import Pricing from "./web/Pricing";
import Contact from "./web/Contact";
import ReadMore from "./web/ReadMore";
import Policy from "./web/Policies";
import ScrollTop from "./web/ScrollTop.jsx"
// import { RegLoginCommon, Register, Login } from "./web/Login";
import WrongUser from "./web/WrongUser";
import WrongURL from "./web/WrongURL";
import AdminMain from "./admin/AdminMain";
import AdminDashboard from "./admin/AdminDashBoard";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Popup from "./web/Popup";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { RegLoginCommon, Register, Login } from "./web/LoginH";
import { FaAngleDown, FaDropbox } from "react-icons/fa";
export default function App() {
  const [showPopup, setShowPopup] = useState(false);
  const { width, height } = useWindowSize();
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && (
        <>
          <Popup onClose={closePopup} />
        </>
      )}
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/algo" element={<Algo />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/" element={<RegLoginCommon />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/wronguser" element={<WrongUser />} />
        <Route path="/admin/" element={<AdminPrivateRoute />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<WrongURL />} />
      </Routes>

      <div className="footer_section layout_padding">
        <div className="container-fluid position-relative">
          <Footer />

          {/* collapse */}
          <div className="container cont_disclaimer text-center">
            <div className="disclaimer-button-wrapper">
              <button
                type="button"
                className="text-danger"
                data-toggle="collapse"
                data-target="#disclaimer"
                aria-expanded="false"
                aria-controls="disclaimer"
              >
                DISCLAIMER <FaAngleDown />
              </button>
            </div>

            <div id="disclaimer" className="collapse disclaimer-collapse">
              <div className="disclaimer_section">
                <div className="disclaimer_text">
                  <p>
                    PROFITOLOGY is an advanced algotrading platform seamlessly
                    integrated with TradingView and custom strategies, tailored
                    for retail traders and investors. It offers an API
                    connection to brokers, but it's important to consult a
                    financial advisor before trading or investing, as
                    PROFITOLOGY is not responsible for any losses due to market
                    volatility or platform issues. We do not offer trading tips
                    or investment advice; our services are limited to the
                    development, deployment, and maintenance of automated
                    trading applications. All subscription fees are
                    non-refundable, and past performance does not guarantee
                    future results. Investment values may fluctuate based on
                    market conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="copyright_section">
            <div className="copyright_text">
              Copyright 2024 All Right Reserved By{" "}
              <a href="http://www.techcoupling.in/" target="_blank">
                TechCoupling Solutions LLP
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const AdminPrivateRoute = () => {
  const loginUserRole = useSelector((store) => store.user.value.role);
  return loginUserRole != undefined && loginUserRole == "admin" ? (
    <AdminMain />
  ) : (
    <Navigate to="/wronguser" />
  );
};

// const ClientPrivateRoute = ()=>
//   {
//       const loginUserRole = useSelector(store=>store.user.value.role)
//       return loginUserRole!=undefined && loginUserRole=='client' ? <AdminMain/> : <Navigate to="/wronguser"/>
//   }
