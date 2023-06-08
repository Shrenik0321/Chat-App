import { useState, useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";
import { db } from "../firebase-config/firebase";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";

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
  const { currentUser } = useContext(AuthContext);
  const { messagingUser } = useContext(ChatContext);
  const [combinedid, setCombinedid] = useState("");
  const [text, setText] = useState("");
  const [chatReturn, setChatReturn] = useState([]);

  async function handleSend() {
    const docRef = doc(collection(db, "Chats"), combinedid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const existingData = docSnap.data();
      const existingMessages = existingData.messages || [];
      const newChatObj = { [currentUser ? currentUser.uid : ""]: text };
      const updatedMessages = [...existingMessages, newChatObj];
      await updateDoc(docRef, { messages: updatedMessages });
    } else {
      console.log("Document does not exist");
    }

    setText("");
  }

  async function getMessagesFunc() {
    const combinedId: string =
      currentUser != null || currentUser != undefined
        ? currentUser.uid > messagingUser.uid
          ? currentUser.uid + messagingUser.uid
          : messagingUser.uid + currentUser.uid
        : "";
    try {
      const res = await getDoc(doc(db, "Chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "Chats", combinedId), {
          messages: [],
        });
      } else {
        if (combinedId) {
          onSnapshot(doc(collection(db, "Chats"), combinedId), (snapshot) => {
            const updatedMessages = snapshot.data()?.messages || [];
            setChatReturn(updatedMessages);
          });
        }
      }
      setCombinedid(combinedId);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function get() {
      await getMessagesFunc();
    }

    get();
  }, [messagingUser]);

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
          } else if (
            Object.keys(data).includes(currentUser ? currentUser.uid : "")
          ) {
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
        value={text}
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
            <>
              <KeyboardVoiceIcon
                sx={{
                  paddingBottom: "5px",
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
              <AttachFileIcon
                sx={{
                  paddingBottom: "5px",
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              />
              <SendIcon
                sx={{
                  paddingBottom: "5px",
                  color: "white",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={handleSend}
              />
            </>
          ),
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </AppBar>
  );
};

export default Chat;
