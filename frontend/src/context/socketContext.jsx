import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import { io } from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const {authUser} = useAuthContext();

  useEffect(() => {
    console.log(authUser)
    if(authUser) {
      // Use env var if set, otherwise use current page origin (for deployed apps)
      const envUrl = import.meta.env.VITE_SOCKET_URL;
      const pageOrigin = typeof window !== 'undefined' ? 
        `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}` : 
        'http://localhost:5000';
      const socketUrl = envUrl || pageOrigin;
      
      const socket = io(socketUrl, {
        query:{
            userId: authUser._id
        },
        transports: ['websocket', 'polling'],
        withCredentials: true,
      });
      setSocket(socket);

      socket.on('getOnlineUsers', (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
      };
    } else{
        if(socket) {
          socket.close();
          setSocket(null);
        }
    }
   
  }, [authUser]);

  return (
    <SocketContext.Provider value={{socket, onlineUsers}}>
      {children}
    </SocketContext.Provider>
  );
};