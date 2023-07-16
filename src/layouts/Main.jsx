import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-28 pb-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
