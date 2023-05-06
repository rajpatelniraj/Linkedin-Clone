import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import "./CSS/Header.css"
import HeaderOption from "./HeaderOption";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar } from "@mui/material";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <div className="header_logo">
            <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />
        </div>

        <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder="Search"/>
        </div>
      </div>

      <div className="header_right">
            <HeaderOption Icon={HomeIcon} title="Home"/>
            <HeaderOption Icon={PeopleIcon} title="My Network"/>
            <HeaderOption Icon={ MessageIcon} title="Messaging"/>
            <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
            <HeaderOption Icon={WorkIcon} title="Jobs"/>
            <HeaderOption avatar={Avatar} title="Niraj Kumar"/>
      </div>
    </div>
  );
}

export default Header;
