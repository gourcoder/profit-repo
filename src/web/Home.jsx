import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
// import TopBar from "./TopBar";
import Social from "./Social";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { FaChartLine, FaGlobe, FaLightbulb, FaRupeeSign, FaTradeFederation, FaUser, FaUserTie } from "react-icons/fa";
import ReadMore from "./ReadMore";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [read,setRead]=useState(false)
  const sectionRef = useRef(null);
  const location = useLocation();
  const inforef=useRef(null);
  useEffect(() =>{
    if (location.state && location.state.scroll === sectionRef.current.id) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    
    gsap.fromTo(
      "[data-trigger]",
      { opacity: 0, y: 90 },
      {
        opacity: 1,
        y: 0,
        ease:"power1.out",
        scrollTrigger: {
          trigger: "[data-trigger]",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".box_main",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease:"power1.out",
        scrollTrigger: {
          trigger: ".box_main",
          start: "top 70%",
          end: "top 40%",
          scrub: true,
          // markers: true,
        },
      }
    );

    gsap.fromTo(
      ".blockprods",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        duration: 2,
        y: 0,
        ease:"power1.out",
        scrollTrigger: {
          trigger: ".blockprods",
          start: "top 70%",
          end: "top 40%",
          scrub: true,
          // markers: true,
        },
      }
    );
  }, [location]);
  const gotoform=()=>{
    inforef.current.scrollIntoView({ behavior: "smooth" });  }
  return (
    <>
      {read?<ReadMore setRead={setRead}/>:<></>}
      {/* Top Bar */}
      {/* <TopBar /> */}
      {/* Header Section */}
      <div className="header_section">
        <NavBar sectionRef={sectionRef} />
        <div className="header_left">
          <div className="banner_main ">
            <h1
              className=" animated animatedFadeInUp fadeInUp banner_taital"
              data-wow-delay="0.1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              {" "}
              ALGO TRADE <br /> WEALTH UPGRADES
            </h1>
            <p
              className="banner_text  animated animatedFadeInUp fadeInUp  mt-3"
              style={{
                visibility: "visible",
                animationDelay: "0.5s",
                animationName: "fadeInUp",
              }}
            >
              Profitology ,provide AI based technology for support automate
              trading, execute numbers of orders although within properly
              risk management.
            </p>
            <div className="btn_main">
              <div className="more_bt ">
                <Link onClick={()=>setRead(true)}>Read More </Link>
              </div>
              <div className="more_bt">
                <Link to="/user/login">Get started</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header_right">
          <img
            src="/images/banner-img.svg"
            className="banner_img"
            alt="bannerimg"
          />
        </div>
      </div>
      {/* simply connect */}
      <div className="container" id="pro">
        <div className="row cnt_trd_algo" style={{paddingTop:"30px"}}>
          
          <div
            className="col-lg-5"
          >
            <div className="s_l_block" data-trigger>
              <h2
                className="sct_title what_taital"
                id="what_title_text"
                style={{ textAlign: "left" }}
              >
                A Smarter Way To Trade <br /> With Profitology Algo <br /> Like
                A Pro <br />
              </h2>
              <div className=""  data-trigger>
                <img
                  src="images/handshaking.png"
                  alt="Human and Robot are handshaking"
                  className="card-img-top"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7" data-trigger>
            <div className="s_r_block row p-0">
              <div className="col-sm-12 col-md-6 mb-3 block_point ">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/risk.jpeg"
                    alt="A Man is doing technical analysis on Stock Market"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2 simply-points">
                  Risk Management
                </h6>
                <p className="pnt_cnt text-center">
                  Choose your risk level for each strategy you follow.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/lock.jpeg"
                    alt="Algo Trading Wala software doing Backtesting"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2 simply-points">Security</h6>
                <p className="pnt_cnt text-center">
                  Our Platform works without direct access to your trading
                  account to access your fund, it is totally in your control .
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/emotionless.jpeg"
                    alt="Algo Trading Wala helping a man to eliminate emotions in trading"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2 simply-points">
                  Emotionless Trading
                </h6>
                <p className="pnt_cnt text-center">
                  To minimize the emotional strain on traders, algo trading
                  systems keep their emotions in control and allow them to
                  follow a strategy more easily. Best & Pre-tested Profitable
                  Strategies with Real Time Execution and Zero Latency.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/handrobohum.jpeg"
                    alt="Robot helping human to quick start"
                    className="w-50 rounded"
                  />
                </div>

                <h6 className="text-center mt-2 simply-points">
                  Easy to Start
                </h6>
                <p className="pnt_cnt text-center ">
                  Algo trading is programmed to take trades on your behalf
                  according to predetermined set of rules and automatically
                  updated in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-12" data-trigger>
            <div className="s_r_block row p-0 ">
              <div className="col-sm-12 col-md-4 mb-3 block_point ">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/realtimeexe.jpeg"
                    alt="A Man is doing technical analysis on Stock Market"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2 simply-points">
                  Real Time Execute
                </h6>
                <p className="pnt_cnt text-center">
                  Experience instant, real-time execution with Profitology's
                  advanced algorithms. Stay ahead of the market with trades that
                  are executed the moment conditions are met. Profitology
                  ensures your strategies are always on point with precise,
                  real-time action.
                </p>
              </div>
              <div className="col-sm-12 col-md-4 mb-3 block_point ">
                <div
                  className="d-flex flex-lg-row flex-flow justify-content-center"
                  data-trigger
                >
                  <img
                    src="images/climbingstairs.jpeg"
                    alt="A Man is doing technical analysis on Stock Market"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2 simply-points">
                  Help To Achieve Goals
                </h6>
                <p className="pnt_cnt text-center">
                  Profitology empowers you to reach your trading goals with
                  precision and confidence. Leverage our smart algorithms to
                  stay on track and achieve consistent success. Turn your
                  trading ambitions into reality with Profitology’s goal-driven
                  strategies.
                </p>
              </div>
              <div className="col-sm-12 col-md-4 mb-3 block_point" >
                <img src="images/bars.png" className="bars" alt=""  />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section */}

      <div className="what_we_do_section layout_padding pb-9"  >
        <div className="container">
          <h1 className="what_taital">How To Use Profitology Algo</h1>
          <p className="what_text">Easy Steps to take a trade ....</p>
          <div className="what_we_do_section_2">
            <div className="row">
            <div className="col-lg-1 col-sm-2"  ></div>
              <div className="col-lg-2 col-sm-4"  >
                <div className="box_main">
                  <div className="icon_1" >
                    <FaUser className="fa_track"/>
                  </div>
                  <h3 className="accounting_text">Register</h3>
                  <p className="lorem_text">Register with Profitology </p>
                  <div className="moremore_bt_1">
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-4"  >
                <div className="box_main">
                  <div className="icon_1" >
                    <FaRupeeSign className="fa_track"/>
                  </div>
                  <h3 className="accounting_text">Subscription</h3>
                  <p className="lorem_text">Choose Subscription Plan</p>
                  <div className="moremore_bt_1">
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-4"  >
                <div className="box_main">
                  <div className="icon_1" >
                    <FaUserTie className="fa_track"/>
                  </div>
                  <h3 className="accounting_text">Brokers</h3>
                  <p className="lorem_text">Add Your Broker</p>
                  <div className="moremore_bt_1">
                    
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-4"  >
                <div className="box_main">
                  <div className="icon_1" >
                    <FaChartLine className="fa_track"/>
                  </div>
                  <h3 className="accounting_text">Strategies</h3>
                  <p className="lorem_text">Choose Strategies </p>
                  <div className="moremore_bt_1 ">
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4"  >
                <div className="box_main">
                  <div className="icon_1" >
                    <FaGlobe icon="fa-solid fa-lightbulb" className="fa_track" />
                  </div>
                  <h3 className="accounting_text">Start Trading</h3>
                  <p className="lorem_text">  Get Started </p>
                  <div className="moremore_bt_1 ">
                    
                  </div>
                </div>
              </div>
            </div>
            {/* our core products */}
            <section
              className="our_products"
              id="our_products"
              ref={sectionRef}
            >
              <h1 className="what_taital">Our Products</h1>
              <div className="col-lg-12" data-trigger>
                <div className="s_r_block row pt-1 ">
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform}>
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/equity1.png"
                        alt="A Man is doing technical analysis on Stock Market"
                        className="w-50 rounded"
                      />
                    </div>
                    <h6 className="text-center mt-2 simply-points">Equity</h6>
                    <p className="pnt_cnt text-center">
                      We employ sophisticated algorithms to analyze market
                      trends and optimize your equity investments for growth and
                      stability.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform}>
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/commodity.png"
                        alt="Algo Trading Wala software doing Backtesting"
                        className="w-50 rounded"
                      />
                    </div>
                    <h6 className="text-center mt-2 simply-points">
                      Commodity
                    </h6>
                    <p className="pnt_cnt text-center">
                      Our algorithmic trading strategies in the commodities
                      market help you capitalize on market opportunities and
                      diversify your portfolio.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform}>
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/investment.png"
                        alt="Algo Trading Wala helping a man to eliminate emotions in trading"
                        className="w-50 rounded"
                      />
                    </div>
                    <h6 className="text-center mt-2 simply-points">
                      Mutual Funds
                    </h6>
                    <p className="pnt_cnt text-center">
                      Our algorithms assist in selecting the best mutual funds
                      based on your investment goals and risk tolerance profile,
                      ensuring a balanced and profitable portfolio.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform}>
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/loan.png"
                        alt="Robot helping human to quick start"
                        className="w-50 rounded"
                      />
                    </div>

                    <h6 className="text-center mt-2 simply-points">Loan</h6>
                    <p className="pnt_cnt text-center ">
                      We use advanced AI based technology compare loan products
                      from various lenders, ensuring you get the best rates and
                      best terms to suit your needs. Whether you need personal,
                      business, home, education, car, mortgage loans etc.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform} >
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/business-insurance.png"
                        alt="Robot helping human to quick start"
                        className="w-50 rounded"
                      />
                    </div>

                    <h6 className="text-center mt-2 simply-points">
                      Insurance
                    </h6>
                    <p className="pnt_cnt text-center ">
                      Our data-driven approach to insurance planning ensures
                      that you have the right coverage to protect your assets
                      and loved ones, offering peace of mind and security.
                    </p>
                  </div>
                  <div className="col-sm-12 col-md-4 mb-3 block_point blockprods" onClick={gotoform}>
                    <div
                      className="d-flex flex-lg-row flex-flow justify-content-center boxproducts"
                      data-trigger
                    >
                      <img
                        src="images/training.png"
                        alt="training"
                        className="w-50 rounded"
                      />
                    </div>

                    <h6 className="text-center mt-2 simply-points">
                      Stock Market Training
                    </h6>
                    <p className="pnt_cnt text-center ">
                      We are provide online/offline stock market training in
                      India, with basic to advance level.All type of analysis
                      like Fundamental, Technical, Chart, Pattern, Candle
                      formation, Option strategies, including with proper Risk
                      Management Expertise.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
            <div className="what_we_do_section">
            <section ref={inforef}>
              <div
                  className="container p-1 "
                  style={{ backgroundColor: "#170B3B" }}
                  id="callback_form"
                >
                  <div className="text-center mb-1">
                    <h4 className="text-white">Get a Call Back</h4>
                    <p className="text-white-50">
                      Fill out the form below and get a call back
                    </p>
                  </div>

                  <form method=" "  name=" " >
                    <div className="row ">
                      <div className="col-xl-3 col-md-6 p-2">
                        <input
                          name="Name"
                          type="text"
                          autoComplete="name"
                          required
                          placeholder="Full Name"
                          className="form-control"
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 p-2">
                        <input
                          name="Email"
                          type="email"
                           autoComplete="Email"
                          required
                          placeholder="Email Address"
                          className="form-control"
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 p-2">
                        <input
                          name="Mobile"
                          type="tel"
                           autoComplete="Mobile"
                          required
                          placeholder="Mobile No."
                          className="form-control"
                        />
                      </div>
                      <div className="col-xl-3 col-md-6 p-2">
                        <input
                          name="Message"
                          type="text"
                           autoComplete="Message"
                          required
                          placeholder="Message"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="text-center mt-2 ">
                      <button
                        type="submit"
                        name="Submit"
                        className="btn btn-primary btn-md"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
            </section>
            </div>
      {/* Client Section*/}

      <div className="client_section layout_padding" id="clientsection">
        <div className="container">
          
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner mt-5">
              <div className="carousel-item active">
                
                <h1 className="what_taital mt-2">what Our Client Says</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img
                        src="/images/round-1.png"
                        className="round_1"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/malecarousel.png"
                        className="image_11"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/round-2.png"
                        className="round_2"
                        alt="images"
                      />
                    </li>
                  </ul>
                  <h4>Mr. Shyam</h4>
                  <p className="dummy_text">
                      Profitology’s team is top-notch. They provided clear, actionable advice that’s helped our grow our wealth significantly.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="what_taital">what is Our Client Says</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img
                        src="/images/round-1.png"
                        className="round_1"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/femalecarousel.png"
                        className="image_11"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/round-2.png"
                        className="round_2"
                        alt="images"
                      />
                    </li>
                  </ul>
                  <h4>Prachi</h4>
                  <p className="dummy_text">
                      Profitology turned my financial goals into reality. Their guidance is always spot-on and tailored to my unique needs
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <h1 className="what_taital">what is our clients Says</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img
                        src="/images/round-1.png"
                        className="round_1"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/malecarousel.png"
                        className="image_11"
                        alt="images"
                      />
                    </li>
                    <li>
                      <img
                        src="/images/round-2.png"
                        className="round_2"
                        alt="images"
                      />
                    </li>
                  </ul>
                  <h4>Neeraj</h4>
                  <p className="dummy_text">
                  I’ve never felt more confident in my financial decisions since partnering with Profitology. They truly care about their clients’ success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Social />
    </>
  );
}
