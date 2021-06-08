import React from "react";
import {NavLink} from "react-router-dom";
import "./Footer.css"
function Footer(){


    return(

           <footer>

               <label id="logoContainer">
                       <div id="logo1"></div>
                       <div id="logo2"></div>
                       <div id="logo3"></div>
                   </label>

                   <div className={"buttons"}>
                   <ul>

                       <li>
                           <NavLink to="/Locaties" activeClassName="active-link">Locaties</NavLink>
                       </li>

                       <li>
                           <NavLink to="/Login" activeClassName="active-link">Login</NavLink>
                       </li>

                       <li>
                           <NavLink to="/Contact" activeClassName="active-link">Contact</NavLink>
                       </li>


                   </ul>
               </div>

           </footer>

    );
}

export default Footer;