import { Link } from "react-router-dom";
import NavBar from "./NavBar";
// import TopBar from "./TopBar";
import Social from './Social';


export default function Home() {
  return (
    <>
      {/* Top Bar */}
      {/* <TopBar /> */}
      {/* Header Section */}
      <div className="header_section">
          <NavBar/>
        <div className="header_left">
          <div className="banner_main">
            <h1 className="banner_taital">
            ALGO TRADES <br/>
            WEALTH UPGRADES
            </h1>
            <p className="banner_text">
              Algorithmic trading software, often referred to as algo trading
              software, represents a pivotal advancement in financial markets
            </p>
            <div className="btn_main">
              <div className="more_bt">
                <Link to="/readmore">Read More </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="header_right">
          <img src="/images/banner-img.png" className="banner_img" alt="bannerimg"/>
        </div>
      </div>
      {/* Service Section */}
      <div className="what_we_do_section layout_padding">
        <div className="container">
          <h1 className="what_taital">Trading Flow</h1>
          <p className="what_text">Easy Steps to take a trade ....</p>
          <div className="what_we_do_section_2">
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i class="fa-sharp fa-solid fa-user text-danger"></i>
                  </div>
                  <h3 className="accounting_text">Register</h3>
                  <p className="lorem_text">Register with Profitology </p>
                  <div className="moremore_bt_1">
                    <Link href="#">
                      Learn More <i class="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i class="fa-solid fa-indian-rupee-sign text-danger"></i>
                  </div>
                  <h3 className="accounting_text">Take Subscription</h3>
                  <p className="lorem_text">Choose Subscription Plan</p>
                  <div className="moremore_bt_1">
                    <Link href="#">
                      Learn More <i class="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i class="fa-solid fa-user-tie text-danger"></i>
                  </div>
                  <h3 className="accounting_text">Brokers</h3>
                  <p className="lorem_text">Add Your Broker</p>
                  <div className="moremore_bt_1">
                    <Link href="#">
                      Learn More <i class="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6">
                <div className="box_main">
                  <div className="icon_1" style={{ fontSize: "50px" }}>
                    <i class="fa-solid fa-chart-line text-danger"></i>
                  </div>
                  <h3 className="accounting_text">Select Strategies</h3>
                  <p className="lorem_text">Choose Strategies </p>
                  <div className="moremore_bt_1">
                    <Link href="#">
                      Learn More <i class="fa-brands fa-youtube"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Client Section */}
      <div className="client_section layout_padding">
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
                <h1 className="what_taital">what is syas our clients</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img src="/images/round-1.png" className="round_1" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/img-11.png" className="image_11" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/round-2.png" className="round_2" alt="images"/>
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
                <h1 className="what_taital">what is syas our clients</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img src="/images/round-1.png" className="round_1" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/img-11.png" className="image_11" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/round-2.png" className="round_2" alt="images"/>
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
                <h1 className="what_taital">what is syas our clients</h1>
                <div className="client_section_2 layout_padding">
                  <ul>
                    <li>
                      <img src="/images/round-1.png" className="round_1" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/img-11.png" className="image_11" alt="images"/>
                    </li>
                    <li>
                      <img src="/images/round-2.png" className="round_2" alt="images"/>
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
        <Social/>
      </div>
      
    </>
  );
}
