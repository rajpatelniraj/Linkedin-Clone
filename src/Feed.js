import React from "react";
import { Avatar } from "@mui/material";
import PhotoIcon from '@mui/icons-material/Photo';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import "./feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_input">
        <Avatar/>
        <form>
          <input type="text" placeholder="Start a post" />
          <input type="Submit" />
        </form>
      </div>

      <div className="feed_options">

        <div className="option">
        <PhotoIcon/>
        <span>Photo</span>
        </div>

        <div className="option">
        <SmartDisplayIcon/>
        <span>Video</span>
        </div>

        <div className="option">
        <EventIcon/>
        <span>Event</span>
        </div>

        <div className="option">
        <ArticleIcon/>
        <span>Write Article</span>
        </div>
      </div>
    </div>
  );
}

export default Feed;
