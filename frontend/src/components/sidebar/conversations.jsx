import React from 'react'
import Conversation from './conversation'

const conversations = () => {
  return (
    <div className='flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default conversations


// import React from 'react'
// import Conversation from './conversation'

// const conversations = () => {
//   return (
//     <div className='flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default conversations
