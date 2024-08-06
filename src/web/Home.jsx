import { Link } from "react-router-dom";
import NavBar from "./NavBar";
// import TopBar from "./TopBar";
import Social from "./Social";

export default function Home() {
  return (
    <>
      {/* Top Bar */}
      {/* <TopBar /> */}
      {/* Header Section */}
      <div className="header_section">
        <NavBar />
        <div className="header_left">
          <div className="banner_main">
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
                <Link to="/readmore">Read More </Link>
              </div>
              <div className="more_bt">
                <Link to="/user/login">Get started</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header_right">
          <img
            src="/images/banner-img.png"
            className="banner_img"
            alt="bannerimg"
          />
        </div>
      </div>
      {/* simply connect */}
      <div className="container pb-5" id="pro">
        <div className="row cnt_trd_algo">
          <div
            className="col-lg-5"
            style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
          >
            <div className="s_l_block">
              <h2
                className="sct_title what_taital"
                style={{ textAlign: "left" }}
              >
                A Smarter Way To <br /> Trade With Profitology Algo <br /> Like
                A Pro <br />
              </h2>
              <div className="">
                <img
                  src="images/handshaking.png"
                  alt="Human and Robot are handshaking"
                  className="card-img-top"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="s_r_block row pt-5 ">
              <div className="col-sm-12 col-md-6 mb-3 block_point ">
                <div className="d-flex flex-lg-row flex-flow justify-content-center">
                  <img
                    src="images/risk.jpeg"
                    alt="A Man is doing technical analysis on Stock Market"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2">Risk Management</h6>
                <p className="text-center">
                  Choose your risk level for each strategy you follow.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div className="d-flex flex-lg-row flex-flow justify-content-center">
                  <img
                    src="images/lock.jpeg"
                    alt="Algo Trading Wala software doing Backtesting"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2">Security</h6>
                <p className="pnt_cnt text-center">
                  Our Platform works without direct access to your trading
                  account to access your fund, it is totally in your control .
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div className="d-flex flex-lg-row flex-flow justify-content-center">
                  <img
                    src="images/emotionless.jpeg"
                    alt="Algo Trading Wala helping a man to eliminate emotions in trading"
                    className="w-50 rounded"
                  />
                </div>
                <h6 className="text-center mt-2">Emotionless Trading</h6>
                <p className="pnt_cnt text-center">
                  To minimize the emotional strain on traders, algo trading
                  systems keep their emotions in control and allow them to
                  follow a strategy more easily. Best & Pre-tested Profitable
                  Strategies with Real Time Execution and Zero Latency.
                </p>
              </div>
              <div className="col-sm-12 col-md-6 mb-3 block_point">
                <div className="d-flex flex-lg-row flex-flow justify-content-center">
                  <img
                    src="images/handrobohum.jpeg"
                    alt="Robot helping human to quick start"
                    className="w-50 rounded"
                  />
                </div>

                <h6 className="text-center mt-2">Easy to Start</h6>
                <p className="pnt_cnt text-center">
                  Algo trading is programmed to take trades on your behalf
                  according to predetermined set of rules and automatically
                  updated in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service Section */}
      <div className="what_we_do_section layout_padding pb-9">
        <div className="container">
          <h1 className="what_taital">How To Use Profitology Algo</h1>
          <p className="what_text">Easy Steps to take a trade ....</p>
          <div className="what_we_do_section_2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i className="fa-sharp fa-solid fa-user"></i>
                  </div>
                  <h3 className="accounting_text">Register</h3>
                  <p className="lorem_text">Register with Profitology </p>
                  <div className="moremore_bt_1"></div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </div>
                  <h3 className="accounting_text">Take Subscription</h3>
                  <p className="lorem_text">Choose Subscription Plan</p>
                  <div className="moremore_bt_1"></div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i className="fa-solid fa-user-tie "></i>
                  </div>
                  <h3 className="accounting_text">Brokers</h3>
                  <p className="lorem_text">Add Your Broker</p>
                  <div className="moremore_bt_1"></div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i className="fa-solid fa-chart-line"></i>
                  </div>
                  <h3 className="accounting_text">Select Strategies</h3>
                  <p className="lorem_text">Choose Strategies </p>
                  <div className="moremore_bt_1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* our core products */}
      <div className="container">
        <div className="section-head text-center">
          <h2 className="title">Our core products for Traders</h2>
          <h5>
            <p
              className="fr_blk_cnt"
              style={{ color: "#362465", fontSize: "15px" }}
            >
              {" "}
              An unique blend of opportunities to generate capital gains and get
              the best of both worlds Intraday and Positional trading
            </p>
          </h5>
        </div>
        <div className="row sp60" style={{ marginBottom: "-2%" }}>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="icon-media">
                <img src="images/ATW/finance.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Diversification</h4>
                <p className="m-b0">
                  Use your funds across trades with different trading
                  strategies.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="icon-media">
                <img src="images/ATW/trading_3.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Risk Management</h4>
                <p className="m-b0">
                  Choose your risk level for each strategy you follow.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.3s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="">
                <img src="images/ATW/Unti.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Passive Income Strategies</h4>
                <p className="m-b0">
                  Utilize your Capital to generate a Second source of Income and
                  enjoy profits.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.4s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="icon-media">
                <img src="images/ATW/Security_.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Total Security</h4>
                <p className="m-b0">
                  Our Platform works without direct access to your funds.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.5s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="icon-media">
                <img src="images/ATW/skin_game.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Skin in the game</h4>
                <p className="m-b0">
                  Traders risk their own funds when providing trades for
                  copying.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-md-6 m-b60 wow fadeInUp"
            data-wow-delay="0.6s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <div className="icon-bx-wraper style-5 text-center">
              <div className="icon-media">
                <img src="images/ATW/user.png" alt="" />
              </div>
              <div className="icon-content">
                <h4 className="title">Synced Portfolio</h4>
                <p className="m-b0">
                  Align demat assets with the trader’s account in one click.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Client Section*/}
      <div classNameName="client_section layout_padding">
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
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h1 className="what_taital">what Our Client Says</h1>
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
                        src="/images/img-11.png"
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
                  <p className="dummy_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
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
                        src="/images/img-11.png"
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
                  <p className="dummy_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
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
                        src="/images/img-11.png"
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
                  <p className="dummy_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Social />
      </div>
    </>
  );
}
