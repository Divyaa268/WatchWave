import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());

    }

  return (
    <div className='grid grid-flow-col p-4 m-2 shadow-lg '>
    <div className='flex col-span-2'>
      <img 
      onClick={() => toggleMenuHandler()}
      className='h-12 w-12 mr-8 cursor-pointer'
      alt="menu" 
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png'/>
    
      <img className='h-12 w-32' alt="logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/512px-YouTube_Logo_%282013-2017%29.svg.png' />
    
    </div>

    <div className='col-span-10'>
        <input className='ml-72 w-96 h-12 border border-gray-400 rounded-l-full text-center hover:border-gray-800' type='text' placeholder='what would you like to watch today?'></input>
        <button className='bg-red-600 rounded-r-full p-3 h-12 border border-red-600 hover:bg-red-500'>Search</button>

    </div>

    <div className='col-span-1'>
        <img className='h-12 w-12 ml-12' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
    </div>
    </div>


  )
}

export default Header
