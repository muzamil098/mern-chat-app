import React from 'react'

const Message = () => {
  return (
    <div className=' chat chat-end'>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img src='https://img.daisyui.com/images/profile/demo/kenobee@192.webp' alt='Avatar' />
        </div>
      </div>
      <div className={"chat-bubble text-white bg-blue-500"}>Hi what's up?</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>

    </div>
  )
}

export default Message
