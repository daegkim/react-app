import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import Home from "../../pages/home";

function Layout() {
  return (
    <div>
      <Header />
      <SideNav />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
