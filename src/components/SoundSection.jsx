import React from 'react'
import tin from "../assets/images/tin-ex.png"

export default function SoundSection() {
    const handleLearnMore = () => {
        const element = document.querySelector(".display-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className='sound-section wrapper'>
        <div className='body'>
            <div className='sound-section-content content'>
                <h2 className='title'>In-Switch RGB LED</h2>
                <p className='text'>Feel it</p>
                <span className='description'>Designed in collaboration with TinEX</span>
                <ul className="links">
                    <li>
                        <button className="button">Buy</button>
                    </li>
                     <li>
                         <a className="link" onClick={handleLearnMore}>Learn more</a>
                    </li>
                </ul>
            </div>
            <div className='tin'><img className="logo" src={tin} alt="tin"></img></div>
        </div>
        {/* <div className='tin'><img className="logo" src={tin} alt="tin"></img></div> */}
    </div>
  )
}
