import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Searchbar from "./Searchbar";
import Divider from "@mui/material/Divider";

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
  return (
    <AppBar
      open={open}
      sx={{
        backgroundColor: "#242424",
        color: "white",
        position: "fixed",
        top: "7%",
        left: 0,
        right: 0,
        height: "calc(100vh - 7%)",
      }}
    >
      <Stack
        sx={{
          margin: "2%",
          height: "100%",
          justifyContent: "space-between",
          overflow: "auto",
          paddingTop: "2%",
        }}
      >
        <Stack
          sx={{
            overflow: "auto",
            "-ms-overflow-style": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Box>
            <Box sx={{ padding: "10px" }}>
              <h1>Chat</h1>
            </Box>
            <Divider sx={{ backgroundColor: "#3C3C3C" }} />
            <Box
              sx={{
                padding: "10px",
                marginY: "10px",
                backgroundColor: "#2E2E2E",
                textAlign: "right",
              }}
            >
              <h1>Chat</h1>
              <p>Hello worlddd</p>
            </Box>
            <Divider sx={{ backgroundColor: "#3C3C3C" }} />
            <Box sx={{ padding: "10px", marginY: "10px" }}>
              <h1>Chat</h1>
            </Box>
            <Divider sx={{ backgroundColor: "#3C3C3C" }} />
            <Box
              sx={{
                padding: "10px",
                marginY: "10px",
                backgroundColor: "#2E2E2E",
                textAlign: "right",
              }}
            >
              <h1>Chat</h1>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Searchbar />
        </Stack>
      </Stack>
    </AppBar>
  );
};

export default Chat;
