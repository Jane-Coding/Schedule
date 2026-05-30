import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { Outlet, NavLink } from "react-router";

import Dashboard from "./Dashboard";
import TodayPage from "./TodayPage";

const drawerWidth = 240;

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Dashboard
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
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Menu
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          <ListItemButton component={NavLink} to="/today">
            <ListItem>Day</ListItem>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/week">
            <ListItem>Week</ListItem>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/month">
            <ListItem>Month</ListItem>
          </ListItemButton>
          <ListItemButton component={NavLink} to="/year">
            <ListItem>Year</ListItem>
          </ListItemButton>
        </List>
        <Divider />
        <List>
          <ListItemButton component={NavLink} to="/settings">
            <ListItem>Settings</ListItem>
          </ListItemButton>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {/* Отступ для шапки */}
        <Toolbar />

        {/* Рабочая часть */}
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
