"use client";
import {
  AppBar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@/node_modules/@mui/material/index";
import MenuIcon from "@/node_modules/@mui/icons-material/Menu";

import React, { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu open={isMenuOpen} onClose={handleClose}>
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Navigation;
