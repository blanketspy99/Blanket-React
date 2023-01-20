import React from "react";
import {Outlet} from "react-router-dom";
import MyNavigationBar from "../components/MyNavigation";

const Layout = () => {
    return (
      <>
        <MyNavigationBar />
        <Outlet />
      </>
    );
  };

  export default Layout;

