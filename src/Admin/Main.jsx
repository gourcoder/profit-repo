import Dashboard from "./DashBoard";
import Nav from "./Nav";
import SideNav from "./SideNav";

export default function Main() {
  return (
    <>
      <div id="wrapper">
        <SideNav/>
        <div id="content-wrapper" class="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
                <Nav/>
                <Dashboard/>
          </div>
        </div>
      </div>
    </>
  );
}
