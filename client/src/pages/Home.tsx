import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import Box from "@mui/material/Box";
import Topbar from "../components/Topbar";

export default function Home() {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      <Topbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <Chat open={open} setOpen={setOpen} />
    </Box>
  );
}
