import React from "react";
import bigLogo from "../assets/images/bigLogo.png"
import HoldingIphone from "../assets/images/iphone-hand.png"

export default function Jumbotron() {

    const handleLearnMore = () => {
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })

    }
  return (
    <div className="jumbotron-section wrapper">
        {/* <h2 className="title">In stock now</h2> */}
        <img className="logo" src={bigLogo} alt="iPhone 14 Pro"></img>
        <p className="text">GUK-6000 KEYBOARD</p>
        <span className="description">Pay in 4 interest-free installments of $31.25</span>
        <ul className="links">
            <li>
                <button className="button">Buy</button>
            </li>
            <li>
                <a className="link" onClick={handleLearnMore}>Learn more</a>
            </li>
        </ul>
        {/* <img className="iphone-img" src={HoldingIphone} alt="iPhone"/> */}
    </div>
  )
}
