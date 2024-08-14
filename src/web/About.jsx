import { Link } from "react-router-dom";
import NavBar from "./NavBar";
// import TopBar from "./TopBar";
import Social from "./Social";
import { useEffect } from "react";

export default function About() {
  useEffect(()=>{
    window.scrollTo({top:0,behaviour:"smooth"})
  },[])
  return (
    <>
      {/* Top Bar */}
      {/* <TopBar /> */}
      {/* Header Section */}
      <div className="header_section">
        <NavBar />
        <div className="header_left"></div>
      </div>
      <div className="services_section layout_padding mt-2">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1 className="services_taital">WELCOME TO PROFITOLOGY</h1>
              <p className="services_text">
                Profitology a fintech company, we are dedicated to empowering
                our clients with the financial tools and knowledge they need to
                navigate the complex world of finance. Founded with a mission to
                simplify and enhance your financial journey, we specialize in a
                comprehensive range of services including share market
                investments, AI based trading, equity management, commodity
                trading,loan facilitation, insurance planning, mutual fund
                investments and stock market training program in india.
              </p>
              <h1 className="services_taital mt-2">
                Our Commitment to Technology and Algorithms Trading.
              </h1>
              <p className="services_text">
                In today’s fast-paced financial landscape, leveraging advanced
                technology is crucial for making informed investment decisions.
                At Profitology, we integrate state-of-the-art algorithms and
                data analytics to provide our clients with a competitive edge.
                Our proprietary algorithms analyze vast amounts of market data
                in real-time, identifying trends and opportunities that might
                otherwise go unnoticed.
                <br />
                By utilizing machine learning and artificial intelligence, our
                systems continuously improve and adapt to changing market
                conditions, ensuring that our clients receive the most accurate
                and up-to-date data. These technologies allow to your specific
                financial goals and risk tolerance, optimizing your investment
                strategy for maximum returns.
              </p>
              <h1 className="services_taital mt-2">OUR SERVICES </h1>
              <ul className="unordered-list">
                <li className="p-2">
                  <span className="services_key_points"> Stock Market </span>
                  <br />
                  <span className="services-text">
                    Our algorithm-driven insights help you make smart investment
                    decisions in the stock market, maximizing returns while
                    minimizing risks.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">Equity</span>
                  <br />
                  <span className="services-text">
                    We employ sophisticated algorithms to analyze market trends
                    and optimize your equity investments for growth and
                    stability.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">Commodities</span>
                  <br />
                  <span className="services-text">
                    Our algorithmic trading strategies in the commodities market
                    help you capitalize on market opportunities and diversify
                    your portfolio.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">Mutual Funds</span>
                  <br />
                  <span className="services-text">
                    Our algorithms assist in selecting the best mutual funds
                    based on your investment goals and risk tolerance profile,
                    ensuring a balanced and profitable portfolio.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">
                    Stock Market Training
                  </span>
                  <br />
                  <span className="services-text">
                    We are provide online/offline stock market training in
                    India, with basic to advance level.All type of analysis like
                    Fundamental, Technical, Chart, Pattern, Candle formation,
                    Option strategies, including with proper Risk Management
                    Expertise.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">Loans</span>
                  <br />
                  <span className="services-text">
                    {" "}
                    We use advanced AI based technology compare loan products
                    from various lenders, ensuring you get the best rates and
                    best terms to suit your needs. Whether you need personal,
                    business, home, education, car, mortgage loans etc.
                  </span>
                </li>
                <li className="p-2">
                  <span className="services_key_points">Insurance</span>
                  <br />
                  <span className="services-text">
                    {" "}
                    Our data-driven approach to insurance planning ensures that
                    you have the right coverage to protect your assets and loved
                    ones, offering peace of mind and security.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mt-5">
              <div>
                <img
                  src="images/img-1.png"
                  className="image_1"
                  alt="img-1.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Social />
      </div>
    </>
  );
}
