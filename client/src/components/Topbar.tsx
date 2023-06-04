import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Topbar = ({ open, setOpen }: any) => {
  const [messageUser, setMessageUser] = useState("");
  const currentUrl = window.location.href;

  function getUri(currentUrl: string) {
    const url = new URL(currentUrl);
    const lastSegment: any = url.pathname
      .split("/")
      .filter((segment) => segment !== "")
      .pop();
    const decodedSegment = decodeURIComponent(lastSegment.replace(/%20/g, " "));
    return decodedSegment;
  }

  useEffect(() => {
    setMessageUser(getUri(currentUrl));
  }, [currentUrl]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{ backgroundColor: "#242424", color: "white" }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {messageUser}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
