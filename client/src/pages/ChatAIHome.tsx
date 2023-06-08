import { useState, useContext, useEffect } from "react";
import ChatAISidebar from "../components/ChatAISidebar";
import ChatAI from "../components/ChatAI";
import Box from "@mui/material/Box";

export default function ChatAIHome() {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#242424" }}>
      <>
        <ChatAISidebar open={true} />
        <ChatAI />
      </>
    </Box>
  );
}
