import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import Banner from "../components/Header/Banner/Banner";

const Mainlayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
      
    </div>
  );
};

export default Mainlayout;
