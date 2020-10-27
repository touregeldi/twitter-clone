import React from "react";
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from "../SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import {Button} from "@material-ui/core";



function Sidebar(){
    return(
        <div className="sidebar">
            <TwitterIcon className="twitterIcon"/>

            <SidebarOption active text="Home" Icon={HomeIcon}/>
            <SidebarOption text="Explore" Icon={SearchIcon}/>
            <SidebarOption text="Notifications" Icon={NotificationsNoneIcon}/>
            <SidebarOption text="Messages" Icon={MailOutlineIcon}/>
            <SidebarOption text="Bookmars" Icon={BookmarkBorderIcon}/>
            <SidebarOption text="Lists" Icon={ListAltIcon}/>
            <SidebarOption text="Profile" Icon={PersonOutlineIcon}/>
            <SidebarOption text="More" Icon={MoreHorizOutlinedIcon}/>

            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>

        </div>
    );
}

export default Sidebar;