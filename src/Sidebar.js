import React from "react";
import "./CSS/Sidebar.css";
import { Avatar } from "@mui/material";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_profile">
        <img src="https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" />

        <div className="profile_details">
          <Avatar />
          <h4>Niraj Kumar</h4>
          <p>
            Full Stack Developer 💻|| Python📺 || Java🧑‍🎓 || JavaScript📶 ||
            React Js🌐 ||
          </p>
        </div>

        <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who's viewed your profile</p>
          <p className="sidebar_statNumber"> 77 </p>
        </div>
        <div className="sidebar_stat">
          <p>Impressions of your post</p>
          <p className="sidebar_statNumber"> 187 </p>
        </div>
      </div>
      <div className="sidebar_recent">
        <p>Recent</p>
        <p className="hash"><span>#</span>branding</p>
        <p className="hash"><span>#</span>marketing</p>
        <p className="hash"><span>#</span>programming</p>
        <p className="hash"><span>#</span>webdevlopment</p>
        <p className="hash"><span>#</span>reactjs</p>
        <p className="hash"><span>#</span>reduxtoolkit</p>
      </div>

      </div>
    </div>
  );
}

export default Sidebar;
