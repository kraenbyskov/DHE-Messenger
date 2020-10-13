import React from 'react'

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import ListItemText from "@material-ui/core/ListItemText";


const ChannelButton = ({ChannelName, SelectChannel}) => {
    return ( 

        <ListItem button key={ChannelName}>
        <ListItemIcon>
          <ChatBubbleOutlineOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText
                        primary={ChannelName}
                        onClick={() =>  SelectChannel(ChannelName)}
                    />
       

      </ListItem>

     );
}
 
export default ChannelButton;