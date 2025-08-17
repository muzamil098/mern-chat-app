import React from 'react'
import Conversation from './conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  console.log("Conversations:", conversations);
  return (
    <div className='flex flex-col overflow-auto'>
      { conversations?.message?.map((conversation, idx) => (<Conversation key={conversation._id} conversation = {conversation} emoji = {getRandomEmoji()} lastIdx = {idx === conversations.length - 1} />))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations


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
