import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EditIcon from "@material-ui/icons/Edit";

const EditChannel = () => {
  return (
    <ListItem button onClick={() => console.log("edit")}>
      <ListItemIcon>
        <EditIcon />
      </ListItemIcon>
      <ListItemText primary={"Edit Channel"} />
    </ListItem>
  );
};

export default EditChannel;
