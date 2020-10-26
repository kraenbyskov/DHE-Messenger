import React, { useEffect, useState } from "react";

import { firebase } from "../../Global/Firebase/config";

import ListItem from "@material-ui/core/ListItem";
import { ListItemIcon, ListItemText, ListSubheader, makeStyles, List, Drawer } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

import DeleteChannel from "./DeleteChannel";
import EditChannel from "./EditChannel";


const useStyles = makeStyles(() => ({
  drawer: {
    width: "auto",
    flexShrink: 0,
  },
  drawerPaper: {
    position: "relative",
    width: "auto",
  },
}));

const FetchRightSideData = (channel, setState) => {
  const ref = firebase
    .firestore()
    .collection("Channels")
    .doc(channel);
  ref.get().then((doc) => {
    if (doc.exists) {
      const board = doc.data();
      setState(board);
    } else {
      console.log("No such document!");
    }
  });
}



const RightSidebar = ({ ChannelSelection, setEditChannelsDisplay }) => {
  const [Data, setData] = useState(null);



  useEffect(() => {
    if (ChannelSelection) {
      FetchRightSideData(ChannelSelection, setData);
    }
    console.log("hey")
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
          <EditChannel setEditChannelsDisplay={setEditChannelsDisplay} />
        </List>
      ) : null}
    </Drawer>
  );
};

export default RightSidebar;
