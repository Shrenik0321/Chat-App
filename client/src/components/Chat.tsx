import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import {
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { db } from "../firebase-config/firebase";
import { ChatContext } from "../context/ChatContext";

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
  const { messagingUser, user, combinedIdUser } = useContext(ChatContext);
  const [newMessage, setNewMessage] = useState<string>("");
  const [chatReturn, setChatReturn] = useState<any[]>([]);

  const handleSubmit = async () => {
    const docRef = doc(collection(db, "Chats"), combinedIdUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const existingData = docSnap.data();
      const existingMessages = existingData.messages || [];
      const newChatObj = { [messagingUser.uid]: newMessage };
      const updatedMessages = [...existingMessages, newChatObj];
      await updateDoc(docRef, { messages: updatedMessages });
    } else {
      console.log("Document does not exist");
    }

    setNewMessage("");
  };

  useEffect(() => {
    let bitch = messagingUser ? messagingUser.uid : "" + user ? user.uid : "";
    console.log("first", bitch);
    console.log("sec", messagingUser);
    console.log("thi", user);
  }, []);

  useEffect(() => {
    const getMessages = () => {
      if (combinedIdUser) {
        onSnapshot(doc(collection(db, "Chats"), combinedIdUser), (snapshot) => {
          const updatedMessages = snapshot.data()?.messages || [];
          setChatReturn(updatedMessages);
        });
      }
    };

    getMessages();
  }, [combinedIdUser]);

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
        {chatReturn.map((data: any, key: number) => {
          if (Object.keys(data).includes(messagingUser.uid)) {
            return (
              <Box
                key={key}
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
                <Typography>{Object.values(data)}</Typography>
              </Box>
            );
          } else if (Object.keys(data).includes(user.uid)) {
            return (
              <Box
                key={key}
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
                <Typography>{Object.values(data)}</Typography>
              </Box>
            );
          }
        })}
      </Stack>
      <TextField
        id="outlined-basic"
        label="Type your message..."
        multiline
        minRows={1}
        maxRows={4}
        variant="filled"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "50px", // set to desired circular value
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          marginX: "1%",
        }}
        InputProps={{
          endAdornment: (
            <SendIcon
              onClick={handleSubmit}
              sx={{
                color: "white",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          ),
        }}
        value={newMessage}
        onChange={(e) => {
          setNewMessage(e.target.value);
        }}
      />
    </AppBar>
  );
};

export default Chat;
