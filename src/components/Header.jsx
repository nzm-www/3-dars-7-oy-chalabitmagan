import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import UseCollbak from "../pages/UseCollbak";
import logo from "../assets/logo.jpg";
import { IoLogoInstagram } from "react-icons/io";
import { GrGithub } from "react-icons/gr";
import { GrGoogle } from "react-icons/gr";
import { HiOutlineLogout } from "react-icons/hi";

function Header(props) {
  console.log("header.render");
  return (
    <div className="bg-black">
      <div className="flex pl-40 pr-40 items-center justify-between ">
        <div className="w-28">
          <img src={logo} alt="" />
        </div>
        <nav className="text-white flex items-center gap-6 text-lg ">
          <Link to={"/"}>
            <p className="hover:text-orange-700 hover:translate-y-2 hover:bg-slate-500 p-1 hover:rounded">
              Home
            </p>
          </Link>
          <Link to={"/about"}>
            <p className="hover:text-orange-700 hover:translate-y-2 hover:bg-slate-500 p-1 hover:rounded">
              About
            </p>
          </Link>
          <Link to={"/contact"}>
            <p className="hover:text-orange-700 hover:translate-y-2 hover:bg-slate-500 p-1 hover:rounded">
              Contact
            </p>
          </Link>
          <Link to={"/usememo"}>
            <p>usememo</p>
          </Link>
          <Link to={"/usecollbak"}>
            <p>UseCollbak</p>
          </Link>
          
        </nav>
        <div className="flex text-white text-3xl items-center gap-4 ">
          <IoLogoInstagram />
          <GrGithub />
          <GrGoogle />
          <HiOutlineLogout />
        </div>
      </div>
    </div>
  );
}
export default React.memo(Header);
