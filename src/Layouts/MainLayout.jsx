import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";

const MainLayout = () => {
  const [toggle, setToggle] = useState(true);
  console.log(toggle);
  return (
    <div data-theme={`${toggle ? "light" : "dark"}`}>
      <Navbar toggle={toggle} setToggle={setToggle} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
