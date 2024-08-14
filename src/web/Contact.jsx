import NavBar from "./NavBar";
// import TopBar from './TopBar';
import { Link } from "react-router-dom";
import Social from "./Social";

export default function Contact() {
  return (
    <>
      {/* Top Bar */}
      {/* <TopBar/> */}
      {/* Header Section */}
      <div className="header_section">
                <NavBar />                
            
        </div>
      <div className="contact_section mt-3">
        <div className="container-fluid">
          <h1 className="what_taital">Contact us</h1>
          <div className="contact_section2">
            <div className="row">
              <div className="col-md-6 padding_left_0">
              <section>
              <div
                  className="container p-1 "
                  style={{ backgroundColor: "rgb(106,8,158)" }}
                  id="callback_form"
                >
                  <div className="text-center mb-1">
                    <h4 className="text-white">Get a Call Back</h4>
                    <p className="text-white-50">
                      Fill out the form below and get a call back
                    </p>
                  </div>

                  <form method="" name="" className="text-center">
                    <div className="col-xl-12 col-lg-6 col-md-3 text-center">
                    <div className="row p-2 justify-content-center">
                      <div className="col-xl-10 col-lg-12">
                        <input
                          name="Name"
                          type="text"
                          required
                          placeholder="Full Name"
                          className="form-control"
                        />
                      </div>
                      </div>
                      <div className="row p-2 justify-content-center">
                      <div className="col-xl-10 col-lg-12">
                        <input
                          name="Email"
                          type="email"
                          required
                          placeholder="Email Address"
                          className="form-control"
                        />
                      </div>
                      </div>
                      <div className="row p-2 justify-content-center">
                      <div className="col-xl-10 col-lg-12">
                        <input
                          name="Mobile"
                          type="tel"
                          required
                          placeholder="Mobile No."
                          className="form-control"
                        />
                      </div>
                      </div>
                      <div className="row p-2 justify-content-center">
                      <div className="col-xl-10 col-lg-12">
                        <input
                          name="Message"
                          type="text"
                          required
                          placeholder="Message"
                          className="form-control"
                        />
                      </div>
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
              <div className="col-md-6 padding_0">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.829890672891!2d73.7003519!3d24.560539899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a7b077be067b9%3A0xc7c29a15e6080d99!2sProfitology!5e0!3m2!1sen!2sin!4v1722594598663!5m2!1sen!2sin"
                    width="600"
                    height="400"
                    frameborder="0"
                    allowfullscreen=""
                    title="gmap"
                  ></iframe>
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
