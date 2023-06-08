import { useEffect, useState, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import HomeIcon from "@mui/icons-material/Home";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Unstable_Grid2";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import LogoutIcon from "@mui/icons-material/Logout";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import TagIcon from "@mui/icons-material/Tag";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase-config/firebase";
import { useNavigate } from "react-router";
import { collection, getDocs } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function ChatAISidebar({ open, setOpen }: any) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    return signOut(auth);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate("/home");
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
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
              <Stack direction={"row"} spacing={11}>
                <Stack
                  sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    onClick={() => {
                      navigate("/home");
                    }}
                  >
                    <h3>Messages</h3>
                  </Typography>
                </Stack>
                <Stack
                  sx={{
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                ></Stack>
              </Stack>
            </DrawerHeader>
            <Divider />
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
