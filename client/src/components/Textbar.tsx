import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const Textbar = ({ setNewMessage }: any) => {
  const [message, setMessage] = useState("");

  function handleSendMessage() {
    setNewMessage(message);
    setMessage("");
  }

  return (
    <>
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
              sx={{
                color: "white",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={handleSendMessage}
            />
          ),
        }}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />
    </>
  );
};

export default Textbar;
