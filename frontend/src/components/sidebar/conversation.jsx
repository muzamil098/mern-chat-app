import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const {onlineUsers} = useSocketContext();
  const isOnline= onlineUsers?.includes(conversation._id);
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`} onClick={() => setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline ? "avatar-online" : "avatar-offline"}`}>
        <div className="w-12 rounded-full">
          <img src={conversation.profilePic} />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex gap-3 justify-between">
          <p className="font-bold text-gray-200">{conversation.fullName}</p>
          <span className="text-xl">{emoji}</span>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </div>
    </>
  );
};

export default Conversation;


// import React from "react";

// const conversation = () => {
//   return (
//     <>
//     <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
//       <div className="avatar avatar-online">
//         <div className="w-12 rounded-full">
//           <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
//         </div>
//       </div>
//       <div className="flex flex-col flex-1">
//         <div className="flex gap-3 justify-between">
//           <p className="font-bold text-gray-200">John Doe</p>
//           <span className="text-xl">🎃</span>
//         </div>
//       </div>
//       <div className="divider my-0 py-0 h-1"></div>
//     </div>
//     </>
//   );
// };

// export default conversation;
