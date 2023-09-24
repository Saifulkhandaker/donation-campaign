import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Mainlayout;