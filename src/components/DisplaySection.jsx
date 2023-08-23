import React from 'react'
import bigLogo from "../assets/images/bigLogo.png"

export default function () {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
  }
  return (
    <div className='display-section wrapper'>
        <h2 className='title'></h2>
        <p className='text'>Unleash Your Productivity</p>
        <span className='description'>Discover the mechanical keyboards that fits your needs</span>
        {/* <button className='button'>Try me!</button> */}
        <img className="logo" src={bigLogo} alt="big logo"></img>
        <button className='back-button' onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}
