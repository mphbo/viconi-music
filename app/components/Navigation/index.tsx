"use client";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@/node_modules/@mui/material/index";
import { Inbox, Mail, Menu } from "@/node_modules/@mui/icons-material/index";

import React, { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);

  const list = () => (
    <List sx={{ bgColor: "rgb(1, 1, 1 / 0.7)" }}>
      {["Home", "Music", "Video", "Tour", "Newsletter"].map((text, index) => (
        <>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {text !== "Newsletter" && <Divider />}
        </>
      ))}
    </List>
  );

  return (
    <div style={{ height: 0, alignSelf: "end" }}>
      {/* <AppBar position="static">
        <Toolbar> */}
      <IconButton onClick={() => setOpen(true)} style={{ margin: "20px" }}>
        <Menu fontSize={"large"} color="black" />
      </IconButton>
      {/* </Toolbar>
      </AppBar> */}
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        anchor={"top"}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default Navigation;
