import { Route, Routes } from "react-router-dom";
import Home from "./web/Home";
import About from "./web/About";
import Algo from "./web/Algo";
import Pricing from './web/Pricing';
import Contact from './web/Contact';

import {RegLoginCommon, Register , Login} from './web/Login'
import ReadMore from "./web/ReadMore";

export default function App()
{
  return <>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about/" element={<About/>}/>
      <Route path="/algo" element={<Algo/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/user/" element={<RegLoginCommon/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
      </Route>
      <Route path="/readmore" element={<ReadMore/>}/>
    </Routes>

  </>
}