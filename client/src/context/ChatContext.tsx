import { createContext, useEffect, useState } from "react";

interface ChatContextProps {
  setMessagingUser: any;
  messagingUser: any;
  setUser: any;
  user: any;
  setCombinedId: any;
  combinedIdUser: any;
}

export const ChatContext = createContext<ChatContextProps>({
  setMessagingUser: "",
  messagingUser: "",
  setUser: "",
  user: "",
  setCombinedId: "",
  combinedIdUser: "",
});

export const ChatContextProvider = ({ children }: any) => {
  const [messagingUser, setMessagingUser] = useState("");
  const [user, setUser] = useState("");
  const [combinedIdUser, setCombinedId] = useState("");

  return (
    <ChatContext.Provider
      value={{
        setMessagingUser,
        messagingUser,
        setUser,
        user,
        setCombinedId,
        combinedIdUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
