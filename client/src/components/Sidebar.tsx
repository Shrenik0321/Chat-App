import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
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
import LogoutIcon from "@mui/icons-material/Logout";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";
import TagIcon from "@mui/icons-material/Tag";

const drawerWidth = 300;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Sidebar({ open, setOpen }: any) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

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
              {["All mail", "Trash"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <SmartToyIcon sx={{ color: "white" }} />
                      ) : (
                        <LogoutIcon sx={{ color: "white" }} />
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
              <Stack direction={"row"} spacing={11}>
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
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <TagIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Technology</ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <TagIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Sciences</ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <TagIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Entertainment</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
              <Divider />
              <Box>
                <Typography>
                  <h3>#Direct Messages</h3>
                </Typography>
                <List>
                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Michael Jackson</ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Shakira</ListItemText>
                    </ListItemButton>
                  </ListItem>

                  <ListItem sx={{ padding: "0px" }}>
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />{" "}
                      </ListItemIcon>
                      <ListItemText>Lemony Snicket</ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Drawer>
    </Box>
  );
}
