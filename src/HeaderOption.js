import React from 'react';
import "./CSS/HeaderOption.css"
import { Avatar } from "@mui/material";


function HeaderOption({Icon, title, avatar}) {
  return (
    <div className="header_options">
       {
        Icon && <Icon></Icon>
       }
       {
        avatar && <Avatar name={avatar}/>
       }
       <span>{title}</span>
    </div>
  )
}

export default HeaderOption