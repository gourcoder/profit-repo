import { Link, Outlet, useNavigate } from "react-router-dom"
import apiCall , {URLS} from '../webservice/ApiCallService';
import { useRef, useState } from "react";

import {setUserData} from '../reduxconfig/UserSlice';
import { useDispatch } from "react-redux";

export function Register() 
{
    const nameRef = useRef()
    const mobRef = useRef()
    const emailRef = useRef()
    const passRef = useRef()

    const [isRegRun,setIsRegRun] = useState(false);
    const [msg,setMsg] = useState("")
    const [isError,setIsError] = useState(false)

    const register = (event)=>
    {
        event.preventDefault()
        setIsRegRun(true)
        setMsg("")
        const data = {
            name : nameRef.current.value,
            mobile : mobRef.current.value,
            email : emailRef.current.value,
            password  : passRef.current.value
        }
        apiCall.postCall(URLS.REGISTER,data)
        .then(result=>
        {
            if(result.status)
            {
                setMsg(result.msg)
                setIsError(false)
            }
            else
            {
                setIsError(true)
                if(result.errors?.length>0)
                {
                    const emsg = result.errors.map(e=>e.errMsg).join(',');
                    setMsg(emsg)
                }else{
                    setMsg(result.msg)
                }
            }
            event.target.reset()
        })
        .catch(err=>
        {
            console.log(err);   
        }).finally(()=>{
            setIsRegRun(false)            
        })
    }

    return <>
        <div className="contact_section layout_padding">
            <div className="container-fluid">
                <h1 className="what_taital">User Registeration</h1>

                <div className="contact_section2">
                    <div className="row">
                        <div className="col-md-12 padding_0">
                            <form onSubmit={register}>
                            <div className="mail_section">

                                <input type="text" ref={nameRef} className="mail_text_1" placeholder="Your Name" required />

                                <input type="text" ref={mobRef} className="mail_text_1" placeholder="Mobile Number" 
                                minLength="10" maxLength="10" required />

                                <input type="email" ref={emailRef} className="mail_text_1" placeholder="Email" required />

                                <input type="password" ref={passRef} className="mail_text_1" placeholder="Password" minLength="6" maxLength="10" required />
                                
                                <button className="btn btn-success mt-3 mb-3">Register</button>

                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                                {isRegRun?<button class="btn" disabled>
                                    <span class="spinner-grow spinner-grow-sm"></span>
                                    <b className="text-danger">Registering Data ....</b>
                                </button>:""}

                                {msg.length>0?<span> 
                                <i className={isError?'fa-solid fa-circle-exclamation  text-danger':'fa-solid fa-circle-exclamation  text-info'}></i>
                                &nbsp;&nbsp;   
                                <b className="text-danger">{msg}</b>
                                </span>:""}
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export function Login() 
{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const emailRef = useRef()
    const passRef = useRef()

    const [isLoginRun,setIsLoginRun] = useState(false);
    const [msg,setMsg] = useState("")

    const login = (event)=>
    {
        event.preventDefault()
        setIsLoginRun(true)
        setMsg("")
        const data = {
            email : emailRef.current.value,
            password  : passRef.current.value
        }
        apiCall.postCall(URLS.LOGIN,data)
        .then(result=>
        {
            console.log(result)
            setMsg(result.msg)
            if(result.status)
            {
                dispatch(setUserData(result.data))
                navigate(`/${result.data.role}/dashboard`)
                event.target.reset()    
            }
            
        })
        .catch(err=>
        {
            console.log(err);   
        }).finally(()=>{
            setIsLoginRun(false)            
        })
    }

    return <>
        <div className="contact_section layout_padding">
            <div className="container-fluid">
                <h1 className="what_taital">User Login</h1>

                <div className="contact_section2">
                    <div className="row">
                        <form onSubmit={login}>
                        <div className="col-md-12 padding_0">
                            <div className="mail_section">
                                <input type="email" className="mail_text_1" placeholder="Email" ref={emailRef} required />

                                <input type="password" className="mail_text_1" ref={passRef} placeholder="Password" required />

                                <button className="btn btn-success mt-3 mb-3">Login</button>

                                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;

                                {isLoginRun?<button class="btn" disabled>
                                    <span class="spinner-grow spinner-grow-sm"></span>
                                    <b className="text-danger">Login ....</b>
                                </button>:""}

                                <b className="text-danger mt-3">{msg}</b>
                            </div>
                        </div>
                        </form>
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