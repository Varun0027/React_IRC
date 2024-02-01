import React from "react";
import { Link } from "react-router-dom";
const Navbar =()=>{
    return(
        <div className="nav-container">
            <ul className="nav-links">
                <li className="nav-link"><Link className="Home" to={"/"}>Home</Link> </li>
                <li className="nav-link"><Link className="About" to={"/About"}></Link> </li>
            </ul>
        </div>
    )
}
export default Navbar;