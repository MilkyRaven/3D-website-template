import React from 'react'

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
                <h2 className='title'>New Keyboard System</h2>
                <p className='text'>Feel the keys.</p>
                <span className='description'>Mesmerizing mechanical sound.</span>
                <ul className="links">
                    <li>
                        <button className="button">Buy</button>
                    </li>
                     <li>
                         <a className="link" onClick={handleLearnMore}>Learn more</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
