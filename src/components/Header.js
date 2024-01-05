import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {

  // tying input text
  const [ searchText, setSearchText ] = useState("");
  // console.log(searchText);

  // GETTING SUGGESTION RESULTS
  const [ suggestions, setSuggestions ] = useState([]);

  // show/unshow search results
  const [ showSuggestions, setShowSuggestions ] = useState(false);



useEffect(() => {
  // API Call
  // if difference between keystrokes is less than 200 ms
  //  then decline api call 
  // else make api call and show suggestions in  search bar

  const timer = setTimeout(() => getSearchSuggestions(), 200);
  
  return () => {
    clearTimeout(timer);
  }
},
[searchText]);


// MAKING API CALL
const getSearchSuggestions = async () => {

  console.log("API Call " + searchText)
  const data = await fetch(YOUTUBE_SEARCH_API + searchText);
  const json = await data.json();
  
  console.log(json);

  // setting suggestions after fetching data from the API
  setSuggestions(json[1]);

};

    // Dispatching an action for toggle sidePanel menu
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
      <div>
        <input
         className='ml-72 w-1/2 h-12 border border-gray-400 rounded-l-full text-center hover:border-gray-800' 
         type='text' 
         placeholder='🔍what would you like to watch today?'
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}>
         </input>
        <button className='bg-red-600 rounded-r-full p-3 h-12 border border-red-600 hover:bg-red-500'>Search</button>
      </div>

      { showSuggestions && (
      <div className='fixed bg-white ml-72 px-2 w-[28rem] shadow-lg rounded-lg border border-gray-100 '>
          {suggestions.map((s) => (
            <ul key= {s} className='py-2 px-2 shadow-sm hover:bg-gray-100'>
           🔍{s} 
           </ul>
          ))
          }

          {/* <li className=' py-2 shadow-sm hover:bg-gray-100'>🔍 iphone</li>
          <li className=' py-2 shadow-sm  hover:bg-gray-100'>🔍 iphone</li> */}
      </div>
      )}
    </div>
      
    <div className='col-span-1'>
        <img className='h-12 w-12 ml-12' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
    </div>
    </div>


  )
}

export default Header
