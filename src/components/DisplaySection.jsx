import React from 'react'

export default function () {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth"})
  }
  return (
    <div className='display-section wrapper'>
        <h2 className='title'>New</h2>
        <p className='text'>Brilliant.</p>
        <span className='description'>More text.</span>
        <button className='button'>Try me!</button>
        <button className='back-button' onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}
