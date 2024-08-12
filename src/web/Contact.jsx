import NavBar from './NavBar';
// import TopBar from './TopBar';
import { Link } from "react-router-dom";
import Social from './Social';


export default function Contact() {
    return <>
        {/* Top Bar */}
        {/* <TopBar/> */}
        {/* Header Section */}
        <div className="header_section">
                <NavBar />                
            <div className="header_left">
            </div>
        </div>
        <div className="contact_section layout_padding">
      <div className="container-fluid">
        <h1 className="what_taital">Contact us</h1>
        
        <div className="contact_section2">
          <div className="row">
            <div className="col-md-6 padding_left_0">
              <div className="mail_section">
                <input type="" className="mail_text_1" placeholder="Name" name="Name"/>
                <input type="" className="mail_text_1" placeholder="Phone Number" name="Phone Number"/>
                <input type="" className="mail_text_1" placeholder="Email" name="Email"/>
                <textarea className="massage_text" placeholder="Message" rows="5" id="comment" name="Message"></textarea>
                <div className="send_bt"><Link href="#">send</Link></div>
              </div>
            </div>
            <div className="col-md-6 padding_0">
              <div className="map-responsive">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.829890672891!2d73.7003519!3d24.560539899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476a7b077be067b9%3A0xc7c29a15e6080d99!2sProfitology!5e0!3m2!1sen!2sin!4v1722594598663!5m2!1sen!2sin" width="600" height="400" frameborder="0"  allowfullscreen="" title='gmap'></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Social/>
    </div>
    </>
}