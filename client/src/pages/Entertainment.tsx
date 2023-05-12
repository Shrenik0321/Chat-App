import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Box from "@mui/material/Box";
import Topbar from "../components/Topbar";

interface Auth {
  auth: string;
}

export default function Entertainment() {
  const [open, setOpen] = useState(true);
  const [isAuth, setIsAuth] = useState<Auth | null>();

  useEffect(() => {
    const auth = localStorage.getItem("auth-token");
    setIsAuth(auth ? { auth } : null);
  }, []);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      {isAuth && (
        <>
          <Topbar open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          <Chat open={open} setOpen={setOpen} />
        </>
      )}
    </Box>
  );
}
