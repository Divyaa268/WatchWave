import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
import { generate , generateRandomQuote } from '../utils/helper';
 
const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log("API Polling");

            dispatch(addMessage({
                name: generate(),
                message: generateRandomQuote()
            }))
        }, 2000);

        return () => clearInterval(i);
    }, []);

  return (
    
    // <div className='p-2 m-2 w-full h-[590px] border border-black bg-slate-100 rounded-lg overflow-y-scroll overflow-hidden shadow-md flex flex-col-reverse'>
    //     <h3 className='font-bold py-2 px-2'>Live Chat</h3> 
    //     <div className=''>

    <>
    <div className='p-2 m-2 w-full h-[590px] border border-black bg-slate-100 rounded-lg overflow-y-scroll overflow-hidden shadow-md'>
        <h3 className='font-bold py-2 px-2'>Live Chat</h3> 
        <div className=' flex flex-col-reverse'> 
        <div>

            {chatMessages.map((m, index) => (
                <ChatMessage key={index}
                name={m.name}
                message={m.message} />
            ))}
        
        </div>
        </div>
    </div>

        <div className='w-full p-2 ml-2 border border-slate-300 rounded-lg'>
            <input className='w-96' type='text'>
            </input>
                <button className='px-3 py-2 m-2 bg-slate-300 font-semibold rounded-lg hover:bg-slate-100'> Send </button>
            

        </div>
      
    </>
  )
}

export default LiveChat
