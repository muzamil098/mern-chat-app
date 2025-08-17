import { useEffect } from "react";

import { useSocketContext } from "../context/socketContext";
import useConversation from "../zustand/useConversation";
import notificationSound from '../assets/sounds/notification.mp3'
const useListenMessages = () => {
    const {socket} = useSocketContext();
    const {messages, setMessages} = useConversation();
    console.log(messages);

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            setMessages([...messages, newMessage])
            newMessage.shouldShake = true
            const sound = new Audio(notificationSound);
            sound.play();
            console.log(newMessage)
        })
        return () => socket?.off("newMessage")
    },[socket, setMessages, messages])
}
export default useListenMessages;