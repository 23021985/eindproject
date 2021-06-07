import React from "react";
import Navbar from "./Navbar";
import Hamburger from "./Hamburger";

function Footer(){


    return(

           <footer>

               <div className={"buttons"}>
                   <ul>
                       <li>
                           <a href="#">Locaties</a>
                       </li>

                       <li>
                           <a href="#">Login</a>
                       </li>
                       <li>
                           <a href="#">Contact</a>
                       </li>

                   </ul>
               </div>

           </footer>

    );
}

export default Footer;