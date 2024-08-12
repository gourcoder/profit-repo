import { Link } from "react-router-dom";
import {delUserData} from '../reduxconfig/UserSlice';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
export default function WrongURL() 
{
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(delUserData())
    },[])
    return <>
        <div className="container">
            {/* <!-- Outer Row --> */}
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9 ">                    
                    <div className="card o-hidden border-0 shadow-lg my-5">                   
                        <div class="card-header">
                          
                        </div>
                        <div className="card-body p-0 log-card">
                            <Link to="/" title="Back">
                                <b className="backlink"><i class="fa-solid fa-arrow-left"></i></b>
                            </Link>
                            <div className="row ">
                                <div className="col-lg-12 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-12">
                                    <div className="p-5 ">
                                    <div className="contact_section layout_padding">
            <div className="container-fluid">
                <h1 className="what_taital mt-3">Wrong URL</h1>

                <div className="contact_section2">
                    <div className="row">
                        <div className="col-md-12 padding_0">
                        <div className="mail_section">
                           <img src="images/notfound.jpg" className="mb-3"/>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
