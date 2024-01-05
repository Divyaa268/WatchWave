import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import store from '../utils/store';
 
const LiveChat = () => {

    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            // API Polling
            console.log("API Polling");

            dispatch(addMessage({
                name: "Divya",
                message:"Gotta work!"
            }))
        }, 2000);

        return () => clearInterval(i);
    }, []);

  return (
    <div className='p-2 m-2 w-full h-[590px] border border-black bg-slate-100 rounded-lg overflow-y-scroll'>
       <h3 className='font-bold py-2 px-2'>Live Chat</h3> 

        {/* <ChatMessage 
            name="Divya"
            message="Working on Namaste React!🙏" /> */}

            {chatMessages.map((m, index) => (
                <ChatMessage key={index}
                name={m.name}
                message={m.message} />
            ))}
      
    </div>
  )
}

export default LiveChat
