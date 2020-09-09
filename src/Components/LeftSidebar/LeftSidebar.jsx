import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import AddNewChannnel from "../LeftSidebar/AddNewChannel";
import ListOfChannels from "../LeftSidebar/ListOfChannels";
import { makeStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";

const drawerWidth = "auto";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
}));

const LeftSidebar = ({ SelectChannel }) => {
  const [AddChannelWindow, setAddChannelWindow] = useState(true);
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List>
        <ListOfChannels SelectChannel={SelectChannel} />
        {AddChannelWindow ? (
          <AddNewChannnel setAddChannelWindow={setAddChannelWindow} />
        ) : null}
      </List>
    </Drawer>
  );
};

export default LeftSidebar;
