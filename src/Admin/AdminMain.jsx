import { Outlet } from "react-router-dom";
import Dashboard from "./AdminDashBoard";
import Nav from "./Nav";
import SideNav from "./SideNav";

export default function AdminMain() 
{
  return (
    <>
      <div id="wrapper">
        <SideNav/>
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
                <Nav/>
                <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
}
