import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Searchbar from "./Searchbar";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

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
          overflow: "auto",
          paddingTop: "2%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            padding: "10px",
            marginY: "10px",
            backgroundColor: "#27272a",
            width: "fit-content",
            maxWidth: "70%",
            borderRadius: "10px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              right: "-20px",
              border: "10px solid transparent",
              borderLeftColor: "#2E2E2E",
              transform: "translateY(-50%)",
            },
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
            "&::before": {
              content: '""',
              position: "absolute",
              top: "50%",
              right: "-20px",
              border: "10px solid transparent",
              borderLeftColor: "#2563eb",
              transform: "translateY(-50%)",
            },
          }}
        >
          <Typography>Chat: 2 HHElsdfdjsdfhjdjsdfjdjddjdjj</Typography>
        </Box>
      </Stack>
    </AppBar>
  );
};

export default Chat;
