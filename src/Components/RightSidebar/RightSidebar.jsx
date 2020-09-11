import React, { useEffect, useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PersonIcon from "@material-ui/icons/Person";

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

const RightSidebar = ({ ChannelSelection }) => {
  const ref = firebase.firestore().collection("Channels").doc(ChannelSelection);
  const [Data, setData] = useState(null);

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
  }, []);

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
        <p>Admin</p>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary={Data && Data.Admin} />
        </ListItem>
        <p>Users</p>

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
    </Drawer>
  );
};

export default RightSidebar;
