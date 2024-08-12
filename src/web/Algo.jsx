import NavBar from './NavBar';
// import TopBar from './TopBar';
import Social from './Social';

export default function Algo() {
    return <>
        {/* Top Bar */}
        {/* <TopBar/> */}
        {/* Header Section */}
        <div className="header_section">
                <NavBar />                
            <div className="header_left">
            </div>
        </div>
        <div className="services_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1 className="services_taital">Strategies</h1>
            
          </div>          
        </div>
      </div>
      <Social/>
    </div>
    </>
}