import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-2 m-2 shadow-lg '>
    <div className='flex'>
      <img className='h-12 w-12 mr-8' alt="menu" src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'/>
    
      <img className='h-12 w-32' alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png' />
    
    </div>

    <div>
        <input className='ml-12 w-72' type='text' placeholder='what would you like to watch today?'></input>
        <button className='bg-red-600 rounded-lg p-3'>Search</button>

    </div>

    <div>
        <img className='h-12 w-12 ml-12' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
    </div>
    </div>


  )
}

export default Header
