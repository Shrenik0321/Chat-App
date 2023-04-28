import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const drawerWidth = 350;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

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

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Home() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
            Messenger
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#535bf2",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Grid container sx={{ height: "100%" }}>
          <Grid
            xs={2}
            sx={{
              backgroundColor: "#3730a3",
              height: "100%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <List>
              {["All mail", "Trash"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <InboxIcon sx={{ color: "white" }} />
                      ) : (
                        <MailIcon sx={{ color: "white" }} />
                      )}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid
            xs={10}
            sx={{
              height: "100%",
              overflow: "auto",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <DrawerHeader>
              <Stack direction={"row"} spacing={16}>
                <Stack
                  sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography>
                    <h3>Messenger</h3>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    onClick={handleDrawerClose}
                    sx={{ color: "white" }}
                  >
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </Stack>
              </Stack>
            </DrawerHeader>
            <Divider />
            <Stack sx={{ paddingX: "5%" }}>
              <TextField
                id="outlined-basic"
                label="Search..."
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
              />

              <Box>
                <Typography>
                  <h3>#Channels</h3>
                </Typography>
                <List>
                  {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
              <Divider />
              <Box>
                <Typography>
                  <h3>#Direct Messages</h3>
                </Typography>
                <List>
                  {["Inbox", "Starred", "Send email", "Drafts"].map(
                    (text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
      <Main open={open} sx={{ height: "100vh", backgroundColor: "#242424" }}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
