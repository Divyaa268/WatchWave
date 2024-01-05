import React from 'react'
import ChatMessage from './ChatMessage'
 
const LiveChat = () => {
  return (
    <div className='p-2 m-2 w-full h-[590px] border border-black bg-slate-100 rounded-lg'>
       <h3 className='font-bold py-2 px-2'>Live Chat</h3> 

        <ChatMessage 
            name="Divya"
            message="Working on Namaste React!🙏" />
      
    </div>
  )
}

export default LiveChat
