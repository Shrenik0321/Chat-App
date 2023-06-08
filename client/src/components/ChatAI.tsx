import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

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

const ChatAI = () => {
  const [text, setText] = useState("");

  return (
    <AppBar
      open={true}
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
      ></Stack>
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
              />
            </>
          ),
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </AppBar>
  );
};

export default ChatAI;
