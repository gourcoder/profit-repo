import NavBar from './NavBar';
import TopBar from './TopBar';
import { Link } from "react-router-dom";

export default function Contact() {
    return <>
        {/* Top Bar */}
        <TopBar/>
        {/* Header Section */}
        <div className="header_section">
            <div className="header_left">
                <NavBar />                
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
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="400" frameborder="0"  allowfullscreen=""></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
}