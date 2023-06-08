import { useState, useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Topbar from "../components/Topbar";
import { AuthContext } from "../context/AuthContext";
import Chat from "../components/Chat";
import { useLocation } from "react-router";
import { ChatContext } from "../context/ChatContext";
// import { PageNotFound } from "./PageNotFound";

export default function Home() {
  const [open, setOpen] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const { setMessagingUser } = useContext(ChatContext);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    data != null && setMessagingUser(data);
  }, [data]);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      {currentUser != null ? (
        <>
          <Topbar open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          {data != null && <Chat open={open} setOpen={setOpen} />}
        </>
      ) : (
        <>{/* <PageNotFound /> */}</>
      )}
    </Box>
  );
}
