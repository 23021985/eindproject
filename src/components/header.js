import React from "react";
import Hamburger from "./Hamburger";

function Header(){


    return(
      <header>
          <div className={"logo"}>

                  <h1>IDRUNK</h1>

          </div>

          <Hamburger/>
      </header>
    );
}

export default Header;