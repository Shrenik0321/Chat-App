import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const Searchbar = () => {
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
            />
          ),
        }}
      />
    </>
  );
};

export default Searchbar;
