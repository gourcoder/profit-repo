import { Link, Outlet } from "react-router-dom"

export function Register() {
    return <>
        <div className="contact_section layout_padding">
            <div className="container-fluid">
                <h1 className="what_taital">User Registeration</h1>

                <div className="contact_section2">
                    <div className="row">
                        <div className="col-md-12 padding_0">
                            <div className="mail_section">

                                <input type="text" className="mail_text_1" placeholder="Your Name" required />

                                <input type="text" className="mail_text_1" placeholder="Mobile Number" required />

                                <input type="email" className="mail_text_1" placeholder="Email" name="Email" required />

                                <input type="password" className="mail_text_1" placeholder="Password" required />

                                <div className="send_bt btn btn-success">Register</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function Login() {
    return <>
        <div className="contact_section layout_padding">
            <div className="container-fluid">
                <h1 className="what_taital">User Login</h1>

                <div className="contact_section2">
                    <div className="row">
                        <div className="col-md-12 padding_0">
                            <div className="mail_section">
                                <input type="email" className="mail_text_1" placeholder="Email" name="Email" required />

                                <input type="password" className="mail_text_1" placeholder="Password" required />

                                <div className="send_bt btn btn-success">Login</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function RegLoginCommon() 
{
    return <>
        <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9 ">                    
                    <div className="card o-hidden border-0 shadow-lg my-5">                   
                        <div class="card-header">
                            <div className="text-center mt-3">
                                <Link to="/user/register"><b className="btn-sm btn-success">Register</b></Link>
                                &nbsp;
                                <Link to="/user/login"><b className="btn-sm btn-info">Login</b></Link>
                            </div>
                        </div>
                        <div className="card-body p-0 log-card">
                            <Link to="/" title="Back">
                                <b className="backlink"><i class="fa-solid fa-arrow-left"></i></b>
                            </Link>
                            <div className="row ">
                                <div className="col-lg-12 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-12">
                                    <div className="p-5 ">
                                        <Outlet />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}