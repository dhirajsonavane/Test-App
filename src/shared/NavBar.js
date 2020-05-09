import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const NavBar = () => {
  return (
    <div>
      <AppBar position="static" style = {{backgroundColor: '#3c1b5a'}}>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            React Material UI - Traffic Monitoring
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
