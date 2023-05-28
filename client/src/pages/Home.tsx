import { useState, useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Topbar from "../components/Topbar";
import { AuthContext } from "../context/AuthContext";
import Chat from "../components/Chat";
import { useLocation } from "react-router";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config/firebase";
import { ChatContext } from "../context/ChatContext";
// import { PageNotFound } from "./PageNotFound";

export default function Home() {
  const [open, setOpen] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { setMessagingUser, setCombinedId, setUser } = useContext(ChatContext);
  const [messageUser, setMessageUser] = useState([]);
  const [combinedUser, setCombinedUser] = useState("");
  const location = useLocation();
  const data = location.state;

  async function handleSelectUser(messageUser: any) {
    const combinedId: string =
      currentUser != null || currentUser != undefined
        ? currentUser.uid > messageUser.uid
          ? currentUser.uid + messageUser.uid
          : messageUser.uid + currentUser.uid
        : "";
    try {
      const res = await getDoc(doc(db, "Chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "Chats", combinedId), {
          messages: [],
        });
      }
      setCombinedUser(combinedId);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setMessageUser(data);
  }, [data]);

  useEffect(() => {
    handleSelectUser(messageUser);
    setMessagingUser(messageUser);
  }, [messageUser]);

  useEffect(() => {
    setUser(currentUser);
  }, [currentUser]);

  useEffect(() => {
    setCombinedId(messageUser);
  }, [combinedUser]);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      {currentUser != null ? (
        <>
          <Topbar open={open} setOpen={setOpen} messageUser={messageUser} />
          <Sidebar open={open} setOpen={setOpen} />
          <Chat
            open={open}
            setOpen={setOpen}
            // messageUser={messageUser}
            // currentUser={currentUser}
            // combinedUser={combinedUser}
          />
        </>
      ) : (
        <>{/* <PageNotFound /> */}</>
      )}
    </Box>
  );
}
