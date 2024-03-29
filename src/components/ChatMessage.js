import React from 'react'

const ChatMessage = ( {name, message} ) => {
  return (
    <div className='flex items-center shadow-sm py-1 text-wrap'>
      <img 
      className='h-12 w-12'
      alt="User image"
      src = "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className='font-bold px-2 '>{name}</span>
      <span className='ml-4'>{message}</span>
    </div>
  )
}

export default ChatMessage
