import React from "react";
import Logo from "../assets/images/bigLogo.png"
import Search from '../assets/images/search.svg'
import Store from '../assets/images/store.svg'
function Nav() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                        <img className="big-logo" src={Logo} alt="company logo"></img>
                    </li>
                    <li>
                        <a className="link-styled">Home</a>
                    </li>
                    <li>
                        <a className="link-styled">In stock</a>
                    </li>
                    <li>
                        <a className="link-styled">Keyboards</a>
                    </li>
                    <li>
                        <a className="link-styled">Keycaps</a>
                    </li>
                    <li>
                        <a className="link-styled">Deskpads</a>
                    </li>
                    <li>
                        <a className="link-styled">On sale</a>
                    </li>
                    <li>
                        <a className="link-styled">More</a>
                    </li>
                    <li>
                        <a className="link-styled">Support</a>
                    </li>
                    <li>
                        <img src={Search} alt="search"></img>
                    </li>
                    <li>
                        <img src={Store} alt="store"></img>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Nav;