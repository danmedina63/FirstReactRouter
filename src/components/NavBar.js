import React from "react";
import { Link } from "react-router-dom";
import '../style/navbar.scss'; 


export default function NavBar() {
  return (
    <div className="navbar">
      <Link className="link" to="/">HOME</Link>      
      <Link className="link" to="/AboutSober">SOBER</Link>
      <Link className="link" to="/AboutDrunk">DRUNK</Link>
      <Link className="link" to="/contact">CONTACT</Link>
    </div>
  );
}
