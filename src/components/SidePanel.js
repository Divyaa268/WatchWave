import React from 'react'
import { useSelector } from 'react-redux'

const SidePanel = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  // early return pattern
  if(!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48'>
        
        <ul>
          <li className='flex'>
            <img className='h-6 w-6' alt='home' src='https://static.thenounproject.com/png/3574480-200.png' /> 
            Home</li>
          <li className='flex'>
          <img className='h-6 w-6' alt='home' src='https://static.thenounproject.com/png/4512655-200.png' /> 
            Shorts</li>
          <li  className='flex'>
          <img className='h-6 w-6' alt='home' src='https://icon2.cleanpng.com/20180203/lee/kisspng-video-ico-icon-video-icon-transparent-background-5a75f609b0ca41.3603646815176801377241.jpg' /> 
            Videos</li>
          <li className='flex'>
          <img className='h-6 w-6' alt='home' src='https://static.thenounproject.com/png/2146857-200.png' />
            Live</li>
        </ul>

        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className='font-bold pt-5'>Watch Later</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
      
    </div>
  )
}

export default SidePanel
