export default function TopBar() {
    return <>
        <div className="container-fluid ps-5 pe-0 d-none d-lg-block">
            <div className="row gx-0">
               
                <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0"><i className="fa fa-envelope me-2"></i>&nbsp;&nbsp;
                            <b>medatwal004@gmail.com</b>
                        </p>
                    </div>
                </div>

                <div className="position-relative d-inline-flex align-items-center bg-success text-white top-shape px-5">
                    <div className="me-3 pe-3 border-end py-2">
                    <p className="m-0"><i className="fa-brands fa-whatsapp"></i> &nbsp;&nbsp;<b>+91 96641 43801</b></p>
                    </div>
                </div>

                <div className="col-md-6 text-right text-lg-end">
                <div className="position-relative d-inline-flex align-items-center top-shape px-5">
                    <b> Follow Us : </b> &nbsp;&nbsp; 
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0">
                        <i className="fa-brands fa-facebook"></i>
                        </p>
                    </div> &nbsp;&nbsp;
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0">
                        <i className="fa-brands fa-instagram"></i>
                        </p>
                    </div> &nbsp;&nbsp;
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0">
                        <i className="fa-brands fa-linkedin"></i>
                        </p>
                    </div> &nbsp;&nbsp;   
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0">
                        <i className="fa-brands fa-youtube"></i>
                        </p>
                    </div> &nbsp;&nbsp;                    
                </div>
                </div>
                
            </div>
        </div>
    </>
}