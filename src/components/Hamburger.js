

function Hamburger(){

    return(
         <section className="p-menu1">
        <nav id="navbar" className="navigation" role="navigation">
            <input id="toggle1" type="checkbox"/>
            <label className="hamburger1" htmlFor="toggle1">
                <div className="top"></div>
                <div className="meat"></div>
                <div className="bottom"></div>
            </label>

            <nav className="menu1">
                <a className="link1" href="">Inloggen</a>
                <a className="link1" href="">Bar's</a>
                <a className="link1" href="">Over ons</a>
                <a className="link1" href="">Blog</a>
                <a className="lin1 kbutton-nav" href="">Contact</a>
            </nav>
        </nav>
 </section>
    )
}

export default Hamburger;