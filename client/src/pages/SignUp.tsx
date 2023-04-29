import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  async function handleSignIn() {
    navigate("/sign-up");
  }

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={12}
        sm={8}
        md={3}
        component={Paper}
        elevation={6}
        square
        sx={{ backgroundColor: "#535bf2" }}
        container
        justifyContent="center"
        alignItems="center"
      ></Grid>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1500576992153-0271099def59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </Grid>
  );
}
