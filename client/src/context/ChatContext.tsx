import { createContext, useState } from "react";

interface ChatContextProps {
  setMessagingUser: any;
  messagingUser: any;
  setCombinedId: any;
  combinedIdUser: any;
}

export const ChatContext = createContext<ChatContextProps>({
  setMessagingUser: "",
  messagingUser: "",
  setCombinedId: "",
  combinedIdUser: "",
});

export const ChatContextProvider = ({ children }: any) => {
  const [messagingUser, setMessagingUser] = useState();
  const [combinedIdUser, setCombinedId] = useState("");

  return (
    <ChatContext.Provider
      value={{
        setMessagingUser,
        messagingUser,
        setCombinedId,
        combinedIdUser,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
