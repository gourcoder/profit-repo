import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import apiCall, { URLS } from "../webservice/ApiCallService";
import { useEffect, useRef, useState } from "react";
import "./login.css";
import { setUserData } from "../reduxconfig/UserSlice";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export function Register() {
  const nameRef = useRef();
  const mobRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const [isRegRun, setIsRegRun] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const register = (event) => {
    event.preventDefault();
    setIsRegRun(true);
    setMsg("");
    const data = {
      name: nameRef.current.value,
      mobile: mobRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    apiCall
      .postCall(URLS.REGISTER, data)
      .then((result) => {
        if (result.status) {
          setMsg(result.msg);
          setIsError(false);
        } else {
          setIsError(true);
          if (result.errors?.length > 0) {
            const emsg = result.errors.map((e) => e.errMsg).join(",");
            setMsg(emsg);
          } else {
            setMsg(result.msg);
          }
        }
        event.target.reset();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsRegRun(false);
      });
  };

  return (
    <>
      <div
        className="container p-1 "
        
        id="reg_form"
      >

        <form method="" onSubmit={register} name="" >
        <div className="row justify-content-center p-2 mt-4">
            <div className="col-lg-10 col-md-5">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-lg-10 col-md-5">
              <input
                name="mobile"
                type="text"
                required
                placeholder="Mobile Number"
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-lg-10 col-md-5">
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-lg-10 col-md-5">
              <input
                name="password"
                type="password"
                required
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="text-center mt-2 ">
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary btn-md formbtn"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailRef = useRef();
  const passRef = useRef();

  const [isLoginRun, setIsLoginRun] = useState(false);
  const [msg, setMsg] = useState("");

  const login = (event) => {
    event.preventDefault();
    setIsLoginRun(true);
    setMsg("");
    const data = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    apiCall
      .postCall(URLS.LOGIN, data)
      .then((result) => {
        console.log(result);
        setMsg(result.msg);
        if (result.status) {
          dispatch(setUserData(result.data));
          navigate(`/${result.data.role}/dashboard`);
          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoginRun(false);
      });
  };

  return (
    <>
      <div
        className="container p-1"
        id="login_form"
        
      >

        <form method="" onSubmit={login} name="">
          <div className="row justify-content-center p-2 mt-5">
            <div className="col-lg-10 col-md-5 ">
              <input
                name="Email"
                type="email"
                required
                placeholder="Email"
                className="form-control"
              />
            </div>
          </div>
          <div className="row justify-content-center p-2">
            <div className="col-lg-10 col-md-5">
              <input
                name="Message"
                type="password"
                required
                placeholder="Password"
                className="form-control"
              />
            </div>
          </div>
          <div className="text-center mt-2 ">
            <button
              type="submit"
              name="Submit"
              className="btn btn-primary btn-md formbtn"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export function RegLoginCommon() {
    const checkboxLabel=useRef(null)
    const txtreg=useRef(null)
    const txtlog=useRef(null)
    const checkbox=useRef(null)
    const location=useLocation(null)
    const navigate=useNavigate(null);
    const [showForm,setShowForm]=useState(true);
    
    useEffect(()=>{
      if(showForm){
        checkboxLabel.current.style.backgroundColor="lightgreen"
        txtlog.current.style.boxShadow="0px 0px 10px 1px white"
        txtreg.current.style.boxShadow="none"
        txtlog.current.style.padding="6px"
        txtreg.current.style.padding="0px"
         txtreg.current.style.backgroundColor="initial"
        txtreg.current.style.color="black"
         txtlog.current.style.backgroundColor="black"
        txtlog.current.style.color="white"
      }
      else{
        txtlog.current.style.boxShadow="none"
        checkboxLabel.current.style.backgroundColor="skyblue"
        txtreg.current.style.boxShadow="0px 0px 10px 1px white"
        txtreg.current.style.padding="6px"
        txtreg.current.style.backgroundColor="black"
        txtreg.current.style.color="white"
        txtlog.current.style.padding="0px"
        txtlog.current.style.backgroundColor="initial"
        txtlog.current.style.color="black"
      }
    },[showForm])
  const tog = (event)=>{
    let id=event.target.id
    if(id==="checkbox"){
        setShowForm(!showForm)
        if(checkbox.current.checked)
            navigate("/user/login");
        else
            navigate("/user/register");

    }
    else{
        if(id==="loginForm"){
          setShowForm(true)
        }
        else
          setShowForm(false);

    }

     }

  return (
    <>
      <div className="container-fluid p-2" >
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center" id="reglogformmain">
          <div className="col-xl-10 col-lg-12 col-md-9 " >
            <div className="" id="commonform">
        <div className="back_button"><Link to="/" className="back_arrow"><FaArrowAltCircleLeft /></Link></div>
              <div className="row d-flex justify-content-center">
                <div className=" toptog mt-3 d-flex justify-content-evenly">
                  <div className="reglog">
                  <Link to="/user/register" onClick={(event)=>tog(event)}>
                    <b id="registrationForm" ref={txtreg}>REGISTER</b>
                  </Link>
                  </div>
                  <div style={{alignContent:"center",marginTop:"3px"}}>
                    <input type="checkbox" ref={checkbox} className="checkbox" id="checkbox" onChange={tog}  checked={showForm}/>
                    <label for="checkbox" className="checkbox-label" ref={checkboxLabel}>
                      <span className="ball"></span>
                    </label>
                  </div>
                  <div className="reglog">
                  <Link to="/user/login" onClick={(event)=>tog(event)}>
                    <b id="loginForm" ref={txtlog}>LOGIN</b>
                  </Link>
                  </div>
                </div>
              </div>
              <div className="" style={{height:"100%"}}>
                <Link to="/" title="Back"></Link>
                <div className="row" style={{height:"100%"}}>
                  
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                      <img src="/images/logo-removebg-preview.png" alt=""  style={{mixBlendMode:"screen"}}/>
                    </div>
                    <div className="col-lg-6" >
                      <Outlet />
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// =====================================================================================
//reg loader
// {isRegRun?<button className="btn" disabled>
//     <span className="spinner-grow spinner-grow-sm"></span>
//     <b className="text-danger">Registering Data ....</b>
// </button>:""}

//login loader
// {msg.length>0?<span>
//     <i className={isError?'fa-solid fa-circle-exclamation  text-danger':'fa-solid fa-circle-exclamation  text-info'}></i>
//     &nbsp;&nbsp;
//     <b className="text-danger">{msg}</b>
//     </span>:""}
