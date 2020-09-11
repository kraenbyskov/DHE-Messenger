import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import DeleteChannel from "./DeleteChannel";
import EditChannel from "./EditChannel";

import PersonIcon from "@material-ui/icons/Person";

const drawerWidth = "auto";

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    width: drawerWidth,
  },
}));

const RightSidebar = ({ ChannelSelection }) => {
  const ref = firebase.firestore().collection("Channels").doc(ChannelSelection);
  console.log("RightSidebar -> ChannelSelection", ChannelSelection);
  const [Data, setData] = useState(null);
  console.log("RightSidebar -> Data", Data);

  useEffect(() => {
    ref.get().then((doc) => {
      if (doc.exists) {
        const board = doc.data();
        setData(board);
      } else {
        console.log("No such document!");
      }
    });
    // eslint-disable-next-line
  }, [ChannelSelection]);

  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="right"
    >
      <List>
        <List
          subheader={<ListSubheader>{ChannelSelection}</ListSubheader>}
          className={classes.root}
        ></List>
        <List
          subheader={<ListSubheader>Admin</ListSubheader>}
          className={classes.root}
        ></List>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={Data && Data.Admin} />
        </ListItem>
        <List
          subheader={<ListSubheader>Users</ListSubheader>}
          className={classes.root}
        ></List>

        {Data &&
          Data.Users &&
          Data.Users.map((user) => (
            <ListItem key={user}>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={user} />
            </ListItem>
          ))}
      </List>
      {Data && Data.Admin === localStorage.getItem("Username") ? (
        <List>
          <DeleteChannel Channel={ChannelSelection} />
          <EditChannel />
        </List>
      ) : null}
    </Drawer>
  );
};

export default RightSidebar;
