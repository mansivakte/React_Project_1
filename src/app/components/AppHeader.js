import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Contact"];

export default function AppHeader() {
  let navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My APP
          </Typography>

          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem("isUserLogin");
              return navigate("/");
            }}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
