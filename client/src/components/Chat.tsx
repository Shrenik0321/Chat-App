import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Textbar from "./Textbar";
import { Typography } from "@mui/material";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase-config/firebase";

const drawerWidth = 300;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  height: "100vh",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Chat = ({ open }: any) => {
  const [newMessage, setNewMessage] = useState<string>("");

  const messagesRef = collection(db, "Messages");

  useEffect(() => {
    const handleSubmit = async () => {
      if (newMessage != "") {
        await addDoc(messagesRef, {
          text: newMessage,
          createdAt: serverTimestamp(),
          user: auth.currentUser?.displayName,
        });
      }
      setNewMessage("");
    };
    handleSubmit();
  }, [newMessage]);

  return (
    <AppBar
      open={open}
      sx={{
        backgroundColor: "#242424",
        color: "white",
        position: "fixed",
        top: "10%",
        left: 0,
        right: 0,
        height: "calc(100vh - 11%)",
      }}
    >
      <Stack
        sx={{
          marginX: "2%",
          height: "100%",
          overflow: "auto",
          paddingTop: "2%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            position: "relative",
            padding: "10px",
            marginY: "10px",
            backgroundColor: "#22c55e",
            width: "fit-content",
            maxWidth: "70%",
            borderRadius: "10px",
            alignSelf: "flex-start",
          }}
        >
          <Typography>Chat: 1</Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            padding: "10px",
            marginY: "10px",
            backgroundColor: "#2563eb",
            width: "fit-content",
            maxWidth: "70%",
            borderRadius: "10px",
            alignSelf: "flex-end",
          }}
        >
          <Typography>Chat: 2 HHElsdfdjsdfhjdjsdfjdjddjdjj</Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            padding: "10px",
            marginY: "10px",
            backgroundColor: "#22c55e",
            width: "fit-content",
            maxWidth: "70%",
            borderRadius: "10px",
            alignSelf: "flex-start",
          }}
        >
          <Typography>Chat: 3 HELLO WORLD</Typography>
        </Box>
      </Stack>
      <Textbar setNewMessage={setNewMessage} />
    </AppBar>
  );
};

export default Chat;
