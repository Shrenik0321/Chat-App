import { useState, useContext, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Box from "@mui/material/Box";
import Topbar from "../components/Topbar";
import { AuthContext } from "../context/AuthContext";
import Chat from "../components/Chat";
import { useLocation } from "react-router";

export default function Home() {
  const [open, setOpen] = useState(true);
  const { currentUser } = useContext(AuthContext);
  const [messageUser, setMessageUser] = useState([]);
  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    setMessageUser(data);
  }, [data]);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      {currentUser && messageUser != null ? (
        <>
          <Topbar open={open} setOpen={setOpen} messageUser={messageUser} />
          <Sidebar open={open} setOpen={setOpen} />
          <Chat open={open} setOpen={setOpen} />
        </>
      ) : (
        <>
          <Topbar open={open} setOpen={setOpen} messageUser={messageUser} />
          <Sidebar open={open} setOpen={setOpen} />
        </>
      )}
    </Box>
  );
}
