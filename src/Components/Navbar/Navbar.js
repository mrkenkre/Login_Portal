import React from "react";
import { Link } from "react-router-dom";
import './NavStyle.css'

const Navbar = () => {
  return (
    <div  >
    <nav>
    <Link to='/Home'>Home</Link>{"   "}
    <Link to='/About'>About</Link>{"   "}
    <Link to='/Jobs'>Jobs</Link>{"   "}
    <Link to='/Contact'>Contact</Link>{"   "}
    <Link to='/'>Sign out</Link>{"   "}
  </nav><br/><br/><br/>
  </div>
  );
};

export default Navbar;